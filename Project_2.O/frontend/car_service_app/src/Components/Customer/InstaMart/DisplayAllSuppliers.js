import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../StyleSheets/Customer/InstaMart/displaysuppliers.css";

const DisplaySuppliers = () => {
  const navigate = useNavigate();

const suppliers = [
  {
    id: 1,
    name: "AutoCare Hub",
    location: "Panjim",
    delivery: "60 mins",
    image: "/assets/washingcarstation.jpg"
  },
  {
    id: 2,
    name: "Speed Accessories",
    location: "Mapusa",
    delivery: "15 mins",
    image: "/assets/washingcarstation.jpg"
  },
  {
    id: 3,
    name: "Car Shine Store",
    location: "thivim",
    delivery: "18 mins",
    image: "/assets/washingcarstation.jpg"
  },
  {
    id: 4,
    name: "Drive Essentials",
    location: "thivim",
    delivery: "25 mins",
    image: "/assets/washingcarstation.jpg"
  }
];

  return (
    <div className="suppliers-container">
      <h3>Car Care Partners</h3>
      <br/>
      <div className="suppliers-grid">
        {suppliers.map((supplier) => (
          <div
            className="supplier-card"
            key={supplier.id}
            onClick={() =>
              navigate(`/products/${supplier.id}`)
            }
          >
            <img src={supplier.image} alt={supplier.name} />

            <div className="supplier-info">
              <h3>{supplier.name}</h3>
              <p>{supplier.location}</p>
              <span>delivery in:{supplier.delivery}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplaySuppliers;