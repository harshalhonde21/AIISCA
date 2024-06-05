import React, { useState, useEffect } from 'react';
import '../Css/Gallery.css';
import Footer from '../Components/Footer';
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://gallery');
      const data = await response.json();
      setImages(data);
      setFilteredImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    applyFilters(e.target.value, city);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    applyFilters(year, e.target.value);
  };

  const applyFilters = (selectedYear, selectedCity) => {
    let filtered = images;
    if (selectedYear) {
      filtered = filtered.filter(image => image.year === selectedYear);
    }
    if (selectedCity) {
      filtered = filtered.filter(image => image.city === selectedCity);
    }
    setFilteredImages(filtered);
  };

  return (
    <>
    <div className="gallery-container">
      <div className="gallery-heading">
        <h1>GALLERY</h1>
        <div className='underline'></div>
      </div>
      <div className="filter-bar">
        <select value={year} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more years as needed */}
        </select>
        <select value={city} onChange={handleCityChange}>
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          {/* Add more cities as needed */}
        </select>
      </div>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Gallery;
