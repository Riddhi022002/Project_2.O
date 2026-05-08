import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../StyleSheets/Customer/DisplayServiceVendors.css"

const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/vendor/getAllVendors`)
            .then((res) => {
                setVendors(res.data);
                console.log(res.data);
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
                            onClick={() => navigate(`/VendorDetails/${vendor.vendorid}`)}
                        >
                            {/* Common Image */}
                            <img
                                src="/assets/washingcarstation.jpg"
                                alt="vendor"
                                className="car-wash-image"
                            />

                            <div className="car-wash-info">
                                <h3 className="car-wash-name">
                                    {vendor.businessname}
                                </h3>

                                <p className="car-wash-location">
                                    📍 {vendor.city}
                                </p>

                                <div className="car-wash-meta">
                                    <span>⭐ {vendor.rating || "4.0"}</span>
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