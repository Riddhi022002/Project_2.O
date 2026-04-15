import React, { useState } from 'react';
import '../../StyleSheets/Vender/vendoraddservicepage.css';

const AddServiceForm = () => {
  const [formData, setFormData] = useState({
    VendorId:'',
    service_name: '',
    description: '',
    price: '',
    estimated_time: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.VendorId) newErrors.category = 'Vendor ID is required';
    if (!formData.service_name) newErrors.service_name = 'Service name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Valid price is required';
    if (!formData.estimated_time) newErrors.estimated_time = 'Estimated time is required';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await fetch('http://localhost:5000/api/addService/addService', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            VendorId:'',
            service_name: '',
            description: '',
            price: '',
            estimated_time: ''
          });
        } else {
          const data = await response.json();
          alert(data.error || 'Something went wrong');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server error');
      }
    }
  };

  return (
    <form className="add-service-form" onSubmit={handleSubmit}>
      <h2>Add New Service</h2>

      {submitted && <p className="success-msg">Service added successfully!</p>}

      {Object.entries(formData).map(([field, value]) => (
        <div className="form-group" key={field}>
          <label>{field.replace('_', ' ').toUpperCase()}</label>
          <input
            type="text"
            name={field}
            value={value}
            onChange={handleChange}
            placeholder={`Enter ${field.replace('_', ' ')}`}
          />
          {errors[field] && <span className="error">{errors[field]}</span>}
        </div>
      ))}

      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
