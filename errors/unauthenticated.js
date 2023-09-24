// Import necessary modules and packages
const { StatusCodes } = require('http-status-codes'); // Import HTTP status codes
const CustomAPIError = require('./custom-api'); // Import the base custom error class

// Define a custom error class named UnauthenticatedError
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message); // Call the constructor of the base custom error class
    this.statusCode = StatusCodes.UNAUTHORIZED; // Set the HTTP status code for unauthenticated access (401)
  }
}

// Export the UnauthenticatedError class to make it available for use in other parts of the application.
module.exports = UnauthenticatedError;
