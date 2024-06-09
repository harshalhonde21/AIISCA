import { useLocation } from 'react-router-dom';
import "../Css/ParticularEvent.css";
import glimpse1 from "/baba.png";

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
      <h2 className="event-glimpses-title">Glimpses</h2>
      <div className="glimpses-grids">
        <img src={glimpse1} alt="Glimpse 1" className="glimpse-image" />
        <img src={glimpse1} alt="Glimpse 2" className="glimpse-image" />
        <img src={glimpse1} alt="Glimpse 3" className="glimpse-image" />
      </div>
    </div>
  );
};

export default ParticularEvent;
