import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/Event.css';
import Footer from '../Components/Footer';
import Loader from "../Components/Loader"; 

const Events = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      const response = await axios.get('https://aiisca.onrender.com/api/v5/event/get-event');
      const data = response.data;

      const currentTimestamp = new Date().getTime();

      const upcoming = data.find(event => new Date(event.date).getTime() > currentTimestamp);
      const previous = data.filter(event => new Date(event.date).getTime() <= currentTimestamp);

      setUpcomingEvent(upcoming);
      setPreviousEvents(previous);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  const formatTime = value => (value < 10 ? `0${value}` : value);

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const handleReadMore = (event) => {
    navigate(`/event/${event._id}`, { state: { event } });
  };

  return (
    <>
      <div className="events-container">
        <h1>Upcoming Events</h1>
        {loading ? (
          <Loader /> 
        ) : upcomingEvent ? (
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
                <p>{truncateDescription(upcomingEvent.description, 30)}</p>
                <p><strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleDateString()}</p>
                <button onClick={() => handleReadMore(upcomingEvent)}>Read More</button>
              </div>
            </div>
          </div>
        ) : (
          <p>No upcoming events</p>
        )}

        <h1>Previous Events</h1>
        {loading ? (
          <Loader /> // Show loader in place of previous events grid
        ) : (
          <div className="previous-events-grid">
            {previousEvents.map(event => (
              <div key={event._id} className="previous-event event-item">
                <img src={event.imageUrl} alt={event.title} />
                <h2 style={{fontSize:'1rem'}}>{event.title}</h2>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <button onClick={() => handleReadMore(event)} style={{padding:'5px', marginTop:"10px", borderRadius:'10px', color:'#1e31d6', border:"1px solid #1e31d6"}}>Read More</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
