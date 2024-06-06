import React, { useState } from "react";
import axios from "axios";
import "./AddImage.css";

export default function AddImage() {
  const [imageName, setImageName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageName", imageName);
    formData.append("month", month);
    formData.append("year", year);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    // Replace this URL with your actual upload URL
    const uploadUrl = "https://example.com/upload";

    axios
      .post(uploadUrl, formData)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
      <div className="AddImage__container">
        <form className="AddImage__form" onSubmit={handleSubmit}>
          <h2 className="AddImage__form__heading">Add Image</h2>
          <label className="AddImage__form__label" htmlFor="imageName">
            Image Name
          </label>
          <input
            className="AddImage__form__input"
            type="text"
            id="imageName"
            name="imageName"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            required
          />

          <label className="AddImage__form__label">Upload Image</label>
          <input
            className="AddImage__form__input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image preview"
              className="AddImage__form__image-preview"
            />
          )}

          <label className="AddImage__form__label" htmlFor="month">
            Month
          </label>
          <select
            className="AddImage__form__select"
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          >
            <option value="" disabled>
              Select month
            </option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>

          <label className="AddImage__form__label" htmlFor="year">
            Year
          </label>
          <input
            className="AddImage__form__input"
            type="number"
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <div className="AddImage__form__button__container">
            <button className="AddImage__form__submit__button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
  );
}
