// Import required modules and libraries
const { StatusCodes } = require("http-status-codes");
const NodeStl = require("node-stl");
const path = require("path");

// Define the calculateMass function to handle the mass calculation
const calculateMass = async (req, res) => {
  // Destructure values from the request body
  const { name, density, file, volume } = req.body;

  // Create a new NodeStl instance with the specified STL file and density
  let stl = new NodeStl(path.join(__dirname, "../uploads", `${file}`), {
    density: density,
  });

  // Log the path to the uploaded STL file
  console.log(path.join(__dirname, "../uploads", `${file}`));

  // Respond with an HTTP status code of OK (200) and a JSON object
  // containing the name, stl object, and volume
  return res.status(StatusCodes.OK).json({ name, stl, volume });
};

// Export the calculateMass function for use in other parts of the application
module.exports = { calculateMass };
