import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Event.css';
import Footer from '../Components/Footer';

const Events = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (upcomingEvent) {
      const interval = setInterval(() => {
        const eventTime = new Date(upcomingEvent.date).getTime();
        const currentTime = new Date().getTime();
        const diff = eventTime - currentTime;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });

        if (diff < 0) {
          clearInterval(interval);
          setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [upcomingEvent]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/v5/event/get-event');
      const data = response.data;

      const currentTimestamp = new Date().getTime();

      const upcoming = data.find(event => new Date(event.date).getTime() > currentTimestamp);
      const previous = data.filter(event => new Date(event.date).getTime() <= currentTimestamp);

      setUpcomingEvent(upcoming);
      setPreviousEvents(previous);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const formatTime = value => (value < 10 ? `0${value}` : value);

  return (
    <>
      <div className="events-container">
        <h1>Upcoming Events</h1>
        {upcomingEvent ? (
            <div className="child-event-container">
              <div className="event-image-container">
                <img src={upcomingEvent.imageUrl} alt={upcomingEvent.title} />
              </div>
              <div className="event-info-container">
                <div className="event-info-time-container">
                  <div className="time-box">
                    <span className="time-label">Days</span>
                    <span className="time-value">{formatTime(remainingTime.days)}</span>
                  </div>
                  <div className="time-box">
                    <span className="time-label">Hours</span>
                    <span className="time-value">{formatTime(remainingTime.hours)}</span>
                  </div>
                  <div className="time-box">
                    <span className="time-label">Minutes</span>
                    <span className="time-value">{formatTime(remainingTime.minutes)}</span>
                  </div>
                  <div className="time-box">
                    <span className="time-label">Seconds</span>
                    <span className="time-value">{formatTime(remainingTime.seconds)}</span>
                  </div>
                </div>
                <div className="event-description-container">
                  <h2>{upcomingEvent.title}</h2>
                  <p>{upcomingEvent.description}</p>
                  <p><strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleDateString()}</p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          
        ) : (
          <p>No upcoming events</p>
        )}
        
        <h1>Previous Events</h1>
        <div className="previous-events-grid">
          {previousEvents.map(event => (
            <div key={event._id} className="previous-event event-item">
              <img src={event.imageUrl} alt={event.title} />
              <h2>{event.title}</h2>
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
