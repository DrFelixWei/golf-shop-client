"use client";

import { useState, useEffect } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false); // Default to not visible
  const [isClosing, setIsClosing] = useState(false); 
  const bannerURL = "./banner/rick_shiels_cut_slowed.gif";

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; 
    const lastVisited = localStorage.getItem("visited");

    if (lastVisited !== today) {
      setIsVisible(true); 
      localStorage.setItem("visited", today); 
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 500); 
  };

  return (
    isVisible && (
      <>
        <div className={`banner-container ${isClosing ? "slideUp" : ""}`}>
          <div className="banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bannerURL} alt="Banner Gif" className="banner-gif" />
            <button className="close-btn" onClick={handleClose}>
              X
            </button>
          </div>
        </div>

        <div className="banner-displacement"></div>
      </>
    )
  );
}
