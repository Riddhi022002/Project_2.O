import React, { useState } from "react";
//service section
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import CarServices from "./DisplayAvailableServices";
import VendorList from "./DisplayServiceVendors";
import Banner from "./RunningBanner";

//instaMart section
import DisplayProducts from "./InstaMart/DisplayAllProducts";
import DisplaySuppliers from "./InstaMart/DisplayAllSuppliers";

import { FiSearch } from "react-icons/fi";
import "../../StyleSheets/Customer/HomePage.css";
import "../../StyleSheets/herosection.css";

const CustomerHome = () => {
  const [active, setActive] = useState("services");

  return (
    <div>
      <HeroSection />
      {/* 🔹 SWITCH UI (your swiggy style) */}
      <div className="switch-container">
        <div
          className={`switch-card ${active === "services" ? "active" : ""}`}
          onClick={() => setActive("services")}
        >
          🚗 <br/>Services
        </div>

        <div
          className={`switch-card ${active === "shop" ? "active" : ""}`}
          onClick={() => setActive("shop")}
        >
          🛒 <br/>InstaMart
        </div>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="content">
        {active === "services" && (
          <>
            {/* Search Bar */}
            <div className="search-bar">
              <div className="input-box">
                <FiSearch className="icon" />
                <input
                  type="text"
                  placeholder="Search for services,car repair stations, more"
                />
                <br/>
              </div>
            </div>
            <Banner/>
            <br/>
            <CarServices />
            <br />
            <VendorList />
            <Footer />
          </>
        )}

        {active === "shop" && (
          <>
            {/* Search Bar */}
            <div className="search-bar">
              <div className="input-box">
                <FiSearch className="icon" />
                <input
                  type="text"
                  placeholder="Search for services,car repair stations, more"
                />
              </div>
            </div>
            <br/>
            <DisplayProducts/>
            <br/>
            <DisplaySuppliers/>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerHome;
