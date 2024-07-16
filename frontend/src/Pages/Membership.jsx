import  { useState, useEffect } from 'react';
import { State, City } from 'country-state-city';
import "../Css/Membership.css";
import Footer from "../Components/Footer";
import Contribute from "../Components/Contribute";

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    category: "",
    caste: "",
    email: "",
    contactNumber: "",
    permanentAddress: "",
    permanentCity: "",
    permanentState: "",
    permanentPincode: "",
    highestQualification: "",
    occupation: "",
    currentAddress: "",
    currentCity: "",
    currentState: "",
    currentPincode: "",
    agreeToTerms: false,
    sameAsPermanent: false,
  });

  const [permanentStates, setPermanentStates] = useState([]);
  const [permanentCities, setPermanentCities] = useState([]);
  const [currentStates, setCurrentStates] = useState([]);
  const [currentCities, setCurrentCities] = useState([]);

  useEffect(() => {
    const indianStates = State.getStatesOfCountry('IN');
    setPermanentStates(indianStates);
    setCurrentStates(indianStates);
  }, []);

  const handlePermanentStateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'permanentState') {
      const selectedState = permanentStates.find((state) => state.name === value);
      const stateCities = City.getCitiesOfState('IN', selectedState.isoCode);
      setPermanentCities(stateCities);
    }
  };

  const handleCurrentStateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'currentState') {
      const selectedState = currentStates.find((state) => state.name === value);
      const stateCities = City.getCitiesOfState('IN', selectedState.isoCode);
      setCurrentCities(stateCities);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "sameAsPermanent" && checked) {
      setFormData((prevData) => ({
        ...prevData,
        currentAddress: prevData.permanentAddress,
        currentCity: prevData.permanentCity,
        currentState: prevData.permanentState,
        currentPincode: prevData.permanentPincode,
      }));
    } else if (name === "sameAsPermanent" && !checked) {
      setFormData((prevData) => ({
        ...prevData,
        currentAddress: "",
        currentCity: "",
        currentState: "",
        currentPincode: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions before submitting.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v3/member/add-member`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Membership application submitted successfully!");
        setFormData({
          fullName: "",
          gender: "",
          dateOfBirth: "",
          category: "",
          caste: "",
          email: "",
          contactNumber: "",
          permanentAddress: "",
          permanentCity: "",
          permanentState: "",
          permanentPincode: "",
          highestQualification: "",
          occupation: "",
          currentAddress: "",
          currentCity: "",
          currentState: "",
          currentPincode: "",
          agreeToTerms: false,
          sameAsPermanent: false,
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit the application: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
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
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Other">Other</option>
                </select>
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
                <select
                  name="permanentState"
                  value={formData.permanentState}
                  onChange={handlePermanentStateChange}
                  required
                >
                  <option value="">Select State</option>
                  {permanentStates.map((state) => (
                    <option key={state.isoCode} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="half-width">
                <select
                  name="permanentCity"
                  value={formData.permanentCity}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select City</option>
                  {permanentCities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
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
              <select
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
                required
              >
                <option value="">Select highest Qualification</option>
                <option value="10th Pass">10th Pass</option>
                <option value="12th Pass">12th Pass</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="PhD Scholar">PhD Scholar</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
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

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="sameAsPermanent"
                checked={formData.sameAsPermanent}
                onChange={handleChange}
              />
              <label htmlFor="sameAsPermanent">Same as Permanent Address</label>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="currentAddress"
                placeholder="Current Address"
                value={formData.currentAddress}
                onChange={handleChange}
                required
                disabled={formData.sameAsPermanent}
              />
            </div>
            <div className="form-row">
              <div className="half-width">
                <select
                  name="currentState"
                  value={formData.currentState}
                  onChange={handleCurrentStateChange}
                  required
                  disabled={formData.sameAsPermanent}
                >
                  <option value="">Select State</option>
                  {currentStates.map((state) => (
                    <option key={state.isoCode} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="half-width">
                <select
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleChange}
                  required
                  disabled={formData.sameAsPermanent}
                >
                  <option value="">Select City</option>
                  {currentCities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="half-width">
                <input
                  type="text"
                  name="currentPincode"
                  placeholder="Pincode"
                  value={formData.currentPincode}
                  onChange={handleChange}
                  required
                  disabled={formData.sameAsPermanent}
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
              I hereby declare that the information provided in this membership
              form is true and accurate to the best of my knowledge. I agree to
              abide by the rules and regulations of the organization and consent
              to the processing of my personal data as per the privacy policy.
            </label>
          </div>

          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
        <div className="bank-details">
          <Contribute/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Membership;
