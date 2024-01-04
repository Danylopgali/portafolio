const jwt = require('jsonwebtoken');

// Supongamos que tienes un modelo de usuario en tu base de datos
const Usuario = require('../DB/models/users');

const authController = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Verificar si el usuario existe en la base de datos
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    // Verificar la contraseña
    const contraseñaValida = await usuario.compararContraseña(contraseña);

    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    // Crear el token JWT
    const token = jwt.sign({ usuarioId: usuario._id }, 'secreto', { expiresIn: '1h' });

    // Devolver el token como respuesta
    res.json({ token });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = authController;
