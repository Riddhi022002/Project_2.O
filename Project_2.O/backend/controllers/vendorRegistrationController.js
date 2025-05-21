const { response } = require("express");

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
  
  module.exports = response;
