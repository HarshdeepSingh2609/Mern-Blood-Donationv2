

import React from "react";
import "./PicandQuote.css";
import { useNavigate } from "react-router-dom";
import bgImageNew from "./assets/newcoverpage.png"; // Update if needed

const PicandQuote = () => {
  const navigate = useNavigate();

  const handleDonateNow = () => {
    const isLoggedIn = localStorage.getItem("token"); // or however you're storing auth
    if (isLoggedIn) {
      navigate("/donate");
    } else {
      navigate("/login");
    }
  };

  const handleVolunteerRegister = () => {
    navigate("/register");
  };

  return (
    <div className="full-bg" style={{ backgroundImage: `url(${bgImageNew})` }}>
      <div className="text-overlay">
        <h1 className="hash">#</h1>
        <h2 className="hero">BE A HERO</h2>
        <p className="subtitle">
          YOU DON’T NEED TO BE A DOCTOR <br />
          <span className="highlight">TO SAVE A LIFE</span>
        </p>
        <p className="desc">GIVE BLOOD ,GIVE HOPE</p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="cta-donate" onClick={handleDonateNow}>Donate Now</button>
          <button className="cta-volunteer" onClick={handleVolunteerRegister}>Register to Volunteer</button>
        </div>

        {/* Social Media */}
        <div className="icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default PicandQuote;
