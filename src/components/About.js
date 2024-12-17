import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container text-center">
        <h2 data-aos="zoom-out">About Us</h2>
        <p data-aos="fade-up"
          data-aos-duration="7000">We bring you the most exceptional <strong className="highlight-name">travel experiences</strong> from every corner of the world. Your dream adventure starts with <strong className="highlight-name">TourOsquare!</strong></p>
        <hr data-aos="fade-up"
          data-aos-duration="7000" />
        <p data-aos="fade-up"
          data-aos-duration="6000">Welcome to <strong className="highlight-name">TourOsquare,</strong> your trusted partner for unforgettable travel experiences! We specialize in crafting exceptional journeys that cater to every traveler's unique preferences. Whether you're dreaming of exploring the world's most iconic destinations, staying in luxurious hotels, or curating customized trips tailored to your needs, we have you covered.</p>
        <p data-aos="fade-up"
          data-aos-duration="5000">Our mission is to bring you the <strong className="highlight-name">best travel opportunities,</strong> combining convenience, quality, and affordability. From breathtaking world tours to unique, handpicked national destinations, we aim to unlock the wonders of the world, ensuring your adventures are seamless and memorable.</p>
        <div className="row">
          <div className="col-md-4" data-aos="zoom-in-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-airplane" viewBox="0 0 16 16">
              <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
            </svg>
            <h5 data-aos="zoom-in-right">World Tours</h5>
            <p data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom">Your ultimate world tour adventure awaits with tailored travel packages.</p>
          </div>
          <div className="col-md-4" data-aos="zoom-in-up" data-aos-duration="1000">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
              <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
            </svg>
            <h5 data-aos="zoom-in-right">Best Hotels</h5>
            <p data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom">Seamless travel arrangements for exploring iconic destinations across the world.</p>
          </div>
          <div className="col-md-4" data-aos="zoom-in-up" data-aos-duration="2000">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <h5 data-aos="zoom-in-right">Customized Trips</h5>
            <p data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom">Create unique travel experiences with flexible, customized trips just for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
