// Import necessary modules and packages
const express = require("express"); // Import the Express framework
const router = express.Router(); // Create a new router using Express
const multer = require("multer"); // Import multer for handling file uploads
const path = require("path"); // Import the path module for file path manipulation

const { upload } = require("../controllers/upload.controller"); // Import the upload controller function

// Define a file filter function for multer
const fileFilter = (req, file, cb) => {
  // Get the file extension from the original filename
  const extname = path.extname(file.originalname);

  console.log(extname); // Log the file extension to the console

  // Check if the file extension is ".stl" (case-insensitive)
  if (extname.toLowerCase() === ".stl") {
    return cb(null, true); // Accept the file
  }

  // If the file extension is not ".stl", return an error
  cb(new Error("File must have a .stl extension"));
};

// Configure multer storage and limits for single file upload
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"), // Define the destination directory for uploaded files
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Define the filename for the uploaded file
  },
});

// Initialize multer middleware with the configured storage and file filter
const uploadMiddleware = multer({
  storage: storage, // Specify the storage configuration
  fileFilter: fileFilter, // Specify the file filter function
});

// Use the upload middleware for the POST route
router.route("/").post(uploadMiddleware.single("file"), upload);
// Set up a route handler for the root URL path ("/") with an HTTP POST method.
// This handler uses the upload middleware to process file uploads with the field name "file".

// Export the router object to make it available for use in other parts of the application.
module.exports = router;
