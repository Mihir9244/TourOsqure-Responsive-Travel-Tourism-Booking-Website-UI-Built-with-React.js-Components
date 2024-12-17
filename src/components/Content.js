import React from 'react';
import HeroImg from "../Assets/Travel-hero2 (5).jpg"; // Importing the image

const Content = () => {
  return (
    <div className="journey-section">
      <img src={HeroImg} alt="Travel Hero" className="background-image" data-aos="flip-up"/>
    </div>
  );
};

export default Content;

