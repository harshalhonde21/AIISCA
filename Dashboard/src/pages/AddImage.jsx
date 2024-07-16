import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddImage.css';
import toast from "react-hot-toast"

const AddImage = () => {
  const [imageName, setImageName] = useState('');
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('imageName', imageName);
    formData.append('date', date.toISOString()); // Convert date to ISO string for backend
    formData.append('year', year);
    formData.append('city', city);
    formData.append('image', image);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/v4/gallery/upload-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setImageName('');
      setDate(new Date());
      setYear('');
      setCity('');
      setImage(null);

      console.log('Success:', response.data);
      toast.success('Image uploaded successfully'); // You can use toast or another notification library here
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to upload image'); // Handle error appropriately
    }
  };

  return (
    <div className="AddImage__container">
      <form className="AddImage__form" onSubmit={handleSubmit}>
        <h2 className="AddImage__form__heading">Upload Image</h2>

        <label className="AddImage__form__label" htmlFor="imageName">
          Image Name:
        </label>
        <input
          className="AddImage__form__input"
          type="text"
          id="imageName"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          required
        />

        <label className="AddImage__form__label" htmlFor="date">
          Date:
        </label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          className="AddImage__form__input"
          id="date"
          required
        />

        <label className="AddImage__form__label" htmlFor="year">
          Year:
        </label>
        <input
          className="AddImage__form__input"
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />

        <label className="AddImage__form__label" htmlFor="city">
          City:
        </label>
        <input
          className="AddImage__form__input"
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label className="AddImage__form__label" htmlFor="image">
          Image:
        </label>
        <input
          className="AddImage__form__input"
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
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
};

export default AddImage;
