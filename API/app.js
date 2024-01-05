// app.js

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const emailRoutes = require('./routers/routers');
const connectDB = require("./DB/db")
const fileUpload = require ("express-fileupload");

app.use(cors()); // Agrega esta línea para permitir todas las solicitudes CORS
//conenccion con la base de datos 
connectDB();

app.use(express.json());
//guarda la imagen temporalmente 
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

app.get("/", (req, res) => {
  res.send("hola mundo");
});

// Corrige la ruta aquí
app.use('/', emailRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando http://localhost:${port}`);
});
