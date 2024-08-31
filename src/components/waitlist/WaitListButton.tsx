"use client";
import React from "react";
import waitlist from "@zootools/waitlist-js";
import "./index.css";
import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";

const WaitListButton = () => {
  const clickPopup = (event: any) => {
    event.preventDefault();
    waitlist.openPopup("qZv4UYKwJBOONLrEUJVA");
  };
  return (
    <div>
      {/* <button onClick={clickPopup}>Join waitlist!</button> */}
      {/* <div
        style={{ width: "100%", height: "500px" }}
        data-fillout-id="xrK4KUcdUkus"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      ></div> */}
      <div
        style={{
          //   paddingTop: "70px",
          width: 650,
          height: 505,
        }}
      >
        <FilloutStandardEmbed filloutId="xrK4KUcdUkus" />
      </div>
    </div>
  );
};

export default WaitListButton;
