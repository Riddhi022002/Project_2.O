import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch, FiMapPin } from "react-icons/fi";
import "../StyleSheets/herosection.css"; // Ensure correct path
import Header from "./Header";

const services = [
  {
    title: "FOOD DELIVERY",
    subtitle: "FROM RESTAURANTS",
    discount: "UPTO 60% OFF",
    image: "food-image-url",
  },
  {
    title: "INSTAMART",
    subtitle: "INSTANT GROCERY",
    discount: "UPTO 60% OFF",
    image: "grocery-image-url",
  },
  {
    title: "DINEOUT",
    subtitle: "EAT OUT & SAVE MORE",
    discount: "UPTO 50% OFF",
    image: "dineout-image-url",
  },
  {
    title: "GENIE",
    subtitle: "PICK-UP & DROP",
    discount: "",
    image: "genie-image-url",
  },
];

export default function HeroSection() {
  const [location, setLocation] = useState("");

  return (
    <div className="hero-container">
      {/* Header */}
      {/* <header className="header">
        <h1 className="logo">Swiggy</h1>
        <nav className="nav-links">
          <a href="#">Swiggy Corporate</a>
          <a href="#">Partner with us</a>
        </nav>
        <button className="get-app-btn">Get the App</button>
        <FaUserCircle className="user-icon" />
      </header> */}

      <Header/>

      {/* Hero Content */}
      <div className="hero-content">
        <h2>Order food & groceries. Discover best restaurants. Swiggy it!</h2>

        {/* Search Bar */}
        <div className="search-bar">
          {/* <div className="input-box">
            <FiMapPin className="icon" />
            <input
              type="text"
              placeholder="Enter your delivery location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div> */}
          <div className="input-box">
            <FiSearch className="icon" />
            <input type="text" placeholder="Search for restaurant, item or more" />
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.image}</span>
            <h3>{service.title}</h3>
            <p className="subtitle">{service.subtitle}</p>
            {service.discount && <p className="discount">{service.discount}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
