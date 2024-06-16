import { useLocation } from 'react-router-dom';
import "../Css/ParticularEvent.css";  

const ParticularEvent = () => {
  const location = useLocation();
  const { event } = location.state;

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className="event-containers">
      <h1 className="event-title">{event.title}</h1>
      <div className="event-banner">
        <img src={event.imageUrl} alt={event.title} className="event-banner-image" />
      </div>
      <p className="event-description">{event.description}</p>
    </div>
  );
};

export default ParticularEvent;
