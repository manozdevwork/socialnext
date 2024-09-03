"use client";
import React, { useEffect, useState } from "react";
import waitlist from "@zootools/waitlist-js";
import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";

const WaitListButton = () => {
  const [dimensions, setDimensions] = useState({
    width: 650,
    height: 505,
  });

  const handleResize = () => {
    if (window.innerWidth <= 480) {
      setDimensions({ width: "auto", height: 505 });
    } else if (window.innerWidth <= 768) {
      setDimensions({ width: "auto", height: 505 });
    } else {
      setDimensions({ width: 650, height: 505 });
    }
  };

  useEffect(() => {
    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        className="waitlist-container"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <FilloutStandardEmbed filloutId="xrK4KUcdUkus" />
      </div>
    </div>
  );
};

export default WaitListButton;
