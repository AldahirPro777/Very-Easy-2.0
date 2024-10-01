const sendMessageErrorServer = (res, err) => {
  res.status(501).json({ message: "Error Del Servidor", err });
};

module.exports = sendMessageErrorServer;
