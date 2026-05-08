import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../StyleSheets/Customer/DisplayVendorDetails.css";

const VendorDetails = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();

  const [vendor, setVendor] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchVendorDetails();
    fetchVendorServices();
  }, [vendorId]);

  const fetchVendorDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/vendor/VendorById/${vendorId}`,
      );

      setVendor(res.data);
      console.log('testing:'.res.data);
    } catch (err) {
      console.error("Error fetching vendor details:", err);
    }
  };

  const fetchVendorServices = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/vendor/VendorServicesByVendorId/${vendorId}`,
      );

      setServices(res.data);
      console.log('vendordetails:',res.data);
    } catch (err) {
      console.error("Error fetching vendor services:", err);
    }
  };

  const handleServiceClick = (service) => {
    console.log("ID",service.vendorserviceid);
    navigate(`/VendorService/${service.vendorserviceid}`);
  };

  if (!vendor) return <p className="loading-text">Loading...</p>;

  return (
    <div className="vendor-container">
      {/* HEADER */}
       <button
          className="back-btn"
          onClick={() => navigate("/CustomerHomePage")}
        >
          ←
        </button>
      <div className="vendor-header">
        <div className="vendor-image">
          <img
            src="/assets/washingcarstation.jpg"
            alt="Vendor"
          />
        </div>

        <div className="vendor-info">
          <h2>{vendor.businessname}</h2>

          <p className="vendor-location">
            📍 {vendor.city}, {vendor.state}
          </p>

          <p className="vendor-phone">📞 {vendor.phonenumber}</p>

          <div className="vendor-badges">
            <span>✔ Verified</span>
            <span>⭐ 4.7</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about-section">
        <h3>About</h3>

        <p>
          Professional car wash and detailing services with trained staff and
          quality products.
        </p>
      </div>

      {/* SERVICES */}
      <div className="services-section">
        <div className="section-header">
          <h3>Services Offered</h3>
          <p>{services.length} Services</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.vendorserviceid}
              className="service-card"
              onClick={() => handleServiceClick(service)}
            >
              <div className="service-top">
                <h4>{service.service?.servicename}</h4>

                <span className="price">₹ {service.price}</span>
              </div>

              <p className="service-description">
                {service.service?.servicedescription}
              </p>

              <button
                className="book-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service);
                }}
              >
                Book Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY BUTTON */}
      <div className="sticky-booking">
        <button>Book Appointment</button>
      </div>
    </div>
  );
};

export default VendorDetails;
