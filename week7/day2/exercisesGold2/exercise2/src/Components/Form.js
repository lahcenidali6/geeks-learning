import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email } = formData;

    if (!firstName || !lastName || !phone || !email) {
      alert('Please fill in all fields');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      alert('Phone number must be numeric');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="container">
      {!submitted ? (
        <form className="form-box" onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Please provide your information below.</p>

          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="form-box">
          <p className="user-name">
            {formData.lastName}, {formData.firstName}
          </p>
          <p className="user-info">
            {formData.phone} | {formData.email}
          </p>
          <button className="submit-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
