import React from "react";
import { useParams } from "react-router-dom";
import "../StyleSheets/washstationdetails.css";

const carWashStations = [
    {
        id: 1,
        image: "/assets/washingcarstation.jpg",
        name: "Shiny Auto Spa",
        location: "Mapusa, Goa",
        services: "Exterior & Interior Cleaning, Waxing",
        rating: "4.5",
        time: "30-40 minutes"
    },
    {
        id: 2,
        image: "/assets/washingcarstation.jpg",
        name: "Express Car Care",
        location: "Panjim, Goa",
        services: "Quick Wash, Vacuum Cleaning",
        rating: "4.7",
        time: "25-35 minutes"
    }
];

const CarWashDetails = () => {
    const { id } = useParams();
    const station = carWashStations.find(station => station.id === parseInt(id));

    if (!station) {
        return <h2>Car Wash Station Not Found</h2>;
    }

// const BookService=()=>{
//     alert("service booked");
// }

    return (
        <div className="car-wash-container">
            {/* Left Section */}
            <div className="car-wash-left">
                <img src={station.image} alt={station.name} />
            </div>

            {/* Right Section */}
            <div className="car-wash-right">
                <h2>{station.name}</h2>
                <p><strong>Address:</strong> {station.location}</p>
                <p><strong>Services:</strong> {station.services}</p>
                <p><strong>Rating:</strong> {station.rating} ⭐</p>
                <p><strong>Estimated Time:</strong> {station.time}</p>
                <button className="book-service-btn">Book Service</button>
            </div>
        </div>
    );
};

export default CarWashDetails;
