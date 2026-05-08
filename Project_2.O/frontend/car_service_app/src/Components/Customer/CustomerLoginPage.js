import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../StyleSheets/SharedCSS/login.css"

const CustomerLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/customer/login`, formData);
     localStorage.setItem("customerId", res.data.customer.id);
      // after login
      navigate("/CustomerHomePage");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* Register Link */}
        {/* <div className="top-link">
          <span>New here? </span>
          <button onClick={() => navigate("/CustomerRegistrationPage")}>
            Register
          </button>
        </div> */}

        <h2>Customer Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
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
        <p
          className="forgot-link"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>

      </div>
    </div>
  );
};

export default CustomerLogin;