import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddBlogForm.css";
import toast from "react-hot-toast"


export default function AddBlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/v6/blog/add-blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTitle("");
      setAuthor("");
      setDate(new Date());
      setDescription("");
      setImage(null);

      console.log("Success:", response.data);
      toast.success("Blog added successfully");
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        if (error.response.status === 400) {
          toast.error("Bad Request: " + error.response.data.message);
        } else if (error.response.status === 500) {
          toast.error("Server Error: Please try again later");
        } else {
          toast.error("Error: " + error.response.data.message);
        }
      } else if (error.request) {
        console.error("Error:", error.request);
        toast.error("No response received from server");
      } else {
        console.error("Error:", error.message);
        toast.error("Error: " + error.message);
      }
    }
  };

  return (
    <div className="AddBlogForm__container">
      <form className="AddBlog__form" onSubmit={handleSubmit}>
        <h2 className="AddBlog__form__heading">Add Blog</h2>
        <label className="AddBlog__form__label" htmlFor="title">
          Title
        </label>
        <input
          className="AddBlog__form__input"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="author-date-container">
          <div>
            <label className="AddBlog__form__label" htmlFor="author">
              Author
            </label>
            <input
              className="AddBlog__form__input"
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="AddBlog__form__label" htmlFor="date">
              Date
            </label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="MMM dd yyyy"
              id="date"
              className="AddBlog__form__date-picker"
            />
          </div>
        </div>
        <label className="AddBlog__form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="AddBlog__form__textarea"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label className="AddBlog__form__label" htmlFor="image">
          Image
        </label>
        <input
          className="AddBlog__form__input"
          type="file"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <div className="AddBlog__form__button__container">
          <button className="AddBlog__form__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
