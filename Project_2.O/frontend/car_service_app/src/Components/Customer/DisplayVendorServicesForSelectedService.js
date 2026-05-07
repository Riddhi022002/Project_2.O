import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../StyleSheets/Customer/DisplayVendorServices.css"

const DisplayVendorServicesForSelectedService = () => {
  const { serviceId } = useParams(); // 👈 important
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVendors();
  }, [serviceId]);

  const fetchVendors = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/vendor/vendorsServicesByService/${serviceId}`
      );
      setVendors(res.data);
    } catch (err) {
      console.error("Error fetching vendors:", err);
    }
  };

  return (
    <div>
       <button
          className="back-btn"
          onClick={() => navigate("/CustomerHomePage")}
        >
          ←
        </button>

      <h1>Car Care Partners</h1>

      <div className="car-wash-list">
        {vendors.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            No vendors available for this service
          </p>
        ) : (
          vendors.map((vendor) => (
            <div
              key={vendor.VENDORID}
              className="car-wash-card"
              onClick={() => navigate(`/VendorService/${vendor.VENDORSERVICEID}`)}
            >
              <img
                src="/assets/washingcarstation.jpg"
                alt="vendor"
                className="car-wash-image"
              />

              <div className="car-wash-info">
                <h3 className="car-wash-name">
                  {vendor.BUSINESSNAME}
                </h3>

                <p className="car-wash-location">
                  📍 {vendor.CITY}
                </p>

                <div className="car-wash-meta">
                  <span>⭐ {vendor.rating || "N/A"}</span>
                  <span>⏳ {vendor.estimated_time || 30} mins</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayVendorServicesForSelectedService;