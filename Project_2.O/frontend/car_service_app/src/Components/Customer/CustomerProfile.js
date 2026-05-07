import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
        `http://localhost:5000/api/customer/${customerId}`
      );
      setCustomer(res.data);
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
          onClick={() => navigate("/appointments")}
        >
          Appointment summery
        </button>
      </div>

      {/* 🔹 Customer Details */}
      {customer && (
        <div className="profile-card">
          <h3>{customer.name}</h3>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      )}

      {/* 🔹 Cars Section */}
      <div className="cars-section">
        <h3>My Cars</h3>

        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <p><strong>{car.VEHICLEBRANDNAME} {car.VEHICLEMODELNAME}</strong></p>
            <p>{car.VEHICLEREGISTRATIONNUMBER}</p>
          </div>
        ))}

        {/* ➕ Add Car Button */}
        <div
          className="add-car-card"
          onClick={() => navigate("/add-car")}
        >
          + Add New Car
        </div>
      </div>

    </div>
  );
};

export default CustomerProfile;