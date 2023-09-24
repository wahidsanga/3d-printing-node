// Import the necessary modules and packages
const express = require("express"); // Import the Express framework
const router = express.Router(); // Create a new router using Express

// Import the controller function for calculating mass
const { calculateMass } = require("../controllers/calculate.controller");

// Define a route that listens for HTTP POST requests at the root endpoint ("/").
// When a POST request is received at this endpoint, it will invoke the "calculateMass" controller function.
router.route("/").post(calculateMass);

// Export the router object to make it available for use in other parts of the application.
module.exports = router;
