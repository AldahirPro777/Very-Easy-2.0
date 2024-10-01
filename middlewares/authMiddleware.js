const jwt = require("jsonwebtoken");

const sendMessage = require("../utils/sendMessage");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    sendMessage(401, "NO hay token, autorización denegada ", res);
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    sendMessage(401, "Token invalido, Error:" + err, res);
  }
};

module.exports = authMiddleware;
