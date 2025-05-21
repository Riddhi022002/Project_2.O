import React from "react";
import "../../StyleSheets/Vender/venderHeader.css";

export default function SupplierHomePage() {
  return (
    <div className="supplier-home">
      <header className="supplier-header">
        <h1>Welcome, Supplier!</h1>
        {/* <nav className="supplier-nav">
          <button>Add Service</button>
          <button>My Services</button>
          <button>Pending Requests</button>
          <button>Today's Schedule</button>
        </nav> */}
      </header>

      <main className="supplier-main">
        <section className="dashboard-card">
          <h2>Add a New Service</h2>
          <p>Create and manage the services you offer to customers.</p>
          <button>Go to Add Service</button>
        </section>

        <section className="dashboard-card">
          <h2>View Your Services</h2>
          <p>See all services you’ve listed and make updates.</p>
          <button>Go to My Services</button>
        </section>

        <section className="dashboard-card">
          <h2>Pending Appointments</h2>
          <p>Review and accept/reject recent service requests.</p>
          <button>View Requests</button>
        </section>

        <section className="dashboard-card">
          <h2>Today's Schedule</h2>
          <p>Check your appointments and upcoming tasks for today.</p>
          <button>View Schedule</button>
        </section>
      </main>
    </div>
  );
}
