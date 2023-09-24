// Import necessary modules and packages
const express = require("express"); // Import the Express framework
const { verify } = require("../controllers/verify.controller"); // Import the verify controller function
const router = express.Router(); // Create a new router using Express

// Define a route for HTTP POST requests to the root URL path ("/")
router.route("/").post(verify);
// This sets up a route handler for HTTP POST requests to the root URL path ("/").
// When a POST request is received at this path, it will invoke the "verify" controller function.

// Export the router object to make it available for use in other parts of the application.
module.exports = router;
