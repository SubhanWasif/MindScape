import React from "react";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  // Function to navigate back

  let navigate = useNavigate();

  return (
    <div
      className="gradient"
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
        <div
          style={{
            fontSize: "40px",
          }}
        >
          About Us
        </div>
        <div style={{}}>
          At Mindscape Mapper, we pioneer the intersection of neuroscience and
          artificial intelligence to revolutionize thought visualization.
          Founded by a dedicated team of researchers from Forman Christian
          College's Department of Computer Science including Hamza Ahmed, Maheen
          Khurram, and Subhan Wasif, under the guidance of Dr. Haroon Shakeel
          and Dr. Murtaza Taj, our project aims to develop a real-time
          Brain-Computer Interface (BCI) using EEG signals. This innovative
          technology is designed to convert thoughts into text and images,
          facilitating groundbreaking applications in assistive technology for
          individuals with disabilities, as well as advancing cognitive research
          and medical diagnostics. Our work is rooted in extensive research,
          leveraging advanced machine learning models and a unique
          EEG-Text-Image pipeline to bring thought visualization closer to
          reality. Join us in exploring the endless possibilities of connecting
          the human brain with the digital world, fostering advancements that
          once seemed beyond reach.
        </div>
      </div>
    </div>
  );
}
