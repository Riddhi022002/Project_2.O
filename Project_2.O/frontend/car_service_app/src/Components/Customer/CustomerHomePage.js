import React from "react";

import CarWashList from "../WashStationList";
import CarServices from "../ServiceList";
import HeroSection from "../HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

const CustomerHome = () => {
  return (
    <div>
      <HeroSection />
      <CarServices />

      <br />
      <hr />

      <CarWashList />

      <hr />

      <WhyChooseUs />

      <hr />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default CustomerHome;