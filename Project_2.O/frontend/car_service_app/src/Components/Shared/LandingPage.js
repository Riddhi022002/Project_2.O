import React from "react";
import "./SharedCSS/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>Who are you?</h1>

        <button
          className="role-btn"
          onClick={() => navigate("/customer/signup")}
        >
          Customer
        </button>

        <button
          className="role-btn"
          onClick={() => navigate("/vendor/signup")}
        >
          Vendor
        </button>
      </div>
    </div>
  );
};

export default LandingPage;