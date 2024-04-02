import React from "react";

import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import Letter from "../assets/Letter.png";
import Logout from "../assets/Logout.png";
import EEG2Text from "../assets/TXT.png";
import EEG2IMAGE from "../assets/Image File.png";

import "./LandingPage.css";

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
      <div className="h-screen w-[85%] bg-black text-white  flex justify-center flex-col gap-[50px] p-4 items-center ">
        <div className="GROUPE flex w-[100%] flex-col text-center">
          <div className="text-[60px]">mindSCAPE</div>
          <div className="text-[30px]">VISUALIZING THOUGHTS</div>
        </div>

        <div className="text-yellow-300 text-[40px] GROUPE">
          WHAT WOULD YOU LIKE TO DO
        </div>
        <div
          className="flex justify-center items-center gap-[30px]"
          id="buttons"
        >
          <div className=" text-2xl w-[40%] flex flex-col justify-center items-center gap-[10px] shadow-[10px_10px_80px_rgb(18,255,185,0.5)] pt-[20px] pb-[40px] pr-[20px] pl-[20px] rounded-[40px]">
            <div className="text-yellow-300 text-[30px] rounded-[40px] ">
              EEGToText
            </div>
            <div
              type="button"
              className="w-[70%] pt-[80px] pr-[20px] pl-[20px] pb-[80px]  rounded-[40px] text-center cursor-pointer"
              style={{
                boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
              }}
            >
              The System Processes the EEG data using LLMs to interpret thoughts
              and display the translated text.
            </div>
          </div>
          <div className=" text-2xl w-[40%] flex flex-col justify-center items-center gap-[10px] shadow-[20px_20px_100px_rgb(18,255,185,0.5)] pt-[20px] pb-[40px] pr-[15px] pl-[15px] rounded-[40px]">
            <div className="text-yellow-300 text-[30px] rounded-[40px] ">
              EEGToImage
            </div>
            <div
              type="button"
              className="w-[70%] pt-[80px] pr-[15px] pl-[20px] pb-[80px]  rounded-[40px] text-center cursor-pointer"
              style={{
                boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
              }}
            >
              The System Processes the EEG data using LLMs to generate a visual
              representation of the interpreted thoughts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
