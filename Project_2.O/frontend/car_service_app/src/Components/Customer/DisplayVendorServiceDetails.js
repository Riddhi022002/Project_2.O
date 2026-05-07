import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import "../../StyleSheets/washstationdetails.css";
import "../../StyleSheets/Customer/DisplayVendorServiceDetails.css";

const VendorServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vendorService, setVendorService] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Popup states
  const [showPopup, setShowPopup] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  console.log("Params:", id);

  // 🔹 Fetch Vendor Service
  useEffect(() => {
    const fetchVendorService = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/vendor/vendorsServicesByService/${id}`,
        );

        if (res.data.length > 0) {
          setVendorService(res.data[0]);
        } else {
          setVendorService(null);
        }
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVendorService();
    }
  }, [id]);

  // 🔹 Fetch Cars ONLY when popup opens
  useEffect(() => {
    if (showPopup) {
      fetchCars();
    }
  }, [showPopup]);

  const fetchCars = async () => {
    try {
     const customerId = localStorage.getItem("customerId");
      // const res = await axios.get(
      //   `http://localhost:5000/api/customer/getCarsByCustomerId/${customerId}`,
      // );
       const res = await axios.get(
        `http://localhost:5000/api/customer/getCarsByCustomerId/${6}`,
      );

      setCars(res.data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  // 🔹 Booking Handler
const handleBooking = async () => {
  if (!selectedCar || !serviceType || !timeSlot || !selectedDate) {
    alert("Please fill all fields");
    return;
  }

  try {
    const customerId = localStorage.getItem("customerId"); // ✅ from login

    const bookingData = {
      customerId,
      carId: selectedCar,
      vendorServiceId: vendorService.VENDORSERVICEID,
      serviceType,
      date: selectedDate,
      timeSlot,
    };

    console.log("Sending Booking:", bookingData);

    await axios.post(
      "http://localhost:5000/api/customer/bookService",
      bookingData
    );

    setShowPopup(false);
    setShowSuccessPopup(true);

  } catch (err) {
    console.error("Booking failed:", err);
    alert("Booking failed");
  }
};

  if (loading) return <h2>Loading...</h2>;
  if (!vendorService) return <h2>Service Not Found</h2>;

  return (
    <div className="car-wash-container">
      <div className="car-wash-left">
        <img src="/assets/washingcarstation.jpg" alt="vendor" />
      </div>

      <div className="car-wash-right">
        <h2>{vendorService.SERVICENAME}</h2>

        {/* <p>
          <strong>ID:</strong> {vendorService.VENDORSERVICEID}
        </p> */}

        <p>
          <strong>Price:</strong> ₹{vendorService.PRICE}
        </p>

        <p>
          <strong>Time taken for the service:</strong> {vendorService.ESTIMATED_TIME} mins
        </p>

        <button className="book-service-btn" onClick={() => setShowPopup(true)}>
          Book Service
        </button>
      </div>

      {/* 🔹 POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Book Service</h3>

            {/* 🔹 Car Selection */}
            <div className="section">
              <p>
                <strong>Select Your Car:</strong>
              </p>

              {cars.length === 0 ? (
                <>
                  <p>No cars found.</p>
                  <button onClick={() => navigate("/profile")}>
                    + Add Car
                  </button>
                </>
              ) : (
                cars.map((car) => (
                  <label key={car.VEHICLEID}>
                    <input
                      type="radio"
                      name="car"
                      value={car.VEHICLEID}
                      onChange={(e) => setSelectedCar(e.target.value)}
                    />
                    {car.VEHICLEBRANDNAME} {car.VEHICLEMODELNAME} ({car.VEHICLEREGISTRATIONNUMBER})
                  </label>
                ))
              )}
            </div>

            {/* 🔹 Service Type */}
            <div className="section">
              <p>
                <strong>Select Service Type:</strong>
              </p>

              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="pickup"
                  onChange={(e) => setServiceType(e.target.value)}
                />
                Pickup & Drop
              </label>

              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="home"
                  onChange={(e) => setServiceType(e.target.value)}
                />
                Home Service
              </label>

              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="manual"
                  onChange={(e) => setServiceType(e.target.value)}
                />
                Manual Drop
              </label>
            </div>

            {/* 🔹 Time Slot */}
            {/* 🔹 Date + Time Slot */}
            <div className="section">
              <p>
                <strong>Select Date:</strong>
              </p>

              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]} // ❗ disables past dates
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              <p style={{ marginTop: "10px" }}>
                <strong>Select Time Slot:</strong>
              </p>

              <select onChange={(e) => setTimeSlot(e.target.value)}>
                <option value="">-- Select Time --</option>
                <option value="9-11">9 AM - 11 AM</option>
                <option value="11-1">11 AM - 1 PM</option>
                <option value="2-4">2 PM - 4 PM</option>
                <option value="4-6">4 PM - 6 PM</option>
              </select>
            </div>

            {/* 🔹 Actions */}
            <div className="popup-actions">
              <button onClick={() => setShowPopup(false)}>Cancel</button>

              <button onClick={handleBooking}>Confirm Booking</button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹SUCCESS POPUP */}
      {showSuccessPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <h3>Request Sent ✅</h3>

      <p style={{ marginTop: "10px" }}>
        Your service request has been sent to the vendor.
      </p>

      <p>
        Once the appointment is confirmed, you will be able to track it.
      </p>

      <div className="popup-actions">
        <button
          onClick={() => {
            setShowSuccessPopup(false);
            navigate("/CustomerHomePage"); // 👈 or wherever you want
          }}
        >
          OK
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default VendorServiceDetails;
