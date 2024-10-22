const express = require("express");

const routes = express.Router();

//* Controllers
const {
  getTasks,
  newTask,
  deleteTask,
} = require("../controllers/adminPanelController.js");

//Todos /api/admin

routes.get("/getTasks", getTasks);

routes.post("/postTask", newTask);

routes.delete("/deleteTask/:id", deleteTask);

module.exports = routes;
