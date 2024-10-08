// routes/gallery.route.js
import express from "express";
import {
  deleteReportById,
  getAllreports,
  uploadReport,
} from "../controllers/report.controller.js";
import uploadFiles from "../middlewares/upload_pdf.middleware.js";
// import {uploadPdf,uploadThumbnail} from "../middlewares/upload_pdf.middleware.js";

const router = express.Router();

// router.post("/upload-report", 
//   // combinedStorage.single("pdf"),
//   uploadPdf.single("pdf"),
//   uploadThumbnail.single("thumbnail"),
//   // combinedStorage.fields([
//   //   { name: "pdf", maxCount: 1 },         // Handle PDF upload
//   //   { name: "thumbnail", maxCount: 1 },   // Handle Thumbnail upload
//   // ]),
//    uploadReport);
// router.get("/get-reports", getAllreports);






router.post("/upload-report", 
// uploadFiles.single("thumbnail"),
uploadFiles.fields([
    { name: "pdf", maxCount: 1 },         // Handle PDF upload
    { name: "thumbnail", maxCount: 1 },   // Handle Thumbnail upload
  ]),
   uploadReport);
router.get("/get-reports", getAllreports);






router.delete("/delete-report/:id", deleteReportById);

export default router;
