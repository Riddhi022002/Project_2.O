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
import Login from "./Components/Shared/Login";
import SupplierHomePage from "./Components/Vender/VenderHeader";
import AddServiceForm from "./Components/Vender/VendorAddServicePage";
import VendorServices from "./Components/Vender/DisplayServiceByVendorId";

import VendorSignup from "./Components/Vender/VendorRegistration";
import Signup from "./Components/Customer/CustomerRegistration";
import CustomerHome from "./Components/Customer/CustomerHomePage";
import LandingPage from "./Components/Shared/LandingPage";
import CustomerLogin from "./Components/Customer/CustomerLoginPage";
import VendorLogin from "./Components/Vender/VendorLoginPage";

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
              <VendorLogin/>
            </>
          }
        />
        {/* Other Routes */}
        <Route path="/CustomerRegistrationPage" element={<Signup />} />
        <Route path="/VendorRegistrationPage" element={<VendorSignup/>} />
        <Route path="/CustomerHomePage" element={<CustomerHome/>} />
        <Route path="/station/:id" element={<CarWashDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Sharedlogin" element={<Login/>} />
        <Route path="/VendorHomePage" element={<SupplierHomePage/>} />
         <Route path="/VendorAddServicePage" element={<AddServiceForm/>} />
         <Route path="/VendorServicePage" element={<VendorServices/>} />
      </Routes>
    </Router>
  );
  
}
export default App;
