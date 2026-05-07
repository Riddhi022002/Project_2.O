import React, { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../StyleSheets/servicelist.css";

const ServiceList = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services/fetchservices",
      );
      setServices(res.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className="service-list">
      <div className="services-container">
        <h2 className="services-title">What’s Your Ride Craving?</h2>

        <div className="services-grid">
          {services.length === 0 ? (
            <p>No services available</p>
          ) : (
            services.map((service) => {
              const IconComponent = FaIcons[service.serviceicon];

              return (
                <div
                  key={service.id}
                  className="service-item"
                  onClick={() => navigate(`/services/${service.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  
                    <div className="service-icon">
                      {IconComponent ? <IconComponent /> : <FaIcons.FaCar />}
                    </div>

                    <p className="service-name">{service.name}</p>
                  
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
