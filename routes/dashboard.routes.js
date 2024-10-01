const express = require("express");

const routes = express.Router();

//* Controllers
const { allCards } = require("../controllers/dashboardController.js");

routes.get("/allCards", allCards);

module.exports = routes;
