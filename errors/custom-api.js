// Define a custom base error class for handling API-related errors
class CustomAPIError extends Error {
  constructor(message) {
    // Call the constructor of the parent Error class with the provided error message
    super(message);
  }
}

// Export the CustomAPIError class for use in other parts of the application
module.exports = CustomAPIError;
