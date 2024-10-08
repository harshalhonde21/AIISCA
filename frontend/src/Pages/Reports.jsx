import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Reports.css";
import { FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaDownload } from "react-icons/fa6";
const AllReports = () => {
  const [reports, setReports] = useState([]);
  const backend_api = import.meta.env.VITE_BACKEND_API;

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${backend_api}/api/v7/report/get-reports`);
        setReports(res.data.allReports);
        // console.log(res.data);
      } catch (err) {
        // console.error("Error fetching reports", err);
        toast.error("Error fetching reports", err);
      }
    };

    fetchReports();
  }, []);




  return (
    <div className="all-reports">
      <h1>All Reports</h1>
      <br />
      <div className="reports-gallery">
        {reports.length > 0 ? (
          reports.map((report) => (
            <div key={report._id} className="report-item">
              <div className="thumbnail">
                <img src={report.thumbnailUrl} alt="" width={200} />
              </div>
              <p>
                <b>Report Name : </b>
                {report.reportTitle}
              </p>
              <p>
                <b>Description : </b>
                {report.desc}
              </p>
              <p>
                <b>Date : </b>
                {report.createdAt.slice(0, 10)}
              </p>
              <div className="report-actions">
                <a
                  href={report.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  <FaRegEye /> 
                </a>
                <a href={report.reportUrl} download className="download-button">
                  <FaDownload />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No reports found.</p>
        )}
      </div>
    </div>
  );
};

export default AllReports;
