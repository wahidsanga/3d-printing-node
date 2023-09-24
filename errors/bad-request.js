// Import the HTTP status code constants and the custom base error class
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

// Define a custom error class for handling bad request errors
class BadRequestError extends CustomAPIError {
  constructor(message) {
    // Call the constructor of the parent CustomAPIError class with the provided error message
    super(message);
    
    // Set the HTTP status code for bad request (400)
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

// Export the BadRequestError class for use in other parts of the application
module.exports = BadRequestError;
