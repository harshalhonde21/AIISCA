import Report from "../models/report.model.js";
import cloudinary from "../config/cloudinary.js";


// Upload report controller
export const uploadReport = async (req, res) => {
  try {
    const { pdf_title,desc } = req.body;
    const files = req.files;
    console.log(req.files, req.body, "skfdnksjsdkfjksjfdkjskdffk");

     // Extract PDF and thumbnail URLs from Cloudinary
    const pdfFile = req.files['pdf'][0]; // Access PDF file
    const thumbnailFile = req.files['thumbnail'][0]; // Access thumbnail file

    const pdfUrl = pdfFile.path; // Cloudinary URL for PDF
    const thumbnailUrl = thumbnailFile.path; // Cloudinary URL for Thumbnail

    // Create a new report document in the database
    const report = new Report({
      reportUrl: pdfUrl,
      reportTitle: pdf_title,
      thumbnailUrl: thumbnailUrl,
      desc:desc,
    });

    // Save the report in the database
    await report.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "PDF and Thumbnail uploaded and stored successfully.",
      data: report,
    });
  } catch (err) {
    // Send error response
    res.status(500).json({
      success: false,
      message: err.message,
    });
    // console.log("Error uploading report:", err.message);
  }
};


export const deleteReportById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the report by ID
    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    // Delete the report from the database
    await Report.findByIdAndDelete(id);

    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    // console.error('Error deleting report:', error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllreports = async (req, res) => {
  try {
    const allReports = await Report.find();
    res.status(200).json({
      success: true,
      allReports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
