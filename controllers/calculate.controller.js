const { StatusCodes } = require("http-status-codes");
const NodeStl = require("node-stl");
const path = require("path");

const calculateMass = async (req, res) => {
  const { name, density, file, volume } = req.body;
  let stl = new NodeStl(path.join(__dirname, "../uploads", `${file}`), {
    density: density,
  });

  console.log(path.join(__dirname, "../uploads", `${file}`));

  return res.status(StatusCodes.OK).json({ name, stl, volume });
};

module.exports = { calculateMass };
