import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "../../StyleSheets/Customer/CustomerProfile.css";

const CustomerProfile = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(null);
  const [cars, setCars] = useState([]);

  const customerId = localStorage.getItem("customerId");

  useEffect(() => {
    fetchCustomerDetails();
    fetchCustomerCars();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/customer/getCustomerById/${6}`,
      );
      setCustomer(res.data[0]);
      console.log("customer", res.data);
    } catch (err) {
      console.error("Error fetching customer:", err);
    }
  };

  const fetchCustomerCars = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/customer/getCarsByCustomerId/${6}`,
      );
      setCars(res.data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  return (
    <div className="profile-container">
      {/* 🔹 Top Bar */}
      <div className="profile-header">
        <button
          className="back-btn"
          onClick={() => navigate("/CustomerHomePage")}
        >
          ←
        </button>
        <button
          className="history-btn"
          onClick={() => navigate("/tracking")}
        >
          Appointment summery
        </button>
      </div>

      {/* 🔹 Customer Details */}
      {/* 🔹 Customer Details */}
      {customer && (
        <div className="profile-card">
          <div className="profile-top">
            {/* 🔹 Customer Info */}
            <div className="profile-info">
              <h3>{customer.FULLNAME}</h3>
              <p>{customer.EMAIL}</p>
              <p>{customer.PHONENUMBER}</p>
            </div>

            {/* ✏️ Edit Button */}
            <button
              className="edit-btn"
              onClick={() => navigate("/edit-profile")}
            >
              ✏️
            </button>
          </div>
        </div>
      )}

      {/* 🔹 Cars Section */}
      <div className="cars-section">
        <h3>My Cars</h3>

        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <p>
              <strong>
                {car.VEHICLEBRANDNAME} {car.VEHICLEMODELNAME}
              </strong>
            </p>
            <p>{car.VEHICLEREGISTRATIONNUMBER}</p>
          </div>
        ))}

        {/* ➕ Add Car Button */}
        <div className="add-car-card" onClick={() => navigate("/add-car")}>
          + Add New Car
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
