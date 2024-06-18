import { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Blog.css";
import { useNavigate } from "react-router-dom";
import BlueLoader from "../Components/BlueLoader"
import Footer from "../Components/Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://aiisca.onrender.com/api/v6/blog/get-blogs")
      .then(response => {
        if (response.data.success) {
          setBlogs(response.data.blogs);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the blogs!", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the data is fetched
      });
  }, []);

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog._id}`, { state: { blog } });
  }

  return (
    <div className="blog-container">
      <h1 className="blog-headings">Featured Blogs</h1>
      <div className="all-blogs-container">
        {loading ? (
          <BlueLoader /> // Render BlueLoader while loading
        ) : (
          blogs.map(blog => (
            <div className="blog" key={blog._id}>
              <img src={blog.imageUrl} alt={blog.title} />
              <div className="text-blog">
                <div className="time-name">{blog.author} • {new Date(blog.date).toLocaleDateString()}</div>
                <div className="blog-heading">{blog.title}</div>
                <div className="blog-para">
                  {blog.description.split(" ").slice(0, 30).join(" ")}...
                </div>
                <button className="blog-button" onClick={() => handleReadMore(blog)}>Read More</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="footer-page-container">
          <Footer />
        </div>
    </div>
  );
};

export default Blog;
