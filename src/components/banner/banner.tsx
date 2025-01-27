"use client";

import { useState } from 'react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const bannerURL = "./banner/rick_shiels_cut_slowed.gif";

  const handleClose = () => {
    setIsVisible(false);
  };



  return (
    isVisible && (
      <>
      <div className="banner-container">
        <div className="banner">
          <img src={bannerURL} alt="Banner Gif" className="banner-gif" />
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>
      </div>

      <div className="banner-displacement">
      </div>
      </>
    )
  );
}
