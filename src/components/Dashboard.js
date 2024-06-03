import React from "react";
import auth from "../firebase.js";
import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import EEG2TEXT from "../assets/TXT.png";
import LogoutImage from "../assets/Logout.png";
import EEG2IMAGE from "../assets/Image File.png";
import Team from "../assets/team.png";
import { signOut } from "firebase/auth";
import backgroundVideo from "../assets/backgroundvideo2.mp4";

import "./LandingPage.css";

export default function Dashboard() {
  let navigate = useNavigate();

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
  const navigateToeeg2Image = () => {
    navigate("/EEGtoImage");
  };
  const navigateToeeg2Text = () => {
    navigate("/EEGtoText");
  };
  const navigateToMeetTheTeam = () => {
    navigate("/meettheteam");
  };

  return (
    <div className="flex gradient ">
      <div className="h-screen w-[15%] text-white ">
        <div className=" GROUPE flex w-[100%] p-4 content-center justify-center text-[18px] text-center mt-[100px] flex-col">
          <div>MindSCAPE</div>
          <div>VISUALIZING THOUGHTS</div>
        </div>
        <div className="flex justify-center flex-col gap-[12px] mt-[60px]">
          <div
            type="button"
            className=" cursor-pointer bg-[#0D161A] rounded-[50px] border-[1px] border-white w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="home" src={HomeImage} className="h-[30px]" />
            <div>Home</div>
          </div>

          <div
            type="button"
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
            onClick={navigateToeeg2Image}
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
            className="  cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
            onClick={navigateToeeg2Text}
          >
            <img
              alt="i will update this later"
              src={EEG2TEXT}
              className="h-[30px]"
            />
            <div>EEGToText</div>
          </div>
          <div
            type="button"
            onClick={navigateToMeetTheTeam}
            className=" f cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px]  items-center"
          >
            <img
              alt="i will update this later"
              src={Team}
              className=" mt-[5px] h-[25px]"
            />
            <div>Meet The Team</div>
          </div>
          <div
            type="button"
            onClick={navigateToAbout}
            className="  cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={AboutImage} />
            <div>About</div>
          </div>

          <div
            type="button"
            onClick={Logout}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="Logout" src={LogoutImage} />
            <div>Log Out</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%]  text-white  flex justify-center flex-col gap-[50px] p-4 items-center ">
        <div className="GROUPE flex w-[100%] flex-col text-center">
          <div className="text-[60px]">mindSCAPE</div>
          <div className="text-[30px]">VISUALIZING THOUGHTS</div>
        </div>

        <div className="text-white text-[40px] GROUPE">
          WHAT WOULD YOU LIKE TO DO
        </div>
        <div
          className="flex justify-center items-center gap-[30px]"
          id="buttons"
        >
          <div className=" text-2xl w-[40%] flex flex-col justify-center items-center gap-[10px] bg-black pt-[20px] pb-[40px] pr-[20px] pl-[20px] rounded-[40px]">
            <div className="text-white text-[30px] rounded-[40px] ">
              EEGToText
            </div>
            <div
              type="button"
              onClick={navigateToeeg2Text}
              className="w-[70%] pt-[80px] pr-[20px] pl-[20px] pb-[80px]  rounded-[40px] bg-[#0D161A]  text-center cursor-pointer"
            >
              The System Processes the EEG data using LLMs to interpret thoughts
              and display the translated text.
            </div>
          </div>
          <div className=" text-2xl w-[40%] flex flex-col justify-center items-center gap-[10px] bg-black pt-[20px] pb-[40px] pr-[15px] pl-[15px] rounded-[40px]">
            <div className="text-white text-[30px] rounded-[40px] ">
              EEGToImage
            </div>
            <div
              type="button"
              onClick={navigateToeeg2Image}
              className="w-[70%] pt-[80px] pr-[15px] pl-[20px] pb-[80px] bg-[#0D161A] rounded-[40px] text-center cursor-pointer"
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
