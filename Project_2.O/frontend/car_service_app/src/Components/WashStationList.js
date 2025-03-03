import React from "react";
import CarWashCard from "./CardViews";
import "../StyleSheets/washstationlist.css";

const carWashStations = [
    {
        id: 1,
        image: "https://source.unsplash.com/400x300/?carwash",
        name: "Shiny Auto Spa",
        location: "Mapusa, Goa",
        rating: "4.5",
        time: "30-40"
    },
    {
        id: 2,
        image: "https://source.unsplash.com/400x300/?car-service",
        name: "Express Car Care",
        location: "Panjim, Goa",
        rating: "4.7",
        time: "25-35"
    },
    {
        id: 3,
        image: "https://source.unsplash.com/400x300/?car-cleaning",
        name: "Speedy Wash Hub",
        location: "Margao, Goa",
        rating: "4.2",
        time: "40-50"
    }
];

const CarWashList = () => {
    return (
        <div className="car-wash-list">
            {carWashStations.map((station) => (
                <CarWashCard key={station.id} {...station} />
            ))}
        </div>
    );
};

export default CarWashList;
