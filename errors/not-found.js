// Import necessary modules and packages
const { StatusCodes } = require('http-status-codes'); // Import HTTP status codes
const CustomAPIError = require('./custom-api'); // Import the base custom error class

// Define a custom error class named NotFoundError
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message); // Call the constructor of the base custom error class
    this.statusCode = StatusCodes.NOT_FOUND; // Set the HTTP status code for resource not found (404)
  }
}

// Export the NotFoundError class to make it available for use in other parts of the application.
module.exports = NotFoundError;
