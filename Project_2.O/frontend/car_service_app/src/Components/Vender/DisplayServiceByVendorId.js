import React, { useEffect, useState } from 'react';

const VendorServiceList = ({ vendorId }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/vendors/${3}/services`);
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();
        console.log("Fetched data:", data);  // Debug log
        setServices(data.services || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [vendorId]);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Services by Vendor #{vendorId}</h2>
      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <h4>{service.service_name}</h4>
              <p>{service.description}</p>
              <p>₹{service.price} — {service.duration_minutes} minutes</p>
              <p>Status: {service.is_active ? 'Active' : 'Inactive'}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VendorServiceList;
