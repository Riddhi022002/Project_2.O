import React, { useState, useEffect } from "react";
import axios from "axios";

const VendorSignup = () => {
  const [formData, setFormData] = useState({
    business_name: '',
    owner_name: '',
    phonenumber:'',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gst_number: '',
    password:''
  });

  // All services from DB
const [services, setServices] = useState([]);

// Services vendor selects
const [selectedServices, setSelectedServices] = useState([]);

// Popup control
const [showModal, setShowModal] = useState(false);

// Which service is clicked
const [activeService, setActiveService] = useState(null);

// Input inside popup
const [serviceDetails, setServiceDetails] = useState({
  price: '',
  gst: ''
});

useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services/fetchservices");
      setServices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchServices();
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      business_name: formData.business_name,
      owner_name: formData.owner_name,
      phonenumber:formData.phonenumber,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      gst_number:formData.gst_number,
      password: formData.password,
      services: selectedServices
    };

    try {
      const res = await axios.post("http://localhost:5000/api/auth/vendor/register", payload);
      alert("Registration Successful!");
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  const removeService = (index) => {
  const updated = [...selectedServices];
  updated.splice(index, 1);
  setSelectedServices(updated);
};

const handleServiceClick = (service) => {
  setActiveService(service);
  setShowModal(true);
};

const handleAddService = () => {
  const newService = {
    service_id: activeService.id,
    name: activeService.name,
    price: serviceDetails.price,
    gst: serviceDetails.gst
  };

  setSelectedServices([...selectedServices, newService]);

  setShowModal(false);

  setServiceDetails({
    price: '',
    gst: ''
  });
};


  return (
    <form onSubmit={handleSubmit}>

      <h2>Vendor Registration</h2>

        <input name="business_name" placeholder="Business Name" onChange={handleChange} required />
        <input name="owner_name" placeholder="Owner Name" onChange={handleChange} required />
        <input name="phonenumber" placeholder="Phone Number" onChange={handleChange} required />

        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <input name="state" placeholder="State" onChange={handleChange} required />
        <input name="pincode" type="number" placeholder="Pincode" onChange={handleChange} required />

        <input name="gst_number" placeholder="GST Number" onChange={handleChange} required />

        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

      <h3>Selected Services</h3>

<div>
  {selectedServices.map((service, index) => (
    <div key={index} style={{ border: "1px solid black", margin: "5px", padding: "10px" }}>
      <p>{service.name}</p>
      <p>Price: {service.price}</p>
      <p>GST: {service.gst}</p>

      <button type="button" onClick={() => removeService(index)}>Remove</button>
    </div>
  ))}
</div>

      <h3>Select the services you provide</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
 {services
  .filter(
    (service) =>
      !selectedServices.some(
        (selected) => selected.service_id === service.id
      )
  )
  .map((service) => (
    <button type="button"
      key={service.id}
      onClick={() => handleServiceClick(service)}
    >
      {service.name}
    </button>
  ))}
</div>

      <button type="submit">Register</button>

      {showModal && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)"
  }}>
    <div style={{
      background: "white",
      padding: "20px",
      margin: "100px auto",
      width: "300px"
    }}>
      <h3>{activeService?.name}</h3>

      <input
        placeholder="Price"
        value={serviceDetails.price}
        onChange={(e) =>
          setServiceDetails({ ...serviceDetails, price: e.target.value })
        }
      />

      <input
        placeholder="GST"
        value={serviceDetails.gst}
        onChange={(e) =>
          setServiceDetails({ ...serviceDetails, gst: e.target.value })
        }
      />

      <br /><br />

      <button type="button" onClick={handleAddService}>Done</button>
      <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
    </div>
  </div>
)}
    </form>
  );
};

export default VendorSignup;