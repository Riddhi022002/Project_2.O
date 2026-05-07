import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Header from "./Header";
import "../StyleSheets/herosection.css";

export default function HeroSection() {
  const [location, setLocation] = useState("");

  return (
    <div className="hero-container">
      
      {/* Header (if it already contains profile, you can remove below icon) */}
      <Header />

      {/* Address + Profile Row */}
      <div className="top-bar">
        
        {/* Address Input
        <div className="input-box">
          <FiMapPin className="icon" />
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Profile Icon */}
        {/* <FaUserCircle className="user-icon" /> */} 

      </div>

    </div>
  );
}