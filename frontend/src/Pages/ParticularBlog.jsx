import { useLocation } from 'react-router-dom';
import "../Css/ParticularBlog.css";


const ParticularBlog = () => {
  const location = useLocation();
  const { blog } = location.state;

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-cover">
        <img src={blog.imageUrl} alt={blog.title} className="blog-cover-image" />
      </div>
      <div className="sub-title">
        <h3 className="author-name">{blog.author}</h3>
        <h3 className="publish-date">{new Date(blog.date).toLocaleDateString()}</h3>
      </div>
      <p className="blog-description">{blog.description}</p>
      
    </div>
  );
};

export default ParticularBlog;
