import React from "react";
import subhan from "../assets/subhaaan 2.png";
import hamza from "../assets/image 2.png";
import maheen from "../assets/maheeen 2.png";

export default function AboutPage() {
  return (
    <div
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
      <div
        className="name"
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
        style={{
          margin: "0",
          backgroundColor: "black",
          padding: "50px 100px 100px 100px",
          color: "white",
          boxShadow: "20px 20px 100px #12E1B9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "GROUPE",
            fontSize: "3rem",
            padding: "20px",
            color: "white",
          }}
        >
          meet the team
        </div>
        <div
          className="images"
          style={{
            display: "flex",

            justifyContent: "center",
            gap: "10rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={hamza}
              style={{
                height: "250px",
              }}
            />
            <div
              style={{
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
            >
              Hamza Ahmand
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={maheen}
              style={{
                height: "250px",
              }}
            />
            <div
              style={{
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
            >
              Maheen Khurram
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={subhan}
              style={{
                height: "250px",
              }}
            />
            <div
              style={{
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
            >
              Subhan Wasif
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
