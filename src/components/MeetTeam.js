import React from "react";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";
import subhan from "../assets/subhaaan 1.png";
import hamza from "../assets/Frame 3.png";
import maheen from "../assets/maheeen 1.png";

export default function MeetTheTeam() {
  let navigate = useNavigate();
  return (
    <div
      className="gradient "
      style={{
        margin: "0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        gap: "80px",
      }}
    >
      <button
        type="button"
        className="h-[20px] w-[25px] absolute left-[10%] top-[13%]"
        onClick={() => navigate(-1)}
      >
        <img src={Back} alt="go back" />
      </button>
      <div
        className="name ml-[100px]"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "GROUPE",
          gap: "1rem",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
          }}
        >
          MindSCAPE
        </div>
        <div
          style={{
            fontSize: "2rem",
          }}
        >
          VISUALIZING THOUGHTS
        </div>
      </div>
      <div
        className="ml-[100px]"
        style={{
          backgroundColor: "#0D161A",
          padding: "50px 100px 100px 100px",
          color: "white",
          boxShadow: "3px 5px 4px 0px white",
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div className=" flex justify-center items-center gap-[40px] pt-[40px]">
          <div className="flex justify-center flex-col items-center gap-[30px]">
            <img className="rounded-3xl" src={subhan} alt="subhan" />
            <div className="text-2xl">Subhan Wasif</div>
          </div>
          <div className="flex justify-center flex-col items-center gap-[30px]">
            <img className="rounded-3xl" src={hamza} alt="subhan" />
            <div className="text-2xl">Hamza Ahmad</div>
          </div>
          <div className="flex justify-center flex-col items-center gap-[30px]">
            <img className="rounded-3xl" src={maheen} alt="subhan" />
            <div className="text-2xl">Maheen Khurram</div>
          </div>
        </div>
      </div>
    </div>
  );
}
