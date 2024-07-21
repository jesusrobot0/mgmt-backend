import express from "express";
import { config } from "dotenv";

import { router as authRouter } from "./routes/auth.js";

// Configuración de las variables de entorno
config();

// Crear el servidor de express
const app = express();

// Directorio público
app.use(express.static("public"));

// Rutas
app.use("/api/auth", authRouter);
// TODO: CRUD - Eventos

// Escuchar peticiones al servidor
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto:", process.env.PORT);
});
