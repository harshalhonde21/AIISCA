import { useState, useEffect, useCallback } from 'react';
import '../Css/Gallery.css';
import Footer from '../Components/Footer';
import BlueLoader from '../Components/BlueLoader'; // Import the BlueLoader component

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/v4/gallery/get-images`);
      const data = await response.json();
      setImages(data.images);

      // Extract unique city names
      const uniqueCities = [...new Set(data.images.map(image => image.city.toLowerCase()))];
      setCities(uniqueCities);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
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

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

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
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {getYears().map((yearValue, index) => (
              <option key={index} value={yearValue}>{yearValue}</option>
            ))}
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((cityName, index) => (
              <option key={index} value={cityName}>{cityName}</option>
            ))}
          </select>
          <input 
            type="date" 
            placeholder="Date" 
            value={date} 
            min="0001-01-01"
            max="9999-12-31"
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>

        {loading ? (
          <BlueLoader />
        ) : (
          <div className="image-grid">
            {filteredImages.map((image) => (
              <div key={image._id} className="image-item">
                <img src={image.imageUrl} alt={image.imageName} />
                <div className="image-details" style={{ display: 'none' }}>
                  <p><strong>Name:</strong> {image.imageName}</p>
                  <p><strong>Date:</strong> {image.date}</p>
                  <p><strong>Year:</strong> {image.year}</p>
                  <p><strong>City:</strong> {image.city}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
