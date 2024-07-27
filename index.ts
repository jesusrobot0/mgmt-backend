import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { router as authRouter } from "./routes/auth";
import { dbConnection } from "./database/config";

// Carga los tipos
import "./types/express";

// Configuración de las variables de entorno
config();

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Habilitar el CORS
app.use(cors());

// Directorio público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", authRouter);
// TODO: CRUD - Eventos

// Escuchar peticiones al servidor
app.listen(process.env.PORT, () => {
  console.log("🌎 Servidor corriendo en el puerto:", process.env.PORT);
});
