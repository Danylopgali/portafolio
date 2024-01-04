const Proyecto = require('../DB/models/proyectos');

const obtenerProyectosController = async (req, res) => {
  try {
    // Obtener todos los proyectos de la base de datos
    const proyectos = await Proyecto.find();

    // Devolver los proyectos como respuesta
    res.json(proyectos);
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = obtenerProyectosController;
