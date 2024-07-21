const express = require("express");

// Crear el servidor de express
const app = express();

// Directorio público
app.use(express.static("public"));

// Rutas
// app.get("/", (req, res) => {
//   console.log("Ruta '/' ejecutada");
//   res.json({ hola: "mundo" });
// });

// Escuchar peticiones al servidor
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto:", 4000);
});
