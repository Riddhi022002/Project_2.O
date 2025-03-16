import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CarWashList from "./Components/WashStationList";
import Footer from "./Components/Footer";
import CarWashDetails from "./Components/WashStationDetails";
import CarServices from "./Components/ServiceList";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className="App">
           <Router>
           
            <HeroSection/>  
            {/* <CarServices/>           */}
            <Routes>
                <Route path="/" element={<CarWashList />} />
                <Route path="/station/:id" element={<CarWashDetails />} />
            </Routes>
            
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
