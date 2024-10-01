const UserLoginMiddleware = (req, res, next) => {
  const { userName, password } = req.body;

  const sendError = require("../utils/sendMessage.js");

  if (!userName) return sendError(400, "Digita el nombre de Usuario", res);
  if (!password) return sendError(400, "Digita la contraseña", res);

  next();
};

module.exports = UserLoginMiddleware;
