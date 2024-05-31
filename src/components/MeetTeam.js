import React, { useState, useEffect } from "react";
import Back from "../assets/back.png";
import { useNavigate } from "react-router-dom";
import subhan from "../assets/subhaaan 1.png";
import hamza from "../assets/hamza3.png";
import maheen from "../assets/maheeen 1.png";
import { Blurhash } from "react-blurhash";

export default function MeetTheTeam() {
  const [loading, setLoading] = useState({
    subhan: false,
    hamza: false,
    maheen: false,
  });

  useEffect(() => {
    const loadImage = (imageSrc, key) => {
      const img = new Image();
      img.onload = () => {
        setLoading((prev) => ({ ...prev, [key]: true }));
      };
      img.src = imageSrc;
    };

    loadImage(subhan, "subhan");
    loadImage(hamza, "hamza");
    loadImage(maheen, "maheen");
  }, []);

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
        <div style={{ fontSize: "4rem" }}>MindSCAPE</div>
        <div style={{ fontSize: "2rem" }}>VISUALIZING THOUGHTS</div>
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
          <Person
            loading={loading.subhan}
            imgSrc={subhan}
            blurHash="Lf9*ozj[o#j[.AkCayoetRfQV@j?"
            name="Subhan Wasif"
          />
          <Person
            loading={loading.hamza}
            imgSrc={hamza}
            blurHash="LGDm5X~p.8D%DiMxM_ofoJxvRjRj"
            name="Hamza Ahmad"
          />
          <Person
            loading={loading.maheen}
            imgSrc={maheen}
            blurHash="LCC#xb1M^kkW}q9tRjM{X9-VxaSh"
            name="Maheen Khurram"
          />
        </div>
      </div>
    </div>
  );
}

function Person({ loading, imgSrc, blurHash, name }) {
  return (
    <div className="flex justify-center flex-col items-center gap-[30px]">
      {!loading ? (
        <Blurhash
          hash={blurHash}
          width={369}
          height={339}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <img className="rounded-3xl" src={imgSrc} alt={name} />
      )}
      <div className="text-2xl">{name}</div>
    </div>
  );
}
