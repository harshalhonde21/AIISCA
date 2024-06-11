import { useEffect, useState } from 'react';
import axios from 'axios';
import "./AllBlogs.css";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null);
  const [editBlogData, setEditBlogData] = useState({
    title: '',
    author: '',
    date: '',
    description: '',
    image: null
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/v6/blog/get-blogs');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleEditClick = (blog) => {
    setEditBlogId(blog._id);
    setEditBlogData({
      title: blog.title,
      author: blog.author,
      date: new Date(blog.date).toISOString().substr(0, 10),
      description: blog.description,
      image: null 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditBlogData({
      ...editBlogData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setEditBlogData({
      ...editBlogData,
      image: e.target.files[0]
    });
  };

  const handleSaveClick = async (id) => {
    const formData = new FormData();
    formData.append('title', editBlogData.title);
    formData.append('author', editBlogData.author);
    formData.append('date', editBlogData.date);
    formData.append('description', editBlogData.description);
    if (editBlogData.image) {
      formData.append('image', editBlogData.image);
    }

    try {
      await axios.put(`http://localhost:5500/api/v6/blog/update-blog/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setBlogs(blogs.map(blog => blog._id === id ? { ...blog, ...editBlogData } : blog));
      setEditBlogId(null);
      alert("Blog updated successfully");
    } catch (error) {
      alert('Error updating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/v6/blog/delete-blog/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      alert("Blog deleted successfully");
    } catch (error) {
      alert('Error deleting blog:', error);
    }
  };

  return (
    <div className="table-container">
      <h2>All Blogs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog._id}>
              {editBlogId === blog._id ? (
                <>
                  <td><input name="title" value={editBlogData.title} onChange={handleInputChange} /></td>
                  <td><input name="author" value={editBlogData.author} onChange={handleInputChange} /></td>
                  <td><input type="date" name="date" value={editBlogData.date} onChange={handleInputChange} /></td>
                  <td><input name="description" value={editBlogData.description} onChange={handleInputChange} /></td>
                  <td>
                    <input type="file" name="image" onChange={handleFileChange} />
                    <button className="save" onClick={() => handleSaveClick(blog._id)}>Save</button>
                    <button className="cancel" onClick={() => setEditBlogId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{new Date(blog.date).toLocaleDateString()}</td>
                  <td>{blog.description}</td>
                  <td>
                    <button className="edit" onClick={() => handleEditClick(blog)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(blog._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
