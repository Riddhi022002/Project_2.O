import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cars: [
      {
        brand: "",
        model: "",
        registration_number: ""
      }
    ]
  });

  // Handle customer fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle car fields
  const handleCarChange = (index, e) => {
    const updatedCars = [...formData.cars];
    updatedCars[index][e.target.name] = e.target.value;

    setFormData({
      ...formData,
      cars: updatedCars
    });
  };

  // Add new car
  const addCar = () => {
    setFormData({
      ...formData,
      cars: [
        ...formData.cars,
        { brand: "", model: "", registration_number: "" }
      ]
    });
  };

  // Remove car
  const removeCar = (index) => {
    const updatedCars = formData.cars.filter((_, i) => i !== index);
    setFormData({ ...formData, cars: updatedCars });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      cars: formData.cars
    };

    try {
      await axios.post("http://localhost:5000/api/auth/customer/register", payload);
      alert("Registration Successful!");
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Signup</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

      <h3>Car Details</h3>

      {formData.cars.map((car, index) => (
        <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
          
          <input
            name="brand"
            placeholder="Brand"
            value={car.brand}
            onChange={(e) => handleCarChange(index, e)}
            required
          />

          <input
            name="model"
            placeholder="Model Number"
            value={car.model}
            onChange={(e) => handleCarChange(index, e)}
            required
          />

          <input
            name="registration_number"
            placeholder="Registration Number"
            value={car.registration_number}
            onChange={(e) => handleCarChange(index, e)}
            required
          />

          {formData.cars.length > 1 && (
            <button type="button" onClick={() => removeCar(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addCar}>
        + Add Another Car
      </button>

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;