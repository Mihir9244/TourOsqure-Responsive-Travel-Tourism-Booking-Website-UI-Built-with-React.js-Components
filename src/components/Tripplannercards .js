
import React, { useState } from "react";
import goaImg from "../Assets/Goa-Beach (1).jpg";
import andamanImg from "../Assets/Andaman-Beach.jpg";
import lakhydweepImg from "../Assets/Lakhydweep-Beach.jpg";
import UdaipurImg from "../Assets/UdaipurImg.jpg";
import ShimlaImg from "../Assets/ShimlaImg.jpg";
import manaliImg from "../Assets/ManaliImg.jpg";
import MumbaiImg from "../Assets/MumbaiImg (1).jpg";
import BangaluruImg from "../Assets/BangloreImg.jpg";
import DelhiImg from "../Assets/DelhiImg.jpg";
import LonavalaImg from "../Assets/LonavalaImg.jpg";
import MahabaleshwarImg from "../Assets/MahabaleshwarImg.jpg";
import panchganiImg from "../Assets/panchganiImg.jpg";




const TripPlanner = () => {
  // Define categories and their data
  const tripData = {
    Beach: [
      { name: "Goa Beach", details: "Experience breathtaking sunsets and endless waves in Goa.", text: "Goa, India", rating: "4", reviews: "( 9 reviews )", image: goaImg },
      { name: "Andaman Beach", details: "Discover tropical paradise and vibrant marine life in the Andaman & Nicobar Islands.", text: "Andaman & Nicobar Islands, India", rating: "3",  reviews: "( 5 reviews )", image: andamanImg },
      { name: "Lakshadweep Beach", details: "Discover paradise on Lakshadweep Beach, a haven of peace and beauty.", text: "Lakshadweep, India", rating: "4",  reviews: "( 10 reviews )", image: lakhydweepImg },

    ],
    Romance: [
      { name: "Udaipur Palace", details: "Experience the charm of Udaipur, the City of Lakes and Palaces.", text: "Udaipur, Rajeshthan, India", rating: "2", reviews: "( 12 reviews )", image: UdaipurImg },
      { name: "Shimla ice Mountains", details: "Discover the magic of winter at Shimla’s majestic ice mountains.", text: "Shimla, Himachal Pradesh, India", rating: "3", reviews: "( 9 reviews )", image: ShimlaImg },
      { name: "Manali ice Mountains", details: "Manali Ice Mountain: Where nature’s icy wonders meet adventure.", text: "Manali, Himachal Pradesh, India", rating: "4", reviews: "( 6 reviews )", image: manaliImg },

    ],
    City: [
      { name: "Mumbai City", details: "Experience the vibrant skyline of Mumbai, the city of dreams.", text: "Mumbai, Maharashtra, India", rating: "4", reviews: "( 10 reviews )", image: MumbaiImg },
      { name: "Bangalore", details: "Discover the dynamic skyline of Bangalore, India’s tech capital.", text: "Bangalore, Karnataka, India", rating: "5", reviews: "( 15 reviews )", image: BangaluruImg },
      { name: "Delhi Gate", details: "Explore the historic charm of Delhi Gate, a symbol of the city’s rich heritage.", text: "Delhi Capital, India", rating: "3", reviews: "( 10 reviews )", image: DelhiImg },
    ],
    Outdoors: [
      { name: "Lonavala", details: "Discover Lonavala, the perfect getaway amidst lush greenery and hills.", text: " Lonavala, Maharashtra, India", rating: "4", reviews: "( 7 reviews )", image: LonavalaImg },
      { name: "Mahabaleshwar", details: "Discover the scenic beauty of Mahabaleshwar, a hill station in Maharashtra.", text: "Mahabaleshwar, Maharashtra, India", rating: "2", reviews: "( 12 reviews )", image: MahabaleshwarImg },
      { name: "Panchgani", details: "Explore the charming hills and peaceful atmosphere of Panchgani.", text: "Panchgani, Maharashtra, India", rating: "3", reviews: "( 9 reviews )", image: panchganiImg },
    ],
  };

  // State to manage the active category
  const [activeCategory, setActiveCategory] = useState("Outdoors");

  // Render category data
  const renderCategoryData = () => {
    return tripData[activeCategory].map((place, index) => (
      <div className="col-md-4 mb-4" data-aos="zoom-in-down"  data-aos-duration="5000" key={index}>
        <div className="card" >
          <img
            src={place.image}
            className="card-img-top" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            alt={place.name}
          />
          <div className="card-body">
            <h5 className="card-title"> <i className="fa-solid fa-location-dot me-2"></i>{place.name}</h5>
            <p className="card-text"><i className="fa-solid fa-map-pin"></i> {place.text}</p>
            <p className="card-details">{place.details}</p>
            <p className="card-reviews"><i className="fa-solid fa-star"></i> {place.rating} {place.reviews}</p>
            <hr />
            <button type="button" className="btnview position-relative" data-aos="zoom-in">
              Book Now <i class="fa-solid fa-bookmark"></i>
              <span className="position-absolute top-0 start-100 translate-middle custom-badge">
               40% <br/>OFF 
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4"  data-aos="zoom-out">What type of trip are you planning in <strong className="highlight-name">INDIA? </strong></h2>
      <p>Plan your perfect trip in India with <strong className="highlight-name">TourOsqure!</strong> From serene hill stations to vibrant cities, we make your journey seamless and unforgettable.</p>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-start mb-4" data-aos="zoom-in">
        {Object.keys(tripData).map((category) => (
          <button 
            key={category}
            className={`btn me-2 custom-button ${activeCategory === category ? "active-button" : " "
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} 
          </button>
        ))}
      </div>

      {/* Render Data */}
      <div className="row">{renderCategoryData()}</div>
    </div>
  );
};

export default TripPlanner;
