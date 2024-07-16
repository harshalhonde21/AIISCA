import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BlueLoader from "../Components/BlueLoader";
import "./BlogContainer.css";

const BlogContainer = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v6/blog/get-blogs`)
      .then(response => {
        if (response.data.success) {
          setEvents(response.data.blogs.slice(0, 2)); // Limit to only two events
        }
      })
      .catch(error => {
        console.error("There was an error fetching the blogs!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleReadMore = () => {
    navigate("/blog");
  };

  return (
    <Fragment>
      <div className="blog-outer-container">
        <div className="heading-blog-container">
          ALL BLOG POSTS
        </div>
        <div className="all-blogs-container">
          {loading ? (
            <BlueLoader /> // Render BlueLoader while loading
          ) : (
            events.map(event => (
              <div className="blog" key={event._id}>
              <div className="image-cover-container">
                <img src={event.imageUrl} alt={event.title} /></div>
                <div className="text-blog">
                  <div className="time-name">{event.author} • {new Date(event.date).toLocaleDateString()}</div>
                  <div className="blog-heading">{event.title}</div>
                  <div className="blog-para">
                    {event.description.split(" ").slice(0, 30).join(" ")}...
                  </div>
                  <button className="blog-button" onClick={() => handleReadMore()}>Read More</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogContainer;
