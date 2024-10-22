const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const setupRoutes = require("./config/routes.routes.js");
const connectDB = require("./config/db.js");
dotenv.config();

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

//* Rutas
setupRoutes(app);

//* Conexión a la base de datos
connectDB();

const PORT = process.env.PORT || 7516;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
