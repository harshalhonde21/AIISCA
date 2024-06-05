import React, { useState, useEffect } from 'react';
import '../Css/Event.css';
import Footer from '../Components/Footer';
const Events = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [previousEvents, setPreviousEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/events');
      const data = await response.json();

      const currentTimestamp = new Date().getTime();

      const upcoming = data.find(event => new Date(event.date).getTime() > currentTimestamp);
      const previous = data.filter(event => new Date(event.date).getTime() <= currentTimestamp);

      setUpcomingEvent(upcoming);
      setPreviousEvents(previous);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <>
    <div className="events-container">
      <h1>Upcoming Events</h1>
      {upcomingEvent ? (
        <div className="upcoming-event event-item">
          <img src={upcomingEvent.imageUrl} alt={upcomingEvent.title} />
          <h2>{upcomingEvent.title}</h2>
          <p>{upcomingEvent.description}</p>
          <p><strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {new Date(upcomingEvent.date).toLocaleTimeString()}</p>
        </div>
      ) : (
        <p>No upcoming events</p>
      )}
      
      <h1>Previous Events</h1>
      <div className="previous-events-grid">
        {previousEvents.map(event => (
          <div key={event.id} className="previous-event event-item">
            <img src={event.imageUrl} alt={event.title} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Events;
