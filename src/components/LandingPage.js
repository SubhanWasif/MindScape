import React from "react";
import subhan from "../assets/subhaaan 1.png";
import hamza from "../assets/Frame 3.png";
import maheen from "../assets/maheeen 1.png";

import "./LandingPage.css";
// Importing assets
import backgroundImage from "../assets/background.png";
import copyrights from "../assets/Copyright.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about"); // Use the push method to navigate to the desired path
  };
  const navigateToLogin = () => {
    navigate("/login"); // Use the push method to navigate to the desired path
  };
  const navigateToSignup = () => {
    navigate("/signup"); // Use the push method to navigate to the desired path
  };
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "248vh",
      }}
    >
      <button
        className=""
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={navigateToAbout}
      >
        <h1
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",

            color: "white",
            fontSize: "1rem",
            fontFamily: "Arial",
          }}
        >
          About Us
        </h1>
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",

          position: "absolute",
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          gap: "4rem",
        }}
      >
        <div
          style={{
            letterSpacing: "1rem",
            fontSize: "1rem",
          }}
        >
          WELCOME TO
        </div>
        <div
          style={{
            fontFamily: "GROUPE",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "6rem",
            }}
          >
            <div
              style={{
                color: "#12E1B9",
                display: "inline",
              }}
            >
              m
            </div>
            ind
            <div
              style={{
                color: "#12E1B9",
                display: "inline",
              }}
            >
              s
            </div>
            cape
          </div>
          <div
            style={{
              fontSize: "2rem",
            }}
          >
            <div
              style={{
                color: "#12E1B9",
                display: "inline",
              }}
            >
              v
            </div>
            isualizing
            <div
              style={{
                color: "#12E1B9",
                display: "inline",
              }}
            >
              t
            </div>
            houghts
          </div>
        </div>
        <div>
          <button
            onClick={navigateToLogin}
            style={{
              padding: "1rem 4rem",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "50px",
              margin: "10px",
              cursor: "pointer",
              boxShadow: "10px 10px 20px #12E1B9",
            }}
          >
            LOG IN
          </button>
          <button
            onClick={navigateToSignup}
            style={{
              padding: "1rem 4rem",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "50px",
              margin: "10px",
              cursor: "pointer",
              boxShadow: "10px 10px 20px #12E1B9",
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: "60rem",
          padding: "60px",
          wight: "100%",
          backgroundColor: "rgb(8, 91, 75,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          borderRadius: "50px",
          flexDirection: "column",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "5rem",
            fontFamily: "GROUPE",
          }}
        >
          meet the team
        </div>
        <div className="flex gap-[100px]">
          <div className="flex justify-center items-center flex-col gap-[40px]">
            <img className="h-[350px] rounded-[30px]" src={subhan} />
            <div className="text-[25px] font-bold ">Subhan Wasif</div>
          </div>
          <div className="flex justify-center items-center flex-col gap-[40px]">
            <img className="h-[350px] rounded-[30px]" src={maheen} />
            <div className="text-[25px] font-bold ">Maheen Khurram</div>
          </div>
          <div className="flex justify-center items-center flex-col gap-[40px]">
            <img className="h-[350px]" src={hamza} />
            <div className="text-[25px] font-bold "> Hamza Ahmand</div>
          </div>
        </div>
      </div>

      <div
        className="Footer"
        style={{
          marginTop: "22.5rem",
          wight: "100%",
          height: "25vh",
          backgroundColor: "rgb(8, 91, 75,0.6)",
          position: "relative",
          display: "flex",
        }}
      >
        <div
          className="emailDetailsContainer"
          style={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "40%",
            left: "5%",
          }}
        >
          <input
            type="text"
            id="fname"
            placeholder="Type Your Email"
            name="fname"
            style={{
              border: "1px solid white",
              padding: "20px 80px 20px 10px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <button
            style={{
              border: "1px solid white",
              padding: "16px",
              fontWeight: "bold",
              backgroundColor: "rgb(8, 91, 75,0.6)",
              color: "white",

              fontSize: "20px",
            }}
          >
            Stay Updated
          </button>
        </div>
        <div
          className="copyright"
          style={{
            color: "white",
            fontSize: "20px",
            position: "absolute",
            bottom: "5%",
            left: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={copyrights} />
          <div
            style={{
              fontweight: "900",
            }}
          >
            2024 Copyright MindScape. All Rights Reserved.
          </div>
        </div>

        <div
          style={{
            color: "rgb(255, 255, 255)",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            bottom: "30%",
            right: "5%",
            gap: "1rem",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              border: "1px solid white",
              padding: "10px",
            }}
          >
            Meet the Team
          </div>
          <div
            style={{
              border: "1px solid white",
              padding: "10px 29px",
            }}
          >
            Contack Us
          </div>
        </div>
      </div>
    </div>
  );
}
