import React from "react";
import heroImage1 from "../Assets/Popular-image5.jpg";
import heroImage2 from  "../Assets/Lakhydweep-Beach.jpg";

const HeroSlider = () => {
  return (
    <div id="hero-slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={heroImage1} className="d-block w-100" alt="Destination 2" />
          <div className="carousel-caption">
            <h5 className="typing-text">Discover amazing places with TourOsquare, unforgettable adventures await!</h5>
            <p>Unlock the world's wonders with just a click on tourOsqure! <i class="fa-solid fa-plane-departure"></i></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={heroImage2} className="d-block w-100" alt="Destination 2" />
          <div className="carousel-caption">
            <h5>Turn your travel dreams into reality with tourOsqure.</h5>
            <p>Plan your next journey today! <i class="fa-solid fa-plane-departure"></i></p>
          </div>
        </div>
      </div>
      <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-slider"
          data-bs-slide="prev"
        >
          <i class="fa-solid fa-circle-chevron-left custom-icon"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-slider"
          data-bs-slide="next"
        >
         <i class="fa-solid fa-circle-chevron-right custom-icon"></i>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
  );
};

export default HeroSlider;
