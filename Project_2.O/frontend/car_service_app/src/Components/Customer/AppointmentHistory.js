import React from "react";
import { useNavigate } from "react-router-dom";
import "../../StyleSheets/Customer/AppointmentHistory.css";

const steps = [
  "Request Received",
  "Pending",
  "Accepted",
  "In Progress",
  "Completed",
];

const TrackingStatus = ({ currentStep = 1 }) => {
    
      const navigate = useNavigate();
      
  return (
    <div className="tracking-container">
         <button
          className="back-btn"
          onClick={() => navigate("/CustomerHomePage")}
        >
          ←
        </button>
      <h3 className="tracking-title">Track your appointment status</h3>

      <div className="tracking-steps">
        {steps.map((step, index) => {
          const stepIndex = index + 1;

          return (
            <div key={index} className="step-wrapper">
              <div
                className={`step-circle ${
                  stepIndex <= currentStep ? "active" : ""
                }`}
              >
                {stepIndex}
              </div>

              <div
                className={`step-label ${
                  stepIndex <= currentStep ? "active-text" : ""
                }`}
              >
                {step}
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`step-line ${
                    stepIndex < currentStep ? "active-line" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackingStatus;