const express = require("express");

const routes = express.Router();

//* Controllers
const { getResources } = require("../controllers/studyResourcesController.js");

routes.get("/getResources", getResources);

module.exports = routes;
