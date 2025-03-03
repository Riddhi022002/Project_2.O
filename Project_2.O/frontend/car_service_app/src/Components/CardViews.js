import React from "react";
import "../StyleSheets/cardviews.css";

const CarWashCard = ({ image, name, location, rating, time }) => {
    return (
        <div className="car-wash-card">
            <img src={image} alt={name} className="car-wash-image" />
            <div className="car-wash-info">
                <h3 className="car-wash-name">{name}</h3>
                <p className="car-wash-location">📍 {location}</p>
                <div className="car-wash-meta">
                    <span className="rating">⭐ {rating}</span>
                    <span className="time">⏳ {time} mins</span>
                </div>
            </div>
        </div>
    );
};

export default CarWashCard;
