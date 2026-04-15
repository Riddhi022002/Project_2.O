import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VendorLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phonenumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/vendor/login",
        formData,
      );
      console.log(res.data);

      // after login
      navigate("/VendorHomePage");
    } catch (err) {
      console.error(err);

      if (err.response?.status === 403) {
        alert("Your account is not verified yet. Please wait for approval.");
      } else if (err.response?.status === 401) {
        alert("Invalid phone number or password");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Register Link */}
        <div className="top-link">
          <span>New here? </span>
          <button onClick={() => navigate("/VendorRegistrationPage")}>
            Register
          </button>
        </div>

        <h2>Vendor Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="phonenumber"
            placeholder="Enter your phone number"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="forgot-link" onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default VendorLogin;
