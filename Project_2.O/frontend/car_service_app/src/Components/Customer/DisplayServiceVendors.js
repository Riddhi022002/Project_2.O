import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../../StyleSheets/washstationlist.css";
// import "../../StyleSheets/cardviews.css";
import "../../StyleSheets/Customer/DisplayServiceVendors.css"

const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/vendor/getAllVendors")
            .then((res) => {
                setVendors(res.data);
            })
            .catch((err) => {
                console.error("Error fetching vendors:", err);
            });
    }, []);

    return (
        <div>
            <h1>Choose Your Provider</h1>

            <div className="car-wash-list">
                {vendors.length === 0 ? (
                    <p style={{ textAlign: "center", width: "100%" }}>
                        No vendors available
                    </p>
                ) : (
                    vendors.map((vendor) => (
                        <div
                            key={vendor.id}
                            className="car-wash-card"
                            onClick={() => navigate(`/VendorDetails/${vendor.VENDORID}`)}
                        >
                            {/* Common Image */}
                            <img
                                src="/assets/washingcarstation.jpg"
                                alt="vendor"
                                className="car-wash-image"
                            />

                            <div className="car-wash-info">
                                <h3 className="car-wash-name">
                                    {vendor.BUSINESSNAME}
                                </h3>

                                <p className="car-wash-location">
                                    📍 {vendor.CITY}
                                </p>

                                <div className="car-wash-meta">
                                    <span>⭐ {vendor.rating || "N/A"}</span>
                                    <span>
                                        ⏳ {vendor.estimated_time || 30} mins
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default VendorList;