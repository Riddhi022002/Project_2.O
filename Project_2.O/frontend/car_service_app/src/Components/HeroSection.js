import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch, FiMapPin } from "react-icons/fi";
import "../StyleSheets/herosection.css"; // Ensure correct path
import Header from "./Header";
const services = [
  {
    title: "CAR WASH",
    subtitle: "SPARKLING CLEAN",
    discount: "UPTO 50% OFF",
    image: "/assets/washingcarstation.jpg",
  },
  {
    title: "OIL CHANGE",
    subtitle: "KEEP YOUR ENGINE SMOOTH",
    discount: "FLAT 30% OFF",
    image: "/assets/washingcarstation.jpg",
  },
  {
    title: "WHEEL ALIGNMENT",
    subtitle: "BETTER HANDLING & SAFETY",
    discount: "UPTO 40% OFF",
    image: "/assets/washingcarstation.jpg",
  },
  {
    title: "BATTERY CHECK",
    subtitle: "STAY CHARGED, STAY SAFE",
    discount: "FREE CHECK-UP",
    image: "/assets/washingcarstation.jpg",
  },
  {
    title: "CAR AC REPAIR",
    subtitle: "STAY COOL THIS SUMMER",
    discount: "UPTO 35% OFF",
    image: "/assets/washingcarstation.jpg",
  },
  // {
  //   title: "BIKE SERVICE",
  //   subtitle: "SMOOTH & SAFE RIDES",
  //   discount: "UPTO 30% OFF",
  //   image: "/assets/washingcarstation.jpg",
  // },
  // {
  //   title: "TRUCK WASH",
  //   subtitle: "HEAVY DUTY CLEANING",
  //   discount: "UPTO 25% OFF",
  //   image: "/assets/truck-wash.jpg",
  // },
  // {
  //   title: "SCOOTER WASH",
  //   subtitle: "QUICK & EASY CLEAN",
  //   discount: "UPTO 20% OFF",
  //   image: "/assets/scooter-wash.jpg",
  // },
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
        <h2><i><b>Because, Even your Ride deserves the VIP treatment!</b></i></h2>

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
            <input type="text" placeholder="Search for services,car repair stations, more" />
          </div>
        </div>
      </div>

      {/* Service Cards */}
      

      <div className="services-container">
  {services.map((service, index) => (
    <div key={index} className="service-card">
      {/* Use an img tag to render the service image */}
      <img src={service.image} alt={service.title} className="service-icon" />
      <h3>{service.title}</h3>
      <p className="subtitle">{service.subtitle}</p>
      {service.discount && <p className="discount">{service.discount}</p>}
    </div>
  ))}
</div>

    </div>
 
  );
}
