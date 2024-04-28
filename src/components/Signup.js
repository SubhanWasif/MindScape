import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import Letter from "../assets/Letter.png";
import User from "../assets/user-03.png";
import "./LandingPage.css";
import { useState } from "react";
import auth from "../firebase";

export default function Login() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about"); // Use the push method to navigate to the desired path
  };
  const navigateToHome = () => {
    navigate("/"); // Use the push method to navigate to the desired path
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const alert = document.getElementById("alert");
      alert.innerHTML = "Passwords do not match!";
      return;
    }
    if (password.length < 6) {
      const alert = document.getElementById("alert");
      alert.innerHTML = "Password should be at least 6 characters long!";
      return;
    }

    console.log(email, password, username);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/login"); // Navigate on successful registration
      })
      .catch((error) => {
        console.error(error);
        const alert = document.getElementById("alert");
        if (error.code === "auth/email-already-in-use") {
          alert.innerHTML = "Email already in use!";
          return;
        }
      });
  };

  return (
    <div className="flex bg-black">
      <div className="h-screen w-[15%] bg-[rgb(75,130,153,0.5)]">
        <div className=" GROUPE flex w-[100%] p-4 content-center justify-center text-[18px] text-center mt-[100px] flex-col text-white">
          <div>MindSCAPE</div>
          <div>VISUALIZING THOUGHTS</div>
        </div>
        <div className="flex justify-center flex-col gap-[12px] mt-[100px]">
          <div
            type="button"
            onClick={navigateToHome}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={HomeImage} className="h-[30px]" />
            <div>Home</div>
          </div>
          <div
            type="button"
            onClick={navigateToAbout}
            className="  cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={AboutImage} />
            <div>About Us</div>
          </div>
          <div
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={Letter} />
            <div>Contact Us</div>
          </div>
          <div
            type="button"
            onClick={() => {
              console.log("clicked");
            }}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img src={User} />
            <div type="button" onClick={navigateToLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%] gradient  text-white  flex justify-center flex-col gap-[40px] p-4 items-center ">
        <div className="GROUPE flex w-[100%] flex-col text-center">
          <div className="text-[60px]">mindSCAPE</div>
          <div className="text-[30px]">VISUALIZING THOUGHTS</div>
        </div>
        <div className="pt-[100px] pb-[100px] gradient-box pr-[150px] pl-[150px] rounded-[70px] flex flex-col text-center justify-center items-center gap-[30px] shadow-[3px_5px_8px_0px_rgb(255,255,255)] items-center">
          <div className="title flex flex-col text-center gap-[4px]">
            <div className="text-[30px]">Hello world!</div>
            <div className="font-thin text-[13px] inset">
              Login with your details
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <div className="flex  flex-col gap-[20px] w-[130%] items-center">
              <div className="flex gap-[50px]">
                <input
                  type="text"
                  className="p-[20px] rounded-[50px]  text-black border-none w-[90%] text-[20px] placeholder-black"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  className="p-[20px] rounded-[50px]  text-black border-none w-[90%] text-[20px] placeholder-black"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-[50px]">
                <input
                  type="password"
                  className="p-[20px] rounded-[50px]  text-black border-none w-[90%] text-[20px] placeholder-black"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="p-[20px] rounded-[50px]  text-black border-none w-[90%] text-[20px] placeholder-black"
                  placeholder="Confirm Password!"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div
                id="alert"
                className="self-end mr-[30px] cursor-pointer text-rose-400"
              ></div>
              <button
                type="submit"
                className="rounded-[50px] w-[40%] p-[20px] bg-black cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
