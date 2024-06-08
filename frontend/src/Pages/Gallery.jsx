import { useState, useEffect, useCallback } from 'react';
import '../Css/Gallery.css';
import Footer from '../Components/Footer';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://aiisca.onrender.com/api/v4/gallery/get-images');
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const filterImages = useCallback(() => {
    let filtered = images;

    if (name) {
      filtered = filtered.filter(image =>
        image.imageName.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (year) {
      filtered = filtered.filter(image =>
        image.year.toString().includes(year)
      );
    }

    if (city) {
      filtered = filtered.filter(image =>
        image.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (date) {
      filtered = filtered.filter(image =>
        image.date.includes(date)
      );
    }

    setFilteredImages(filtered);
  }, [name, year, city, date, images]);

  useEffect(() => {
    filterImages();
  }, [name, year, city, date, images, filterImages]);

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-heading">
          <h1>GALLERY</h1>
          <div className='underline'></div>
        </div>
        
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Year" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="City" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
          <input 
            type="date" 
            placeholder="Date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>

        <div className="image-grid">
          {filteredImages.map((image) => (
            <div key={image._id} className="image-item">
              <img src={image.imageUrl} alt={image.imageName} />
              <div className="image-details" style={{display:'none'}}>
                <p><strong>Name:</strong> {image.imageName}</p>
                <p><strong>Date:</strong> {image.date}</p>
                <p><strong>Year:</strong> {image.year}</p>
                <p><strong>City:</strong> {image.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
