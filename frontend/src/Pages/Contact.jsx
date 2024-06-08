import { useState } from "react";
import axios from "axios";
import "../Css/Contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5500/api/v2/contact/add-contacts",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setStatusMessage(response.data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage(
        error.response?.data?.message || "Error sending message."
      );
    }
  };

  return (
    <>
      <div className="contact-heading">
        <h1>CONTACT US</h1>
        <div className="underline"></div>
      </div>

      <div className="contact-form-container">
        <h1>
          GET <br />
          IN <br />
          TOUCH
        </h1>
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
              name="phoneNumber"
              placeholder="PHONE NUMBER"
              value={formData.phoneNumber}
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
          {statusMessage && <p className="status-message">{statusMessage}</p>}
          <button className="submit-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
        <Footer />
    </>
  );
};

export default Contact;
