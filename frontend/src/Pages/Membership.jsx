import React, { useState } from 'react';
import '../Css/Membership.css';
import Footer from '../Components/Footer';

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    category: '',
    caste: '',
    email: '',
    contactNumber: '',
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    permanentPincode: '',
    highestQualification: '',
    occupation: '',
    currentAddress: '',
    currentCity: '',
    currentState: '',
    currentPincode: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert('You must agree to the terms and conditions before submitting.');
      return;
    }

    if (formData.permanentAddress !== formData.currentAddress) {
      alert('Permanent Address and Current Address must be the same.');
      return;
    }

    try {
      const response = await fetch('https://aiisca.onrender.com/api/v3/member/add-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Membership application submitted successfully!');
        setFormData({
          fullName: '',
          gender: '',
          dateOfBirth: '',
          category: '',
          caste: '',
          email: '',
          contactNumber: '',
          permanentAddress: '',
          permanentCity: '',
          permanentState: '',
          permanentPincode: '',
          highestQualification: '',
          occupation: '',
          currentAddress: '',
          currentCity: '',
          currentState: '',
          currentPincode: '',
          agreeToTerms: false,
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit the application: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="membership-form-container">
        <h1>Membership Application Form</h1>
        <form className="membership-form" onSubmit={handleSubmit}>
          <div className="personal-info">
            <h2>Personal Information:</h2>
            <div className="form-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="half-width">
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <input
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth (YYYY-MM-DD)"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="half-width">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="caste"
                  placeholder="Caste"
                  value={formData.caste}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="permanentAddress"
                placeholder="Permanent Address"
                value={formData.permanentAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="half-width">
                <input
                  type="text"
                  name="permanentCity"
                  placeholder="City"
                  value={formData.permanentCity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="permanentState"
                  placeholder="State"
                  value={formData.permanentState}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="permanentPincode"
                  placeholder="Pincode"
                  value={formData.permanentPincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="educational-background">
            <h2>Educational Background:</h2>
            <div className="form-row">
              <input
                type="text"
                name="highestQualification"
                placeholder="Highest Qualification"
                value={formData.highestQualification}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="currentAddress"
                placeholder="Current Address"
                value={formData.currentAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="half-width">
                <input
                  type="text"
                  name="currentCity"
                  placeholder="City"
                  value={formData.currentCity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="currentState"
                  placeholder="State"
                  value={formData.currentState}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="currentPincode"
                  placeholder="Pincode"
                  value={formData.currentPincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToTerms">
              I hereby declare that the information provided in this membership form is true and accurate to the best of my knowledge. I agree to abide by the rules and regulations of the organization and consent to the processing of my personal data as per the privacy policy.
            </label>
          </div>

          <div className="submit-button-container">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
        <div className="bank-details">

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Membership;
