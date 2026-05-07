// import React from "react";

import CarWashList from "../WashStationList";
import HeroSection from "../HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
import CarServices from "./DisplayAvailableServices";
import VendorList from "./DisplayServiceVendors";
import Banner from "./RunningBanner";

// const CustomerHome = () => {
//   return (
//     <div>
//       <HeroSection />
//       <CarServices />

//       <br />
//       <hr />

//       <VendorList />

//       <hr />

//       {/* <WhyChooseUs /> */}

//       <hr />

//       {/* <Testimonials /> */}

//       <Footer />
//     </div>
//   );
// };

// export default CustomerHome;

import React, { useState } from "react";
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
            {/* Replace these later with your actual ecommerce components */}
            <h2>Shop Section</h2>
            <p>Products, categories, cart etc.</p>
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

            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerHome;
