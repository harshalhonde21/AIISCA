import { Fragment } from "react";
import EventContainer from "../Components/EventContainer";
import AboutContainer from "../Components/AboutContainer";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <video autoPlay muted loop>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="event-container">
        <EventContainer />
      </div>
      <div className="about-container">
        <AboutContainer />
      </div>
    </Fragment>
  );
};

export default Home;
