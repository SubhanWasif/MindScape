import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import LogoutImage from "../assets/Logout.png";
import EEG2Text from "../assets/TXT.png";
import EEG2IMAGE from "../assets/Image File.png";
import Team from "../assets/team.png";
import "./LandingPage.css";
import { signOut } from "firebase/auth";
import auth from "../firebase";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import axios from "axios";

export default function Dashboard() {
  const [imageSrc, setImageSrc] = useState("");
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const items = [
    "a person standing on a sidewalk with hail on the ground",
    "a moose in the woods",
    "a mole lying on the ground",
    "a pile of dried plums",
    "a sharp pointed metal object with a red handle",
    "a round metal container with a round lid",
    "a plate of french fries",
    "a stack of plastic containers",
    "a group of pencils next to a notebook",
    "a wooden brush with black bristles",
    "a pepper mill next to a plate of salad",
  ];
  const handleClick = (item) => {
    setSelectedItem(item);
  };
  const downloadfile = async () => {
    if (!selectedItem) {
      alert("Please select an item first");
      return;
    }
    let data;
    if (!generatedText) {
      data = {
        "Selected Prompt": selectedItem,
      };
    } else {
      data = {
        "Selected Prompt": selectedItem,
        "Generated Text": generatedText,
      };
    }

    const dataString = JSON.stringify(data, null, 2);
    const blob = new Blob([dataString], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "download.txt";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fetchData = async () => {
    if (!selectedItem) {
      alert("Please select an item first");
      return;
    }

    const result = document.getElementById("result");
    result.innerText = "";
    setLoading(true);
    setIsVisible(false);
    try {
      const response = await axios.post(
        "https://nodebackendformindscape.onrender.com/api/data",
        {
          prompt: selectedItem,
        }
      );
      const data = response.data;
      console.log(data);
      setGeneratedText(data["generated_sequence"]);
      const prompt = data["generated_sequence"];
      console.log(prompt);
      try {
        const image = await fetch(
          "https://imageapi-u8xh.onrender.com/generate-image",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: prompt,
            }),
          }
        );
        if (!image.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await image.blob();
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
        setIsVisible(true);
        setLoading(false);
        const result = document.getElementById("result");
        result.innerText = prompt;
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  };
  const Logout = () => {
    signOut(auth) // Call the signOut method with the auth object
      .then(() => {
        // Redirect the user to the login page or any other appropriate page
        navigate("/landingpage"); // Redirect to login page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const navigateToAbout = () => {
    navigate("/about"); // Use the push method to navigate to the desired path
  };
  const navigateToHome = () => {
    navigate("/"); // Use the push method to navigate to the desired path
  };
  const navigateToeeg2Text = () => {
    navigate("/EEGtoText");
  };
  const navigateToMeetTheTeam = () => {
    navigate("/meettheteam");
  };
  return (
    <div className="flex gradient">
      <div className="h-screen w-[15%] text-white ">
        <div className=" GROUPE flex w-[100%] p-4 content-center justify-center text-[18px] text-center mt-[100px] flex-col">
          <div>MindSCAPE</div>
          <div>VISUALIZING THOUGHTS</div>
        </div>
        <div className="flex justify-center flex-col gap-[12px] mt-[60px]">
          <div
            type="button"
            onClick={navigateToHome}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img
              alt="i will update this later"
              src={HomeImage}
              className="h-[30px]"
            />
            <div>Home</div>
          </div>

          <div
            type="button"
            className=" cursor-pointer bg-[#0D161A] border-[1px] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img
              alt="i will update this later"
              src={EEG2IMAGE}
              className="h-[30px]"
            />
            <div>EEGToImage</div>
          </div>
          <div
            type="button"
            onClick={navigateToeeg2Text}
            className=" cursor-pointer bg-[#4B8299]   rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img
              alt="i will update this later"
              src={EEG2Text}
              className="h-[30px]"
            />
            <div>EEGToText</div>
          </div>
          <div
            type="button"
            onClick={navigateToMeetTheTeam}
            className="  cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img
              alt="i will update this later"
              src={Team}
              className="mt-[5px] h-[25px]"
            />
            <div>Meet The Team</div>
          </div>
          <div
            type="button"
            onClick={navigateToAbout}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={AboutImage} />
            <div>About </div>
          </div>
          <div
            type="button"
            onClick={Logout}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={LogoutImage} />
            <div>Log Out</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%] text-white  flex justify-evenly flex-col gap-[50px] p-4 items-center ">
        <div className="GROUPE flex justify-center items-center flex-col gap-[70px] ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[50px]">EEG2IMAGE</div>
            <div className="text-[30px]">translating thoughts</div>
          </div>
          <div className="flex gap-[100px] relative ">
            <div className=" h-[500px] w-[500px]   shadow-[3px_5px_8px_0px_rgb(255,255,255)] rounded-2xl flex flex-col ">
              {" "}
              <div className="GROUPE text-center text-[30px] pt-[20px]">
                INPUT
              </div>
              <div className="scroll-container">
                {items.map((item, index) => (
                  <button
                    key={index}
                    className={`scroll-item ${
                      selectedItem === item ? "selected" : ""
                    }`}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="self-end m-[20px]">
                <FileUpload
                  className="bg-[#1f6c8c] rounded-xl p-[10px] text-white"
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="image/*"
                  maxFileSize={1000000}
                  chooseLabel="Browse"
                />
              </div>
            </div>
            <div className=" h-[500px] w-[500px]   shadow-[3px_5px_8px_0px_rgb(255,255,255)] rounded-2xl flex flex-col  items-center">
              {" "}
              <div
                id="output"
                className="GROUPE text-center text-[30px] pt-[20px] "
              >
                OUTPUT
              </div>
              {isVisible && (
                <img
                  id="myimage"
                  src={imageSrc}
                  alt="not found"
                  className=" pr-[10%] pl-[10%]  h-[60%] w-[80%]"
                />
              )}
              {loading && (
                <ClipLoader
                  color="#ffffff"
                  size={50}
                  className="absolute top-[50%] right-[20%]   "
                />
              )}
              <div
                id="result"
                className="uppercase text-center pr-[10%] pl-[10%] "
              ></div>
              <div
                type="button"
                onClick={downloadfile}
                className="self-end m-[20px] bottom-[0%] absolute bg-[#1f6c8c] rounded-xl p-[10px] text-white cursor-pointer"
              >
                Download
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={fetchData}
              className=" bg-[#4B8299]  text-white pt-2 pb-2 pr-4 pl-4 text-[20px] rounded-[50px] mt-[20px] "
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
