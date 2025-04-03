import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarWashList from "./Components/WashStationList";
import Footer from "./Components/Footer";
import CarWashDetails from "./Components/WashStationDetails";
import CarServices from "./Components/ServiceList";
import HeroSection from "./Components/HeroSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
//import Profile from "./Components/Profile";
function App() {
  return (
    <div className="App">
           <Router>
           
            <HeroSection/>  
            <CarServices/>    
            <br/>
            <hr/> 
             <CarWashList />
            <Routes>
                {/* <Route path="/" element={<CarWashList />} /> */}
                <Route path="/station/:id" element={<CarWashDetails />} />
            </Routes>
            <hr/>
             <WhyChooseUs/>
             <hr/>
             <Testimonials/>
     
            <Footer/> 
         </Router>  
        {/* <Profile/> */}
    </div>
  );
}

export default App;
