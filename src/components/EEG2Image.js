import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import Letter from "../assets/Letter.png";
import Logout from "../assets/Logout.png";
import EEG2Text from "../assets/TXT.png";
import EEG2IMAGE from "../assets/Image File.png";

import "./LandingPage.css";
function Generate() {
  console.log("clicked");

  // Define the URL of the API you want to call

  useEffect(() => {
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
    navigate("/dashboard"); // Use the push method to navigate to the desired path
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
            onClick={navigateToHome}
            className=" cursor-pointer bg-[#4B8299]   rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img
              alt="i will update this later"
              src={EEG2Text}
              className="h-[30px]"
            />
            <div>EEG2TEXT</div>
          </div>
          <div
            type="button"
            onClick={navigateToHome}
            className=" cursor-pointer bg-[#0D161A] border-[1px] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img
              alt="i will update this later"
              src={EEG2IMAGE}
              className="h-[30px]"
            />
            <div>EEG2IMAGE</div>
          </div>
          <div
            type="button"
            onClick={navigateToAbout}
            className="  cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={AboutImage} />
            <div>About Us</div>
          </div>
          <div
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={Letter} />
            <div>Contact Us</div>
          </div>
          <div
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={Logout} />
            <div>Log Out</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%]  text-white  flex justify-evenly flex-col gap-[50px] p-4 items-center relative">
        <div className="GROUPE flex justify-center items-center flex-col gap-[70px] ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[50px]">EEG2TEXT</div>
            <div className="text-[30px]">translating thoughts</div>
          </div>
          <div className="flex gap-[100px]">
            <div className=" h-[500px] w-[500px]   shadow-[3px_5px_8px_0px_rgb(255,255,255)] rounded-2xl ">
              {" "}
              <div className="text-center text-[30px] pt-[20px]">INPUT</div>
            </div>
            <div className=" h-[500px] w-[500px]   shadow-[3px_5px_8px_0px_rgb(255,255,255)] rounded-2xl ">
              {" "}
              <div className="text-center text-[30px] pt-[20px] ">OUTPUT</div>
            </div>
          </div>
          <div>
            <button
              onClick={Generate}
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
