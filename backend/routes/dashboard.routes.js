const express = require("express");

const routes = express.Router();

//* Controllers
const { allCards } = require("../controllers/dashboardController.js");

//* Middlewares
//! const authMiddleware = require("../middlewares/authMiddleware.js");

//* Get Cards
//! routes.get("/allCards",authMiddleware, allCards);

routes.get("/allCards", allCards);

module.exports = routes;
