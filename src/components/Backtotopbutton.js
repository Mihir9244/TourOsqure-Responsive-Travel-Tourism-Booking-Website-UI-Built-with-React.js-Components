// src/components/BackToTopButton.js
import React, { useState, useEffect } from "react";


const Backtotopbutton = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="back-to-top"
        aria-label="Back to top"
      >
        {/* Font Awesome Icon */}
        <i className="fa-regular fa-circle-up custom-top-icon"></i> 
      </button>
    )
  );
};

export default Backtotopbutton;
