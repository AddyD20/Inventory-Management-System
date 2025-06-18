import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import homepagebg from "../Assets/homepagebg.png";
import cafe from "../Assets/cafe.png"

const Homepage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="homepage-root">
      <div className="overlay"></div>
      
      <div className="content-wrapper">
      <div className="container custom-no-padding col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center customGap py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={cafe}
              className="d-block mx-lg-auto img-fluid homecake-img"
              alt="Cake"
              width="600"
              height="550"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3" id="hero">
              EasyManage helps you manage your inventory with ease
            </h1>
            <p className="lead">
              Efficiently track and manage your cafe's inventory with our user-friendly system. Easily view stock levels, stock expiry, and marketting oversights. Check the reservations and bookings and be ready for your guests!!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 reservation-button"
                style={{
                  backgroundColor: isHovered ? "#C75B7A" : "#921A40",
                  border: "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Let's Manage
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
