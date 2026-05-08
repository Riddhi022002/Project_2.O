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
        `${process.env.REACT_APP_API_URL}/api/vendor/vendorsServicesByService/${serviceId}`
      );
      setVendors(res.data);
      console.log('services:',res.data)
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
              key={vendor.vendor?.vendorid}
              className="car-wash-card"
              onClick={() => navigate(`/VendorService/${vendor.vendorserviceid}`)}
            >
              <img
                src="/assets/washingcarstation.jpg"
                alt="vendor"
                className="car-wash-image"
              />

              <div className="car-wash-info">
                <h3 className="car-wash-name">
                  {vendor.vendor?.businessname}
                </h3>

                <p className="car-wash-location">
                  📍 {vendor.vendor?.city}
                </p>

                <div className="car-wash-meta">
                  <span>⭐ {vendor.rating || "4.8"}</span>
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