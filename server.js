const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const routesUsers = require("./routes/users.routes.js");
const routesDashboard = require("./routes/dashboard.routes.js");
const routesStudyResources = require("./routes/studyResources.routes.js");

const connectDB = require("./config/db.js");

const app = express();

//* Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

//* Rutas
app.use("/api/users", routesUsers);
app.use("/api/dashboard", routesDashboard);
app.use("/api/studyResources", routesStudyResources);

//* Conexión a la base de datos
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
