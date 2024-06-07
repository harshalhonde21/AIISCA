import "../Css/ParticularEvent.css"
import glimpse1 from "../../public/baba.png";

const ParticularEvent = () => {
  return (
    <div className="event-container">
      <h1 className="event-title">Free Education Bill for Children</h1>
      <div className="event-banner">
        <img src={glimpse1} alt="Event Banner" className="event-banner-image" />
      </div>
      <p className="event-description">
        Himenaeos rhoncus, class tincidunt malesuada odio arcu cubilia. Facilisi neque hendrerit donec erat ornare? Tellus sociosqu pretium hendrerit. Dis etiam quam mauris scelerisque diam eget felis sollicitudin euismod morbi interdum. Suscipit cubilia bibendum feugiat lacus amet vulputate donec torquent interdum cum nisi congue. Faucibus curae; curae, pretium cubilia. In dictumst sem duis conubia nisi. Diam vitae.
      </p>
      <h2 className="event-glimpses-title">Glimpses</h2>
      <div className="glimpses-grid">
        <img src={glimpse1} alt="Glimpse 1" className="glimpse-image" />
        <img src={glimpse1} alt="Glimpse 2" className="glimpse-image" />
        <img src={glimpse1} alt="Glimpse 3" className="glimpse-image" />
        <img src={glimpse1} alt="Glimpse 4" className="glimpse-image" />
      </div>
    </div>
  );
};

export default ParticularEvent;
