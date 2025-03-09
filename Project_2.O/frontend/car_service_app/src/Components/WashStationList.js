import React from "react";
import { useNavigate } from "react-router-dom";
import CarWashCard from "./CardViews";
import "../StyleSheets/washstationlist.css";

const carWashStations = [
    {
        id: 1,
        image: "/assets/washingcarstation.jpg",
        name: "Shiny Auto Spa",
        location: "Mapusa, Goa",
        rating: "4.5",
        time: "30-40"
    },
    {
        id: 2,
        image: "/assets/washingcarstation.jpg",
        name: "Express Car Care",
        location: "Panjim, Goa",
        rating: "4.7",
        time: "25-35"
    },
    {
        id: 3,
        image: "/assets/washingcarstation.jpg",
        name: "Speedy Wash Hub",
        location: "Margao, Goa",
        rating: "4.2",
        time: "40-50"
    },
    {
        id: 3,
        image: "/assets/washingcarstation.jpg",
        name: "Assonora Car Wash",
        location: "Mapusa, Goa",
        rating: "3.7",
        time: "40-50"
    },
    {
        id: 3,
        image: "/assets/washingcarstation.jpg",
        name: "Shree Sai Car Washing Center",
        location: "Bicholim, Goa",
        rating: "4.0",
        time: "40-50"
    }
];

const CarWashList = () => {
    const navigate = useNavigate();

    return (
        <div className="car-wash-list">
            {carWashStations.map((station) => (
                 <div key={station.id} onClick={() => navigate(`/station/${station.id}`)}>
                    <CarWashCard {...station} />
                </div>
            ))}
        </div>
    );
};

export default CarWashList;
