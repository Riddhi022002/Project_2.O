import React, { useState } from 'react';
import '../../StyleSheets/Vender/vendorregistrationformpage.css';

const VendorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    userid: '',
    business_name: '',
    owner_name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gst_number: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.userid) newErrors.userid = 'User ID is required';
    if (!formData.business_name) newErrors.business_name = 'Business name is required';
    if (!formData.owner_name) newErrors.owner_name = 'Owner name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.pincode.match(/^\d{6}$/)) newErrors.pincode = 'Valid 6-digit pincode required';
    if (!formData.gst_number) newErrors.gst_number = 'GST number is required';
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
        const response = await fetch('http://localhost:5000/api/vendors/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            userid: '',
            business_name: '',
            owner_name: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            gst_number: '',
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
    <form className="vendor-form" onSubmit={handleSubmit}>
      <h2>Vendor Registration</h2>

      {submitted && <p className="success-msg">Form submitted successfully!</p>}

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

      <button type="submit">Register</button>
    </form>
  );
};

export default VendorRegistrationForm;
