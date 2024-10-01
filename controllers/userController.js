const User = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sendMessage = require("../utils/sendMessage.js");
const sendMessageErrorServer = require("../utils/sendMessageErrorServer.js");

//* Login
exports.login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return sendMessage(400, "Usuario No Encontrado", res);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return sendMessage(400, "Contraseña Incorrecta", res);
    }

    const payload = {
      user: {
        id: user._id,
        userName,
      },
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(201).json({ message: "Inicio de seción EXITOSO", token });
  } catch (err) {
    return sendMessageErrorServer(res, err);
  }
};

//* Crear Usuario
exports.registerUser = async (req, res) => {
  try {
    const { name, userName, password, genero } = req.body;

    const existingUser = await User.findOne({ userName });

    if (existingUser) {
      return sendMessage(409, "Este usuario YA está en uso", res);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      userName,
      password: hashedPassword,
      genero,
    });

    await newUser.save();

    return sendMessage(201, "Proceso Exitoso", res);
  } catch (err) {
    console.error(err);
    return sendMessageErrorServer(res, err);
  }
};

//* Get datos del usuario
exports.getDataUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return sendMessage(404, "Usuario no encontrado", res);
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    return sendMessageErrorServer(res, err);
  }
};

//* Borrar Usuario
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const existingUser = await User.findById(id);

    if (!existingUser) {
      return sendMessage(409, "Usuario NO Encontrado ", res);
    }

    await User.findByIdAndDelete(id);

    return sendMessage(201, "Operación Exitosa", res);
  } catch (err) {
    return sendMessageErrorServer(res, err);
  }
};

//* Actualizar Usuario
exports.updateUser = async (req, res) => {
  res.send("Update");
};
