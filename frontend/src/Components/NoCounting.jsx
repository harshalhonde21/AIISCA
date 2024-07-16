import React, { useEffect, useState, Fragment } from 'react';
import { HiMiniUsers } from "react-icons/hi2";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import CountUp from 'react-countup';
import axios from 'axios';
import "./NoCouting.css";

const NoCounting = () => {
  const [eventCount, setEventCount] = useState(0);
  const [photoCount, setPhotoCount] = useState(0);

  useEffect(() => {
    fetchEventCount();
    fetchPhotoCount();
  }, []);

  const fetchEventCount = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v5/event/get-event`);
      if (response.data) {
        setEventCount(response.data.length);
      }
    } catch (error) {
      console.error("There was an error fetching the event count!", error);
    }
  };

  const fetchPhotoCount = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v4/gallery/get-images`);
      if (response.data.success) {
        setPhotoCount(response.data.images.length); 
      }
    } catch (error) {
      console.error("There was an error fetching the photo count!", error);
    }
  };

  return (
    <Fragment>
      <div className="counting-container">
        <div className="count-sub-container">
          <div className="react-icons"><HiMiniUsers /></div>
          <div className="name-count">Members</div>
          <div className="count-number">
            <CountUp start={0} end={200} duration={2.5} separator="," />+
          </div>
        </div>
        <div className="count-sub-container">
          <div className="react-icons"><MdOutlineInsertPhoto /></div>
          <div className="name-count">Photos</div>
          <div className="count-number">
            <CountUp start={0} end={photoCount} duration={2.5} separator="," />+
          </div>
        </div>
        <div className="count-sub-container">
          <div className="react-icons"><BsCalendar4Event /></div>
          <div className="name-count">Events</div>
          <div className="count-number">
            <CountUp start={0} end={eventCount} duration={2.5} />+
          </div>
        </div>
        <div className="count-sub-container">
          <div className="react-icons"><LiaAwardSolid /></div>
          <div className="name-count">Awards</div>
          <div className="count-number">
            <CountUp start={0} end={1} duration={2.5} />+
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NoCounting;
