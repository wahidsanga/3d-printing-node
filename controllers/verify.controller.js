// Import the StatusCodes object from the "http-status-codes" library
const { StatusCodes } = require("http-status-codes");

// Import the Axios library for making HTTP requests
const axios = require("axios");

// Define the verify function to handle reCAPTCHA verification
const verify = async (req, res) => {
  // Extract the reCAPTCHA token from the request body
  const { token } = req.body;

  // Send a POST request to Google's reCAPTCHA verification endpoint
  const result = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LeDCw8oAAAAALTdtojWbMCGAX--waUUbqBpdzLz&response=${token}`
  );

  // Check if the reCAPTCHA verification was successful
  if (!result.data.success) {
    // If verification fails, respond with a FORBIDDEN (403) status code
    // and a JSON object indicating a failed status
    return res.status(StatusCodes.FORBIDDEN).json({ status: false });
  }

  // If verification succeeds, respond with an OK (200) status code
  // and a JSON object indicating a successful status
  return res.status(StatusCodes.OK).json({ status: true });
};

// Export the verify function for use in other parts of the application
module.exports = { verify };
