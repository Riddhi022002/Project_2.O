import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
};

const VendorServiceList = ({ vendorId }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/services/getVendorServices/${3}`
        );
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();
        setServices(data.services || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [vendorId]);

  const handleEdit = (vendorserviceId) => {
    console.log("Edit service:", vendorserviceId);
    // later → open modal / navigate to edit page
  };

  const handleDelete = (vendorserviceId) => {
    console.log("Delete service:", vendorserviceId);
    // later → call delete API
  };

  if (loading) return <p>Loading services...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={styles.container}>
      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        services.map(service => (
          <div key={service.id} style={styles.card}>
            
            <h3>{service.service_name}</h3>
            <p>{service.description}</p>

            <p><strong>Price:</strong> ₹{service.price}</p>
            {/* <p><strong>Duration:</strong> {service.duration_minutes} mins</p> */}
            {/* <p>
              <strong>Status:</strong>{" "}
              {service.is_active ? "Active" : "Inactive"}
            </p> */}

            {/* Buttons */}
            <div style={styles.buttonContainer}>
              <button
                style={{ ...styles.button, backgroundColor: "#e74c3c" }}
                onClick={() => handleDelete(service.id)}
              >
                Delete
              </button>

              <button
                style={{ ...styles.button, backgroundColor: "#3498db" }}
                onClick={() => handleEdit(service.id)}
              >
                Edit
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default VendorServiceList;