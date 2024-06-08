import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import "./AddEventForm.css"; // Assuming your CSS file is named AddEventForm.css and is in the same directory

const AddEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5500/api/v5/event/upload-event",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTitle("");
      setDescription("");
      setDate(new Date());
      setImage(null);

      console.log("Success:", response.data);
      toast.success("Event added successfully");
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
    <div className="AddEvent__form__container">
      <form className="AddEvent__form" onSubmit={handleSubmit}>
        <h2 className="AddEvent__form__heading">Add Event</h2>
        <label className="AddEvent__form__label" htmlFor="title">
          Title
        </label>
        <input
          className="AddEvent__form__input"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="AddEvent__form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="AddEvent__form__textarea"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label className="AddEvent__form__label" htmlFor="date">
          Date
        </label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          className="AddEvent__form__input"
          id="date"
          required
        />

        <label className="AddEvent__form__label" htmlFor="image">
          Image
        </label>
        <input
          className="AddEvent__form__input"
          type="file"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <div className="AddEvent__form__button__container">
          <button className="AddEvent__form__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
