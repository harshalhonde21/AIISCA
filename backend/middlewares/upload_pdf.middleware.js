import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';

// for adding the pdf in multer but not in the disk 
// const pdfstorage = multer({
//     storage:multer.diskStorage({}),
//     limits: { fileSize: 500000 }
//   });
  

// // Cloudinary storage configuration
// export const pdfStorage = new CloudinaryStorage({
//     cloudinary: cloudinary.v2,
//     params: {
//       folder: 'pdfs', // Folder name in Cloudinary
//       format: async (req, file) => 'pdf', // Ensure the format is PDF
//       public_id: (req, file) => file.originalname.split('.')[0], // File name without extension
//       resource_type: 'raw', // Specify the resource type as 'raw' for PDFs
//     },
//   });





// // Cloudinary storage for PDFs
// const pdfStorage = new CloudinaryStorage({
//   cloudinary: cloudinary.v2,
//   params: {
//     folder: 'pdfss', // Folder to store PDFs
//     resource_type: 'raw', // Raw resource for PDF files
//     format: async (req, file) => 'pdf', // Ensures the format is PDF
//     public_id: (req, file) => file.originalname.split('.')[0],
//   },
// });

// // Cloudinary storage for Thumbnails
// const thumbnailStorage = new CloudinaryStorage({
//   cloudinary: cloudinary.v2,
//   params: {
//     folder: 'thumbnails', // Folder to store thumbnails
//     resource_type: 'image', // Image resource for thumbnails
//     format: async (req, file) => file.mimetype.split('/')[1], // Use original format
//     public_id: (req, file) => file.originalname.split('.')[0],
//   },
// });



// export const uploadPdf = multer({ storage: pdfStorage });



// // Cloudinary storage for Thumbnails
// export const thumbnailStorage = new CloudinaryStorage({
//   cloudinary: cloudinary.v2,
//   params: async (req, file) => {
//     const format = file.mimetype.split('/')[1]; // Extract file extension (e.g., png, jpg, jpeg)
//     return {
//       folder: 'thumbnails', // Folder to store thumbnails
//       public_id: file.originalname.split('.')[0], // File name without extension
//       resource_type: 'image', // Specify image resource type
//       format: format, // Use the original file's format (png, jpg, etc.)
//     };
//   },
// });
// export const uploadThumbnail = multer({ storage: thumbnailStorage });


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