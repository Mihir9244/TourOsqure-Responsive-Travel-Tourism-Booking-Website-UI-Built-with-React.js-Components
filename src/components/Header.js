import React from "react";

function Header() {

     return (
        <>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TourOsqure</a>
                    <div className="d-flex align-items-center gap-2"> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/src/components/About.js">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/src/components/Offers.js">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/Tripplannercards.js">Popular</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#/src/components/Cards international.js" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Package
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">International</a></li>
                                    <li><a className="dropdown-item" href="#">Vacation Spacial</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Summer Holiday</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            
                        </ul>
                        <div class="d-grid gap-2 d-md-block">
                        <button className="btn-header btn-primary " type="button">Sign UP  <i class="fa-solid fa-right-to-bracket"></i></button>
                            <button type="button" className="btn-header btn-primary position-relative">
                                Book Now
                                <span className="position-absolute top-0 start-100 translate-middle badge-custom">
                                    40%<br></br>
                                    OFF
                                    <span className="visually-hidden">unread messages</span>
                                </span> <i class="fa-solid fa-bookmark"></i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;