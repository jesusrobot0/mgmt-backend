const express = require("express");

// Configuración de las variables de entorno
require("dotenv").config();

// Crear el servidor de express
const app = express();

// Directorio público
app.use(express.static("public"));

// Escuchar peticiones al servidor
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto:", process.env.PORT);
});
