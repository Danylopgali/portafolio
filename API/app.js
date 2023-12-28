// index.js

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const emailRoutes = require('./routers/routers');

app.use(cors()); // Agrega esta línea para permitir todas las solicitudes CORS
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

// Corrige la ruta aquí
app.use('/', emailRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando http://localhost:${port}`);
});
