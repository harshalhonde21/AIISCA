import React, { useEffect, useState } from 'react';
import axios from 'axios';


const backend_api = import.meta.env.VITE_BACKEND_API

const AllImages = () => {
  const [images, setImages] = useState([]);
  const [editImageId, setEditImageId] = useState(null);
  const [editImageData, setEditImageData] = useState({
    imageName: '',
    date: '',
    year: '',
    city: '',
    image: null // To handle image file
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${backend_api}/api/v4/gallery/get-images`);
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleEditClick = (image) => {
    setEditImageId(image._id);
    setEditImageData({
      imageName: image.imageName,
      date: new Date(image.date).toISOString().substr(0, 10),
      year: image.year,
      city: image.city,
      image: null // Initial value for the file input
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditImageData({
      ...editImageData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setEditImageData({
      ...editImageData,
      image: e.target.files[0]
    });
  };

  const handleSaveClick = async (id) => {
    const formData = new FormData();
    formData.append('imageName', editImageData.imageName);
    formData.append('date', editImageData.date);
    formData.append('year', editImageData.year);
    formData.append('city', editImageData.city);
    if (editImageData.image) {
      formData.append('image', editImageData.image);
    }

    try {
      await axios.put(`${backend_api}/api/v4/gallery/update-image/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImages(images.map(image => image._id === id ? { ...image, ...editImageData } : image));
      setEditImageId(null);
      fetchImages();
      alert('Image updated successfully');
    } catch (error) {
      alert('Error updating image:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backend_api}/api/v4/gallery/delete-image/${id}`);
      setImages(images.filter(image => image._id !== id));
      alert('Image deleted successfully');
    } catch (error) {
      alert('Error deleting image:', error);
    }
  };

  return (
    <div className="table-container">
      <h2>All Images</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Date</th>
            <th>Year</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map(image => (
            <tr key={image._id}>
              {editImageId === image._id ? (
                <>
                  <td>
                    {editImageData.image ? (
                      <img src={URL.createObjectURL(editImageData.image)} alt={editImageData.imageName} width="100" />
                    ) : (
                      <img src={image.imageUrl} alt={image.imageName} width="100" />
                    )}
                    <input type="file" name="image" onChange={handleFileChange} />
                  </td>
                  <td><input name="imageName" value={editImageData.imageName} onChange={handleInputChange} /></td>
                  <td><input type="date" name="date" value={editImageData.date} onChange={handleInputChange} /></td>
                  <td><input name="year" value={editImageData.year} onChange={handleInputChange} /></td>
                  <td><input name="city" value={editImageData.city} onChange={handleInputChange} /></td>
                  <td>
                    <button className="save" onClick={() => handleSaveClick(image._id)}>Save</button>
                    <button className="cancel" onClick={() => setEditImageId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td><img src={image.imageUrl} alt={image.imageName} width="100" /></td>
                  <td>{image.imageName}</td>
                  <td>{new Date(image.date).toLocaleDateString()}</td>
                  <td>{image.year}</td>
                  <td>{image.city}</td>
                  <td>
                    <button className="edit" onClick={() => handleEditClick(image)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(image._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllImages;
