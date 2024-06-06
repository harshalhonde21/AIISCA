import React, { useState } from "react";
import axios from "axios";
import "./AddEventForm.css";

export default function AddEventForm() {
  const [selectedMainImage, setSelectedMainImage] = useState(null);
  const [selectedGlimpseImages, setSelectedGlimpseImages] = useState([
    null,
    null,
    null,
  ]);
  const [previewMain, setPreviewMain] = useState(null);
  const [previewGlimpses, setPreviewGlimpses] = useState([null, null, null]);

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedMainImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewMain(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGlimpseImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newSelectedGlimpseImages = [...selectedGlimpseImages];
      newSelectedGlimpseImages[index] = file;
      setSelectedGlimpseImages(newSelectedGlimpseImages);

      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviewGlimpses = [...previewGlimpses];
        newPreviewGlimpses[index] = reader.result;
        setPreviewGlimpses(newPreviewGlimpses);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", event.target.eventtitle.value);
    formData.append("description", event.target.eventdescription.value);
    if (selectedMainImage) {
      formData.append("mainImage", selectedMainImage);
    }
    selectedGlimpseImages.forEach((image, index) => {
      if (image) {
        formData.append(`glimpseImage${index + 1}`, image);
      }
    });

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
    <div className="AddEvent__form__container">
      <form className="AddEvent__form" onSubmit={handleSubmit}>
        <h2 className="AddEvent__form__heading">Add Event</h2>
        <label className="AddEvent__form__label" htmlFor="eventtitle">
          Title
        </label>
        <input
          className="AddEvent__form__input"
          type="text"
          id="eventtitle"
          name="eventtitle"
          required
        />

        <label className="AddEvent__form__label" htmlFor="eventdescription">
          Content
        </label>
        <textarea
          className="AddEvent__form__textarea"
          id="eventdescription"
          name="eventdescription"
          required
        />

        <label className="AddEvent__form__label">Main Image</label>
        <input
          className="AddEvent__form__input"
          type="file"
          accept="image/*"
          onChange={handleMainImageChange}
        />
        {previewMain && (
          <img
            src={previewMain}
            alt="Main preview"
            className="AddEvent__form__image-preview"
          />
        )}

        <label className="AddEvent__form__label">Glimpse Images</label>
        {selectedGlimpseImages.map((_, index) => (
          <div key={index}>
            <input
              className="AddEvent__form__input"
              type="file"
              accept="image/*"
              onChange={(e) => handleGlimpseImageChange(index, e)}
            />
            {previewGlimpses[index] && (
              <img
                src={previewGlimpses[index]}
                alt={`Glimpse ${index + 1} preview`}
                className="AddEvent__form__image-preview"
              />
            )}
          </div>
        ))}
        <div className="AddEvent__form__button__container">
          <button className="AddEvent__form__button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
