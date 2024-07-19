import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Loader from "../Components/Loader"; 
import "./EventContainer.css";


const backend_api = import.meta.env.VITE_BACKEND_API;

const EventContainer = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUpcomingEvent();
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

  const fetchUpcomingEvent = async () => {
    try {
      const response = await axios.get(`${backend_api}/api/v5/event/get-event`);
      const data = response.data;

      const currentTimestamp = new Date().getTime();
      const upcoming = data.find(event => new Date(event.date).getTime() > currentTimestamp);

      setUpcomingEvent(upcoming);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching the upcoming event:', error);
      setLoading(false);
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const handleReadMore = () => {
    navigate("/event"); 
  };

  return (
    <Fragment>
        {loading ? (
          <Loader /> 
        ) : upcomingEvent ? (
          <>
      <div className="child-event-containers">
            <div className="event-image-containers">
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
              <div className="event-description-containers">
                <h2>{upcomingEvent.title}</h2>
                <p>{truncateDescription(upcomingEvent.description, 50)}</p>
                <button 
                  onClick={() => handleReadMore()}
                  style={{padding:'10px', marginTop:'3rem', borderRadius:"15px", border:'1.5px solid #1e31d6', color:'#1e31d6', fontSize:'1.2rem', fontWeight:'700'}}
                >
                  Read More
                </button>
              </div>
            </div>
      </div>
          </>
        ) : (
          <p>No upcoming event</p>
        )}
    </Fragment>
  );
};

export default EventContainer;
