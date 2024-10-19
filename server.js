const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const routesUsers = require("./routes/users.routes.js");
const routesDashboard = require("./routes/dashboard.routes.js");
const routesStudyResources = require("./routes/studyResources.routes.js");

const connectDB = require("./config/db.js");

const app = express();

const originVar = process.env.FRONTEND_URL || process.env.FRONTEND_URL_DEV;

//* Middlewares
app.use(
  cors({
    origin: originVar,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Rutas de API
app.use("/api/users", routesUsers);
app.use("/api/dashboard", routesDashboard);
app.use("/api/studyResources", routesStudyResources);

//* Conexión a la base de datos
connectDB();

const PORT = process.env.PORT || 7516;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
