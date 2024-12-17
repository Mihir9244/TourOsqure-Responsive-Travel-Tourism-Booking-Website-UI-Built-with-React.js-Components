import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h4 data-aos="zoom-out" className="footer-brand">TourOsqure</h4>
            <p data-aos="fade-up" data-aos-duration="1500" className='footer-brand-meta'>At TourOSquare, we specialize in providing seamless and hassle-free travel booking experiences. Whether it's domestic getaways or international adventures, we ensure your journey starts effortlessly. Discover the world with confidence, one destination at a time.
            </p>
          </div>

          {/* International Destinations */}
          <div className="Links col-md-3">
            <h5 data-aos="zoom-out">Packages</h5>
            <ul className="list-unstyled">
              <li data-aos="fade-up"  data-aos-duration="1500">Popular</li>
              <li data-aos="fade-up"  data-aos-duration="2000">Summer Special</li>
              <li data-aos="fade-up"  data-aos-duration="2500">Winter Special</li>
              <li data-aos="fade-up"  data-aos-duration="3000">Vacation Spacial</li>
            </ul>
          </div>

          {/* National Destinations */}
          <div className="Links col-md-3">
            <h5 data-aos="zoom-out">Explore</h5>
            <ul className="list-unstyled">
              <li data-aos="fade-up" data-aos-duration="1500">FaQ</li>
              <li data-aos="fade-up" data-aos-duration="2000">Tour Guide</li>
              <li data-aos="fade-up" data-aos-duration="2500">Destination</li>
              <li data-aos="fade-up" data-aos-duration="3000">Vacation Special</li>
            </ul>
          </div>

          {/* Links */}
          <div className="Links col-md-3">
            <h5 data-aos="zoom-out">Quick Links</h5>
            <ul className="list-unstyled">
              <li data-aos="fade-up" data-aos-duration="1500"><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li data-aos="fade-up" data-aos-duration="2000"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li data-aos="fade-up" data-aos-duration="2500"><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
              <li data-aos="fade-up" data-aos-duration="3000"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Footer Bottom */}
        <div className="text-center py-3">
          <p className="mb-0">
            &copy; 2024 <mark>TourOsquare</mark> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

