import React, { useState } from "react";
import "../StyleSheets/header.css";

const Header = () => {
    const [location, setLocation] = useState("Asnode, Goa, India");

    const handleLocationChange = () => {
        const newLocation = prompt("Enter your location:");
        if (newLocation) {
            setLocation(newLocation);
        }
    };

    const handleVoiceSearch = () => {
        alert("Voice search activated (simulation)");
    };

    return (
        <header className="header">
            <div className="location" onClick={handleLocationChange}>
                <span className="location-icon">📍</span>
                <span className="location-text">{location}</span>
                <span className="dropdown-icon">▼</span>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search for 'Car Wash'" />
                <button className="voice-search" onClick={handleVoiceSearch}>🎤</button>
            </div>

            <div className="profile-icon">👤</div>
        </header>
    );
};

export default Header;
