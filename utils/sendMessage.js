const sendMessage = (statusCode, message, res) => {
  res.status(statusCode).json({ message });
};

module.exports = sendMessage;
