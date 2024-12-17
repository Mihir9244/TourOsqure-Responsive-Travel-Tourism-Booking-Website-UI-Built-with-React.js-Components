import React from "react";
import popularImage1 from "../Assets/Popular-image1.jpg";
import popularImage2 from "../Assets/Hero slider image-4.jpg";
import popularImage3 from "../Assets/Popular-image3.jpg";
import popularImage4 from "../Assets/Hero slider image-2.jpg";
import popularImage5 from "../Assets/Popular-image2.jpg";
import popularImage6 from "../Assets/Popular-image8.jpg";
import popularImage7 from "../Assets/popularImg01.jpg";
import popularImage8 from "../Assets/Popular-image7.jpg";
import popularImage9 from "../Assets/Popular-image4.jpg";

const Cards = () => {
  const destinations = [
    { title: "Paris", image: popularImage1, price: "Starting at $220", description: "Romance, Culture, and Adventure in Paris", plan: "4 Day - 3 Night", },
    { title: "Maldives", image: popularImage2, price: "Starting at $180", description: "Romance, tranquility, in the Maldives.", plan: "2 Day - 2 Night", },
    { title: "Japan", image: popularImage3, price: "Starting at $175", description: "Tradition, innovation, adventure in Japan.", plan: "4 Day - 2 Night", },
    { title: "Bali", image: popularImage4, price: "Starting at $220", description: "Paradise, spirituality, adventure in Bali.", plan: "5 Day - 5 Night", },
    { title: "London", image: popularImage5, price: "Starting at $360", description: "History, culture, and charm in London.", plan: "4 Day - 4 Night", },
    { title: "Thailand", image: popularImage6, price: "Starting at $165", description: "Beaches, temples, vibrant life in Thailand.", plan: "4 Day - 3 Night", },
    { title: "Switzerland", image: popularImage7, price: "Starting at $210", description: "Scenic beauty, adventure, tranquility in Switzerland.", plan: "5 Day - 2 Night", },
    { title: "New York", image: popularImage8, price: "Starting at $200", description: " Energy, culture, iconic landmarks in New York.", plan: "4 Day - 4 Night", },
    { title: "Singapour", image: popularImage9, price: "Starting at $150", description: "Modernity, gardens, and luxury in Singapore", plan: "5 Day - 3 Night", },
  ];

  const chunkSize = 3; // Number of cards visible at once
  const groupedDestinations = [];

  // Split destinations into chunks of 3
  for (let i = 0; i < destinations.length; i += chunkSize) {
    groupedDestinations.push(destinations.slice(i, i + chunkSize));
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="zoom-out">Top International Destination For Your Next Vacation</h2>
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
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
                        <h5 className="card-title"> <i class="fa-solid fa-location-dot"></i> {destination.title}</h5>
                        <p className="card-text">{destination.description}</p>
                        <p className="card-plan-text"><i class="fa-solid fa-clock"></i> {destination.plan}</p>
                        <hr />
                        <p className="card-price-text"><i class="fa-solid fa-tags"></i> {destination.price}</p>
                        <button className="btn btn-primary" data-aos="zoom-in">Explore <i class="fa-solid fa-angles-right"></i></button>
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
          data-bs-target="#cardCarousel"
          data-bs-slide="prev"
        >
          <i className="fa-solid fa-angles-left custom-icon"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="next"
        >
          <i className="fa-solid fa-angles-right custom-icon"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
