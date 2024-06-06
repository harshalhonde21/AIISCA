import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddBlogForm.css";

export default function AddBlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      author,
      date,
      content,
    };

    // Replace this URL with your actual upload URL
    const uploadUrl = "https://example.com/upload";

    axios
      .post(uploadUrl, formData)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        <label className="AddBlog__form__label" htmlFor="content">
          Content
        </label>
        <textarea
          className="AddBlog__form__textarea"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
