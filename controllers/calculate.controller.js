const { StatusCodes } = require("http-status-codes");
const NodeStl = require("node-stl");
const path = require("path");

const calculateMass = async (req, res) => {
  const { name, quantity, file } = req.body;
  let stl = new NodeStl(path.join(__dirname, "../uploads", `${file}`), {
    density: 1.015,
  });

  console.log(path.join(__dirname, "../uploads", `${file}`));

  return res.status(StatusCodes.OK).json({ name, quantity, stl });
};

module.exports = { calculateMass };
