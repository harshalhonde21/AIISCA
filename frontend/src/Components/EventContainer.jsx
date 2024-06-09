import { Fragment } from 'react';
import "./EventContainer.css";

const EventContainer = () => {
  const calculateRemainingTime = () => {
    const remainingTime = {
      days: 5,
      hours: 3,
      minutes: 42,
      seconds: 18
    };
    return remainingTime;
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const remainingTime = calculateRemainingTime();

  return (
    <Fragment>
      <div className="child-event-containers">
        <div className="event-image-containers">
          <img src="/baba.png" alt="" />
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
            <h2>We are going to arrange a get together!</h2>
            <p>
            AIISCA is an autonomous Dalit movement organization founded on 16 July 2023 . We firmly believe in creating an independent cadre-based movement and nurturing leadership at both the grassroots and national levels. 
            </p>
            <button style={{padding:'10px', marginTop:'3rem', borderRadius:"15px", border:'1.5px solid #1e31d6', color:'#1e31d6', fontSize:'1.2rem', fontWeight:'700'}}>Join With Us</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventContainer;
