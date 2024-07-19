import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import "./AllEvents.css";


const backend_api = import.meta.env.VITE_BACKEND_API

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);
  const [editEventData, setEditEventData] = useState({
    title: '',
    description: '',
    date: '',
    image: null
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${backend_api}/api/v5/event/get-event`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEditClick = (event) => {
    setEditEventId(event._id);
    setEditEventData({
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString().substr(0, 10),
      image: null // Reset image field on edit click
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditEventData({
      ...editEventData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setEditEventData({
      ...editEventData,
      image: e.target.files[0]
    });
  };

  const handleSaveClick = async (id) => {
    const formData = new FormData();
    formData.append('title', editEventData.title);
    formData.append('description', editEventData.description);
    formData.append('date', editEventData.date);
    if (editEventData.image) {
      formData.append('image', editEventData.image);
    }

    try {
      await axios.put(`${backend_api}/api/v5/event/update-event/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setEvents(events.map(event => event._id === id ? { ...event, ...editEventData } : event));
      setEditEventId(null);
      alert("Event updated successfully");
    } catch (error) { 
      alert('Error updating event:', error.message);
    } 
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backend_api}/api/v5/event/delete-event/${id}`);
      setEvents(events.filter(event => event._id !== id));
      alert("Event deleted successfully");
    } catch (error) {
      alert('Error deleting event:', error);
    }
  };

  return (
    <div className="table-container">
      <h2>All Events</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id}>
              {editEventId === event._id ? (
                <>
                  <td><input name="title" value={editEventData.title} onChange={handleInputChange} /></td>
                  <td><input name="description" value={editEventData.description} onChange={handleInputChange} /></td>
                  <td><input type="date" name="date" value={editEventData.date} onChange={handleInputChange} /></td>
                  <td>
                    <input type="file" name="image" onChange={handleFileChange} />
                    <button className="save" onClick={() => handleSaveClick(event._id)}>Save</button>
                    <button className="cancel" onClick={() => setEditEventId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{event.title}</td>
                  <td>{event.description}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                  <td>
                    <button className="edit" onClick={() => handleEditClick(event)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(event._id)}>Delete</button>
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

export default AllEvents;
