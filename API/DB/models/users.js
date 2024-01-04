const mongoose = require('mongoose');

// Definir el esquema del usuario
const UsuarioSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    contraseña: {
      type: String,
      required: true,
    },
  });
  const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports= Usuario;