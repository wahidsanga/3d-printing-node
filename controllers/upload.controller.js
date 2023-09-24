// Import the StatusCodes object from the "http-status-codes" library
const { StatusCodes } = require("http-status-codes");

// Define the upload function to handle file uploads
const upload = async (req, res) => {
  // Retrieve the uploaded file from the request
  const file = req.file;
  
  // Extract the original file name
  const fileName = file.originalname;

  // Respond with an HTTP status code of OK (200) and a JSON object
  // containing the name of the uploaded file
  return res.status(StatusCodes.OK).json({ files: fileName });
};

// Export the upload function for use in other parts of the application
module.exports = { upload };
