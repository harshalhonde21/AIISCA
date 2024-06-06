import React, { useState } from 'react';
import '../Css/Contact.css';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_BACKEND_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };

  return (
    <>
    <div className="contact-form-container">
      <h1>Get <br />In <br />Touch</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="LAST NAME"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="EMAIL ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="MESSAGE"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className='submit-button'type="submit">SUBMIT</button>
      </form>
    </div>
      <div className="footer-page-container">
          <Footer />
        </div>
      </>
  );
};

export default Contact;
