import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarWashList from "./Components/WashStationList";
import Footer from "./Components/Footer";
import CarWashDetails from "./Components/WashStationDetails";
import CarServices from "./Components/ServiceList";
import HeroSection from "./Components/HeroSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import Profile from "./Components/Profile";
import UserList from "./Components/user";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with all components
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        {/* Other Routes 
        <Route path="/station/:id" element={<CarWashDetails />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/" element={<UserList/>} />
      </Routes>
    </Router>
  );
}
export default App;
