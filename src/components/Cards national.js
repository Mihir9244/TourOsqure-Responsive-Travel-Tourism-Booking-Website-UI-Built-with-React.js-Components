import React from "react";
import shimlaimage from "../Assets/Shimla image1.jpg";
import Tajmahelimage from "../Assets/Tajmahel-image2.jpg";
import jaipurimage from "../Assets/jaipur-image3.jpg";
import statueimage from "../Assets/statue-image4.jpg";
import Lakshadweepimage from "../Assets/Lakshadweep-image5.jpg";
import ladakhimage from "../Assets/ladakh-image6.jpg";
import rishikeshImg from "../Assets/rishikeshImg02.jpg";
import keralaImg from "../Assets/KeralaImg01.jpg";
import manaliImg from "../Assets/ManaliImg.jpg";

const Cards = () => {
  const destinations = [
    { title: "Shimla", image: shimlaimage, description: "Hills, heritage, and serenity in Shimla.", price: "Starting at $80", plan: "3 Day - 3 Night", },
    { title: "TajMahel", image: Tajmahelimage, description: "Love, history, grandeur at the Taj Mahal.", price: "Starting at $75", plan: "4 Day - 2 Night",},
    { title: "Jaipur", image: jaipurimage, description: "Royals, architecture, and culture in Jaipur.", price: "Starting at $89", plan: "2 Day - 2 Night", },
    { title: "Statue Of Unity", image: statueimage, description: "Strength, legacy, and marvel at the Statue of Unity.", price: "Starting at $110", plan: "2 Day - 3 Night", },
    { title: "Lakshadweep", image: Lakshadweepimage, description: "Pristine beaches, marine life, and tranquility in Lakshadweep.", price: "Starting at $90", plan: "2 Day - 4 Night", },
    { title: "Ladakh", image: ladakhimage, description: "Beauty, mountains, and adventure in Ladakh.", price: "Starting at $110", plan: "4 Day - 3 Night", },
    { title: "Rishikesh", image: rishikeshImg, description: "Spirituality, adventure, peace in Rishikesh.", price: "Starting at $82", plan: "3 Day - 3 Night", },
    { title: "Kerala", image: keralaImg, description: "Backwaters, culture, and nature in Kerala.", price: "Starting at $85", plan: "4 Day - 3 Night", },
    { title: "Manali", image: manaliImg, description: "Snow, adventure, views in Manali.", price: "Starting at $85", plan: "2 Day - 2 Night", },
  ];

  const chunkSize = 3; // Number of cards visible at once
  const groupedDestinations = [];

  // Split destinations into chunks of 3
  for (let i = 0; i < destinations.length; i += chunkSize) {
    groupedDestinations.push(destinations.slice(i, i + chunkSize));
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="zoom-out">Top National Destination For Your Next Vacation</h2>
      <div id="cardSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedDestinations.map((group, groupIndex) => (
            <div className={`carousel-item ${groupIndex === 0 ? "active" : ""}`} key={groupIndex}>
              <div className="row">
                {group.map((destination, index) => (
                  <div className="col-md-4" data-aos="zoom-in-down" data-aos-duration="5000" key={index}>
                    <div className="card hover-effect">
                      <img
                        src={destination.image}
                        className="card-img-top" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt={destination.title}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title"><i className="fa-solid fa-location-dot"></i> {destination.title}</h5>
                        <p className="card-text">{destination.description}</p>
                        <p className="card-plan-text"><i class="fa-solid fa-clock"></i> {destination.plan}</p>
                        <hr />
                        <p className="card-price-text"><i class="fa-solid fa-tags"></i> {destination.price}</p>
                        <button className="btn btn-primary" data-aos="zoom-in">Explore <i className="fa-solid fa-angles-right"></i></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cardSlider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon visually-hidden"></span>
          <i className="fa-solid fa-angles-left custom-icon"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cardSlider"
          data-bs-slide="next"
        >
           <span className="carousel-control-next-icon visually-hidden"></span>
          <i className="fa-solid fa-angles-right custom-icon"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
