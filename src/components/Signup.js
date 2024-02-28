import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import Letter from "../assets/Letter.png";
import User from "../assets/user-03.png";
import "./LandingPage.css";

export default function Login() {
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
        <div className="flex justify-center flex-col gap-[12px] mt-[100px]">
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
            <img src={User} />
            <div>Sign Up</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%] bg-black text-white  flex justify-center flex-col gap-[40px] p-4 items-center ">
        <div className="GROUPE flex w-[100%] flex-col text-center">
          <div className="text-[60px]">mindSCAPE</div>
          <div className="text-[30px]">VISUALIZING THOUGHTS</div>
        </div>
        <div className="pt-[60px] pb-[100px] pr-[150px] pl-[150px] rounded-2xl flex flex-col text-center justify-center content-center gap-[40px] shadow-[20px_20px_100px_rgb(18,255,185,0.5)] items-center">
          <div className="title flex flex-col text-center gap-[4px]">
            <div className="text-[30px]">SIGN UP</div>
            <div className="font-thin text-[13px] inset">
              Enter Your details
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-[130%] items-center">
            <div className="flex gap-[100px]">
              <input
                className="p-[20px] rounded-[50px] bg-black text-white border-none w-[90%] text-[20px] placeholder-white"
                placeholder="First Name"
                style={{
                  boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
                }}
              />
              <input
                className="p-[20px] rounded-[50px] bg-black text-white border-none w-[90%] text-[20px] placeholder-white"
                placeholder="Last Name"
                style={{
                  boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
                }}
              />
            </div>
            <div className="flex gap-[100px]">
              <input
                className="p-[20px] rounded-[50px] bg-black text-white border-none w-[90%] text-[20px] placeholder-white"
                placeholder="Username"
                style={{
                  boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
                }}
              />
              <input
                className="p-[20px] rounded-[50px] bg-black text-white border-none w-[90%] text-[20px] placeholder-white"
                placeholder="Email"
                style={{
                  boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
                }}
              />
            </div>
            <div className="flex gap-[100px]">
              <input
                className="p-[20px] rounded-[50px] bg-black text-white border-none w-[90%] text-[20px] placeholder-white"
                placeholder="Password"
                style={{
                  boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
                }}
              />
              <input
                className="p-[20px] rounded-[50px] bg-black text-white border-none w-[90%] text-[20px] placeholder-white"
                placeholder="Confirm Password"
                style={{
                  boxShadow: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
                }}
              />
            </div>

            <button className="rounded-[50px] w-[30%] p-[20px] shadow-[10px_10px_20px_rgb(18,255,185,0.4)] mt-[20px] cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
