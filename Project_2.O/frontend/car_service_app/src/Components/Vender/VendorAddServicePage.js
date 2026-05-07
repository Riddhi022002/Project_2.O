import React, { useState, useEffect } from "react";
import axios from "axios";

const VendorAddServices = () => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const [serviceDetails, setServiceDetails] = useState({
    price: "",
    gst: "",
    pickup_available: false,
    home_service_available: false,
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/services/fetchservices",
        );
        setServices(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  const handleServiceClick = (service) => {
    setActiveService(service);
    setShowModal(true);
  };

  const handleAddService = () => {
    if (selectedServices.find((s) => s.service_id === activeService.id)) {
      alert("Service already added");
      return;
    }
    const newService = {
      service_id: activeService.id,
      name: activeService.name,
      price: serviceDetails.price,
      gst: serviceDetails.gst,
      pickup_available: serviceDetails.pickup_available,
      home_service_available: serviceDetails.home_service_available,
    };

    setSelectedServices([...selectedServices, newService]);

    setShowModal(false);
    setServiceDetails({
      price: "",
      gst: "",
      pickup_available: false,
      home_service_available: false,
    });
  };

  const removeService = (index) => {
    const updated = [...selectedServices];
    updated.splice(index, 1);
    setSelectedServices(updated);
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/api/vendor/add-services", {
        vendorId: 1, // ⚠️ replace with real logged-in vendor ID
        services: selectedServices,
      });

      alert("Services added successfully");
    } catch (err) {
      console.error(err);
      alert("Error saving services");
    }
  };

  return (
    <div>
      <h2>Add Services</h2>

      {/* Selected Services */}
      <h3>Selected Services</h3>
      {selectedServices.map((service, index) => (
        <div key={index}>
          <p>{service.name}</p>
          <p>Price: {service.price}</p>
          <p>GST: {service.gst}</p>
          <button onClick={() => removeService(index)}>Remove</button>
        </div>
      ))}

      {/* All Services */}
      <h3>Available Services</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {services.map((service) => (
          <button key={service.id} onClick={() => handleServiceClick(service)}>
            {service.name}
          </button>
        ))}
      </div>

      <br />
      <button onClick={handleSave}>Save Services</button>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              margin: "100px auto",
              width: "300px",
            }}
          >
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

            <label>
              <input
                type="checkbox"
                checked={serviceDetails.pickup_available}
                onChange={(e) =>
                  setServiceDetails({
                    ...serviceDetails,
                    pickup_available: e.target.checked,
                  })
                }
              />
              Pickup Available
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                checked={serviceDetails.home_service_available}
                onChange={(e) =>
                  setServiceDetails({
                    ...serviceDetails,
                    home_service_available: e.target.checked,
                  })
                }
              />
              Home Service Available
            </label>

            <br />
            <br />

            <button onClick={handleAddService}>Done</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorAddServices;
