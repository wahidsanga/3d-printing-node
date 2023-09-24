// Import the custom error classes defined in separate files
const CustomAPIError = require("./custom-api"); // Import the base custom error class
const UnauthenticatedError = require("./unauthenticated"); // Import the unauthenticated error class
const UnauthorizedError = require("./unauthorized"); // Import the unauthorized error class
const NotFoundError = require("./not-found"); // Import the not found error class
const BadRequestError = require("./bad-request"); // Import the bad request error class

// Export an object containing all the custom error classes
module.exports = {
  CustomAPIError, // The base custom error class
  UnauthenticatedError, // Custom error class for unauthenticated access (e.g., missing or invalid authentication)
  NotFoundError, // Custom error class for resource not found (e.g., HTTP 404)
  BadRequestError, // Custom error class for bad request (e.g., invalid input data)
  UnauthorizedError, // Custom error class for unauthorized access (e.g., insufficient permissions)
};
