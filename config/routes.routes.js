const express = require("express");

const setupRoutes = (app) => {
  const routesUsers = require("../routes/users.routes.js");
  const routesDashboard = require("../routes/dashboard.routes.js");
  const routesStudyResources = require("../routes/studyResources.routes.js");
  const adminPanel = require("../routes/adminPanel.routes.js");

  //* Rutas de API
  app.use("/api/users", routesUsers);
  app.use("/api/dashboard", routesDashboard);
  app.use("/api/studyResources", routesStudyResources);
  app.use("/api/admin", adminPanel);
};

module.exports = setupRoutes;
