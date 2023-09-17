const { StatusCodes } = require("http-status-codes");
const axios = require("axios");

const verify = async (req, res) => {
  const { token } = req.body;

  const result = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LeDCw8oAAAAALTdtojWbMCGAX--waUUbqBpdzLz&response=${token}`
  );

  if (!result.data.success) {
    return res.status(StatusCodes.FORBIDDEN).json({ status: false });
  }

  return res.status(StatusCodes.OK).json({ status: true });
};

module.exports = { verify };
