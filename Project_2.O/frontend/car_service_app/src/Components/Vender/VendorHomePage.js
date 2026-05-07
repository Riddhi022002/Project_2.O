import React from "react";
import { useNavigate } from "react-router-dom";
import "../../StyleSheets/Vender/venderHeader.css";

export default function SupplierHomePage() {
  const navigate = useNavigate();

  return (
    <div className="supplier-home">
      <header className="supplier-header">
        <h1>Welcome, Supplier!</h1>
      </header>

      <main className="supplier-main">
        <section className="dashboard-card">
          <h2>Add a New Service</h2>
          <p>Create and manage the services you offer to customers.</p>
          <button onClick={() => navigate("/VendorAddServicePage")}>
            Go to Add Service
          </button>
        </section>

        <section className="dashboard-card">
          <h2>View Your Services</h2>
          <p>See all services you’ve listed and make updates.</p>
          <button onClick={() => navigate("/VendorServicePage")}>
            Go to My Services
          </button>
        </section>

        <section className="dashboard-card">
          <h2>Pending Appointments</h2>
          <p>Review and accept/reject recent service requests.</p>
          <button onClick={() => navigate("/")}>
            View Requests
          </button>
        </section>

        <section className="dashboard-card">
          <h2>Today's Schedule</h2>
          <p>Check your appointments and upcoming tasks for today.</p>
          <button onClick={() => navigate("/")}>
            View Schedule
          </button>
        </section>
      </main>
    </div>
  );
}
