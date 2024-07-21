import express from "express";
import { config } from "dotenv";

// Configuración de las variables de entorno
config();

// Crear el servidor de express
const app = express();

// Directorio público
app.use(express.static("public"));

// Rutas
// TODO: auth - crear, login, renew
// TODO: CRUD - Eventos

// Escuchar peticiones al servidor
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto:", process.env.PORT);
});
