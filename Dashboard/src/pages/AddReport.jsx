import React, { useState } from "react";
import axios from "axios";
import "./AddReport.css";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
const AddReport = () => {
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loader,setLoader]=useState()
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const backend_api = import.meta.env.VITE_BACKEND_API;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (file && thumbnail) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      const thumbnail_name = Date.now() + thumbnail.name;

      formData.append("pdf_title", title);
      formData.append("pdf_name", filename);
      formData.append("pdf", file);
      formData.append("thumbnail_name",thumbnail_name)
      formData.append("thumbnail",thumbnail)

      formData.forEach(e=>console.log(e)
      )
      try {
        const response = await axios.post(
          `${backend_api}/api/v7/report/upload-report`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // console.log(response);
        if (response.data.success) {
          // console.log('Success:', response.data);
         
          toast.success(response.data.message);
          navigate('/allReports') 
        }
      } catch (err) {
        toast.error(err.message);
        // console.log(err.message);
        // console.log((err.response.data.message))
      } finally {
        setFile("");
        setTitle("");
        setLoader(false)

      }
    }
  };

  return (
    <div className="addreport">
      <h1>Upload Your PDF Report</h1>
      <form onSubmit={onSubmit}>
        <div className="pdf-title">
          <label htmlFor="title">Report Title</label>
          <input
            type="
          text"
            id="title"
            className="report-title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="pdf">
          <label htmlFor="pdf">Select PDF file:</label>
          <input
            type="file"
            id="pdf"
            name="pdf"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <div className="pdf">
          <label htmlFor="thumbnail">Select Thumbnail:</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
            required
          />
          
        </div>


        <button type="submit">
        {loader ? (
                <div className="flex  p-[0.35rem] justify-center ">
                  <BeatLoader size={10} color="white" />
                </div>
              ) : (
                <div> Submit Report</div>
              )}
          
          
          </button>
      </form>
    </div>
  );
};

export default AddReport;
