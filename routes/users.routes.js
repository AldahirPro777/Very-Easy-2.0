const express = require("express");
const routes = express.Router();

const {
  login,
  registerUser,
  getDataUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController.js");

//* Middlewares
const UserRegisterMiddleware = require("../middlewares/UserRegisterMiddleware.js");
const UserLoginMiddleware = require("../middlewares/UserLoginMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

//* Login
routes.post("/login", UserLoginMiddleware, login);

//* Crear Usuario
routes.post("/register", UserRegisterMiddleware, registerUser);

//* Get User Data
routes.get("/getDataUser", authMiddleware, getDataUser);

//* Borrar Usuario
routes.delete("/deleteUser", authMiddleware, deleteUser);

//* Actualizar Usuario
routes.put("/updateUser", authMiddleware, updateUser);

module.exports = routes;
