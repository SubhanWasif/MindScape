import React from "react";
import subhan from "../assets/subhaaan 1.png";
import hamza from "../assets/Frame 3.png";
import maheen from "../assets/maheeen 1.png";
import ellipse from "../assets/Ellipse 1.png";
import backgroyund2 from "../assets/background2.png";

import "./LandingPage.css";
// Importing assets
import backgroundImage from "../assets/background.png";
import copyrights from "../assets/Copyright.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-black w-[100%] h-[130vh] text-white">
      <div className="absolute right-[10%] top-[10%] rotate-[10deg] ">
        <img src={ellipse} />
      </div>
      <div className="absolute  right-[5%] bottom-[-40px]">
        <img src={backgroyund2} />
      </div>
      <div className="absolute right-[10%] top-[10%] cursor-pointer">
        <div onClick={navigateToAbout} className=" text-xl">
          About Us
        </div>
      </div>
      <div className="absolute left-[10%] top-[25%] flex gap-[30px] flex-col justify-center items-center">
        <div className="GROUPE text-[20px]">WELCOME TO</div>
        <div className="GROUPE flex flex-col justify-center items-center">
          <div className="text-[90px]">
            <div className="text-[#4B8299] inline">m</div>ind
            <div className="text-[#4B8299] inline">s</div>cape
          </div>
          <div className="text-[30px]">
            <div className="text-[#4B8299] inline">v</div>isualizing{" "}
            <div className="text-[#4B8299] inline">t</div>houghts
          </div>
        </div>
        <div className="flex gap-[40px] justify-center items-center   w-[100%]">
          <button
            className="rounded-[50px] p-[20px] w-[40%]  text-xl shadow-[10px_10px_40px_rgb(75,130,153)] cursor-pointer"
            onClick={navigateToLogin}
          >
            Login
          </button>
          <button
            className="rounded-[50px] p-[20px] w-[40%]   text-xl shadow-[10px_10px_40px_rgb(75,130,153)] cursor-pointer"
            onClick={navigateToSignup}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
