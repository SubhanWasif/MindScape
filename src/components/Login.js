import React from "react";
import auth from "../firebase.js";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Home.png";
import AboutImage from "../assets/About.png";
import Letter from "../assets/Letter.png";
import User from "../assets/user-03.png";
import "./LandingPage.css";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import GOOGLE from "../assets/google (1).png";
const provider = new GoogleAuthProvider();

export default function Login() {
  const SignInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const token = credential.accessToken;
        console.log(result);
        console.log(token);
        navigate("/"); // Redirect to the home page
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about"); // Use the push method to navigate to the desired path
  };
  const navigateToHome = () => {
    navigate("/landingpage"); // Use the push method to navigate to the desired path
  };
  const navigateToSignup = () => {
    navigate("/signup"); // Use the push method to navigate to the desired path
  };
  const navigateToContact = () => {
    navigate("/contact");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanfleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log("clicked");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        const alert = document.getElementById("alert");
        if (error.code === "auth/invalid-credential") {
          alert.innerHTML = "User not found!";
          return;
        }
      });
  };

  return (
    <div className="flex gradient">
      <div className="h-screen w-[15%]">
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
            <img
              alt="i will update this later"
              src={HomeImage}
              className="h-[30px]"
            />
            <div>Home</div>
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
            onClick={navigateToContact}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={Letter} />
            <div>Contact Us</div>
          </div>
          <div
            type="button"
            onClick={navigateToSignup}
            className=" cursor-pointer bg-[#4B8299] rounded-[50px]  w-[100%] text-left pl-[20px] pt-[20px] pb-[20px] flex  gap-[10px] items-center"
          >
            <img alt="i will update this later" src={User} />
            <div>Sign Up</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[85%]  text-white  flex justify-center flex-col gap-[40px] p-4 items-center ">
        <div className="GROUPE flex w-[100%] flex-col text-center">
          <div className="text-[60px]">mindSCAPE</div>
          <div className="text-[30px]">VISUALIZING THOUGHTS</div>
        </div>
        <div className="relative pt-[100px] pb-[100px] gradient-box pr-[150px] pl-[150px] rounded-[70px] flex flex-col text-center justify-center content-center gap-[30px] shadow-[3px_5px_8px_0px_rgb(255,255,255)] items-center">
          <div className="title flex flex-col text-center gap-[4px]">
            <div className="text-[30px]">Hello world!</div>
            <div className="font-thin text-[13px] inset">
              Login with your details
            </div>
          </div>
          <form onSubmit={hanfleSubmit}>
            <div className="flex  flex-col gap-[20px] items-center">
              <input
                type="email"
                className="p-[20px] rounded-[50px] text-black  border-none w-[120%] text-[20px] placeholder-black"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="p-[20px] rounded-[50px]  text-black border-none w-[120%] text-[20px] placeholder-black"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div
                id="alert"
                className="self-end mr-[30px] cursor-pointer text-rose-400"
              ></div>

              <button
                type="submit"
                className="  rounded-[50px] w-[90%] p-[20px] bg-black cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
          {/* <button
            onClick={SignInwithGoogle}
            className="w-[30px] absolute right-[20%] bottom-[21%] cursor-pointer "
          >
            <img src={GOOGLE} />
          </button> */}
        </div>
      </div>
    </div>
  );
}
