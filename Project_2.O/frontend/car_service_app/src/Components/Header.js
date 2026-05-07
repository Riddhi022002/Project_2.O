import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../StyleSheets/header.css";

const Header = () => {
  const [location, setLocation] = useState("Assonora, Goa, India");
  const navigate = useNavigate();

  const handleLocationChange = () => {
    const newLocation = prompt("Enter your location:");
    if (newLocation) {
      setLocation(newLocation);
    }
  };

  const handleProfileClick = () => {
    navigate('/CustomerProfile');
  };

  const handleVoiceSearch = () => {
    alert("Voice search activated (simulation)");
  };

  return (
    <header className="header">
      {/* Fixed Top Section */}
      <div className="header-top">
        <div className="location" onClick={handleLocationChange}>
          <span className="location-icon">📍</span>
          <span className="location-text">{location}</span>
          <span className="dropdown-icon">▼</span>
        </div>
        
        {/* Profile Icon with Navigation */}
        <div className="profile-icon" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          👤
        </div>
      </div>

      {/* Search Bar Below */}
      {/* <div className="search-bar">
        <input type="text" placeholder="Search for 'Car Wash'" />
        <button className="voice-search" onClick={handleVoiceSearch}>🎤</button>
      </div> */}
    </header> 
  );
};

export default Header;
