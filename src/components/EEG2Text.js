import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import Letter from "../assets/Letter.png";
import Logout from "../assets/Logout.png";
import EEG2Text from "../assets/TXT.png";
import EEG2IMAGE from "../assets/Image File.png";
import bg from "../assets/bg2.png";

import "./LandingPage.css";
function Generate() {
  console.log("clicked");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  // Define the URL of the API you want to call

  useEffect(() => {
    setLoading(true);
    // Use the fetch API to make a GET request to the URL
    fetch("http://localhost:5000/predict")
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON response body
        const data = response.json();
        // console.log(data);
        return data;
      })
      .then((data) => {
        // Process the data
        const reasult = document.getElementById("result");
        data = data["generated_sequence"];
        console.log(data);

        reasult.innerHTML = data;
      })
      .catch((error) => {
        // Handle any errors
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
}

export default function Dashboard() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about"); // Use the push method to navigate to the desired path
  };
  const navigateToHome = () => {
    navigate("/"); // Use the push method to navigate to the desired path
  };
  return (
    <div className="flex">
      <div className="h-screen w-[15%] bg-black text-white bg-gradient-to-r from-10% from-custom-500 to-black to-90%">
        <div className=" GROUPE flex w-[100%] p-4 content-center justify-center text-[18px] text-center mt-[100px] flex-col">
          <div>MindSCAPE</div>
          <div>VISUALIZING THOUGHTS</div>
        </div>
        <div className="flex justify-center flex-col gap-[12px] mt-[60px]">
          <div
            type="button"
            onClick={navigateToHome}
            className=" cursor-pointer bg-custom-600 rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={HomeImage} className="h-[30px]" />
            <div>Home</div>
          </div>
          <div
            type="button"
            onClick={navigateToHome}
            className=" cursor-pointer bg-custom-600 rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={EEG2Text} className="h-[30px]" />
            <div>EEG2TEXT</div>
          </div>
          <div
            type="button"
            onClick={navigateToHome}
            className=" cursor-pointer bg-custom-600 rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={EEG2IMAGE} className="h-[30px]" />
            <div>EEG2IMAGE</div>
          </div>
          <div
            type="button"
            onClick={navigateToAbout}
            className="  cursor-pointer bg-custom-600 rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={AboutImage} />
            <div>About Us</div>
          </div>
          <div
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
            className=" cursor-pointer bg-custom-600 rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={Letter} />
            <div>Contact Us</div>
          </div>
          <div
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
            className=" cursor-pointer bg-custom-600 rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={Logout} />
            <div>Log Out</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%] bg-black text-white  flex justify-evenly flex-col gap-[50px] p-4 items-center relative">
        <div className="GROUPE flex justify-center items-center flex-col ">
          <div className="text-[50px]">EEG2TEXT</div>
          <div className="text-[30px]">translating thoughts</div>
        </div>
        <div className="w-[80%] h-[60%]   shadow-[10px_10px_80px_rgb(18,255,185,0.5)] relative">
          <div className="absolute text-[30px] top-[20px] left-[300px] ">
            Result
          </div>
          <div
            className=" bg-black rounded-[40px] absolute left-[0px] top-[5%] mt-[40px] ml-[20px] mr-[100px] mb-[40px] w-[50%] h-[80%]"
            style={{
              boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
            }}
          >
            <div
              className="text-3xl flex justify-center items-center h-[100%] "
              id="result"
            >
              <div>
                {loading ? (
                  <ClipLoader size={150} color={"#123abc"} loading={loading} />
                ) : (
                  <div>
                    {/* Render your data here */}
                    {/* Data: {JSON.stringify(data)} */}
                  </div>
                )}
              </div>{" "}
            </div>
          </div>

          <img
            src={bg}
            className="h-[542px] absolute top-[0px] right-[-66px]"
          />
        </div>
        <div className="">
          <button
            className="border-2 pt-[10px] pb-[10px] pr-[5px] pl-[5px] cursor-pointer"
            onClick={Generate}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
