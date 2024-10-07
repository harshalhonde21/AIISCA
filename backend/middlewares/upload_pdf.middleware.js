import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';


// Combined Cloudinary storage for PDFs and Thumbnails
const combinedStorage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req, file) => {
    const format = file.mimetype.split('/')[1]; // Extract file extension (e.g., png, jpg, pdf)
    const resourceType = file.mimetype === 'application/pdf' ? 'raw' : 'image'; // Differentiate between PDF and image

    return {
      folder: 'uploads', // Common folder for both PDFs and thumbnails
      public_id: file.originalname.split('.')[0], // File name without extension
      resource_type: resourceType, // 'raw' for PDFs, 'image' for thumbnails
      format: format, // Use the original file's format (e.g., pdf, png, jpg)
    };
  },
});

// Multer middleware for handling file uploads (both PDF and thumbnail)
const uploadFiles = multer({ storage: combinedStorage });
export default uploadFiles;





// // Set up Cloudinary storage for PDFs
// const pdfStorage = new CloudinaryStorage({
//   cloudinary: cloudinary.v2,
//   params: {
//     folder: 'reports', // Folder for PDF uploads
//     resource_type: 'raw', // Handle raw files such as PDFs
//   },
// });

// // Set up Cloudinary storage for thumbnails
// const thumbnailStorage = new CloudinaryStorage({
//   cloudinary: cloudinary.v2,
//   params: {
//     folder: 'thumbnails', // Folder for thumbnail uploads
//     resource_type: 'image', // Handle image files
//   },
// });

// // Create upload middleware for PDFs and thumbnails
// export const uploadPdf = multer({ storage: pdfStorage });
// export const uploadThumbnail = multer({ storage: thumbnailStorage });