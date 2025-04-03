// src/Components/ServiceList.js
import React from "react";
import { FaCar, FaBiking, FaTruck, FaMotorcycle, FaBus } from "react-icons/fa";
import "../StyleSheets/servicelist.css"; // Importing CSS

const services = [
  { name: "Car Wash", icon: <FaCar /> },
  { name: "Bike Service", icon: <FaBiking /> },
  { name: "Truck Wash", icon: <FaTruck /> },
  { name: "Scooter Wash", icon: <FaMotorcycle /> },
  { name: "Oil Change", icon: <FaCar /> },
  { name: "Wheel Alignment", icon: <FaCar /> },
  { name: "Battery Check", icon: <FaCar /> },
  { name: "Car AC Repair", icon: <FaCar /> },
];

const ServiceList = () => {
  return (
    <div className="service-list">
    <div className="services-container">
      <h2 className="services-title">What’s Your Ride Craving?</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <p className="service-name">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default ServiceList;
