import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import CarServices from "./Components/ServiceList";
import HeroSection from "./Components/HeroSection";
import UserList from "./Components/user";
import Login from "./Components/Shared/Login";
import VendorHomePage from "./Components/Vender/VendorHomePage";
import AddServiceForm from "./Components/Vender/VendorAddServicePage";
import VendorServices from "./Components/Vender/DisplayServiceByVendorId";

import VendorSignup from "./Components/Vender/VendorRegistration";
import Signup from "./Components/Customer/CustomerRegistration";
import CustomerHome from "./Components/Customer/CustomerHomePage";
import LandingPage from "./Components/Shared/LandingPage";
import CustomerLogin from "./Components/Customer/CustomerLoginPage";
import VendorLogin from "./Components/Vender/VendorLoginPage";
import DisplayVendorServicesForSelectedService from "./Components/Customer/DisplayVendorServicesForSelectedService";
import VendorServiceDetails from "./Components/Customer/DisplayVendorServiceDetails";
import VendorDetails from "./Components/Customer/DisplayVendorDetails";
import Banner from "./Components/Customer/RunningBanner";
import CustomerProfile from "./Components/Customer/CustomerProfile";
import TrackingStatus from "./Components/Customer/AppointmentHistory";

function App() {
  return (
    <Router>
      <Routes>
        Home Page with all components
        <Route
          path="/"
          element={
            <>
              {/* <HeroSection />
              <CarServices />
              <br />
              <hr />
              <CarWashList />
              <hr />
              <WhyChooseUs />
              <hr />
              <Testimonials />
              <Footer /> */}

              {/* <Signup /> */}
              {/* <VendorSignup /> */}
              {/* <Login/> */}
              {/* <LandingPage/> */}
              {/* <CustomerLogin/> */}
              {/* <VendorLogin/> */}
              {/* <VendorHomePage/> */}
              <CustomerHome/>
              
            </>
          }
        />
        {/* Other Routes */}
        <Route path="/CustomerRegistrationPage" element={<Signup />} />
        <Route path="/VendorRegistrationPage" element={<VendorSignup/>} />
        <Route path="/CustomerHomePage" element={<CustomerHome/>} />
        <Route path="/VendorService/:id" element={<VendorServiceDetails />} />
        <Route path="/Sharedlogin" element={<Login/>} />
        <Route path="/VendorHomePage" element={<VendorHomePage/>} />
         <Route path="/VendorAddServicePage" element={<AddServiceForm/>} />
         <Route path="/VendorServicePage" element={<VendorServices/>} />
         <Route path="/services/:serviceId" element={<DisplayVendorServicesForSelectedService />} />
         <Route path="/VendorDetails/:vendorId" element={<VendorDetails/>}/>
          <Route path="/CustomerProfile" element={<CustomerProfile/>}/>
          <Route path="/tracking" element={<TrackingStatus currentStep={2} />} />
      </Routes>
    </Router>
  );
  
}
export default App;
