import React from "react";
import summerImg from  "../Assets/winter-wonderland.jpg";
import winterImg from "../Assets/summer-getaway.jpg";


const Offers = () => {
  const offers = [
    { title: "Summer Getaway", discount: "20% Off", description: "Grab 20% off on your dream summer getaway – limited time only!", image: summerImg },
    { title: "Winter Wonderland", discount: "15% Off", description: "Celebrate winter in style at Winter Wonderland – now with 15% off!", image: winterImg },
  ];

  return (
    <section id="offers" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="zoom-out">Exclusive Offers</h2>
        <div className="row">
          {offers.map((offer, index) => (
            <div
              className="col-md-6 my-3"
              key={index}
            >
              <div
                className="offer-card" data-aos="zoom-out-up"
                style={{ backgroundImage: `url(${offer.image})` }}
              >
              
                <div className="overlay"></div>
              
                <div className="text-content">
                  <h3>{offer.title}</h3>
                  <h4  data-aos="zoom-out-left">{offer.discount}</h4>
                  <p>{offer.description}</p>
                  <hr/>
                  <button type="button" class="btn btn-secondary" data-aos="zoom-in">Book Now <i class="fa-solid fa-angles-right"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;

