const UserRegisterMiddleware = (req, res, next) => {
  const { name, userName, password, password2, genero } = req.body;
  const sendError = require("../utils/sendMessage.js");

  if (!name) return sendError(400, "Ingresa tu nombre", res);
  if (!userName) return sendError(400, "Ingresa tu nombre de usuario", res);
  if (!password) return sendError(400, "Ingresa la contraseña", res);
  if (genero === null) return sendError(400, "Selecciona tu genero", res);

  if (name.length > 50) return sendError(422, "Nombre Demasiado Largo", res);
  if (name.length <= 3) return sendError(422, "Nombre Demasiado Corto", res);
  if (userName.length > 20)
    return sendError(422, "Nombre de usuario Demasiado Largo", res);
  if (userName.length <= 3)
    return sendError(422, "Nombre de usuario Demasiado Corto", res);
  if (password.length <= 6 || password2.length <= 6)
    return sendError(422, "Contraseña Demasiado Corta", res);
  if (password.length > 20 || password2.length > 20)
    return sendError(422, "Contraseña Demasiado Larga", res);
  if (password !== password2)
    return sendError(422, "La contraseña NO coincide", res);

  next();
};

module.exports = UserRegisterMiddleware;
