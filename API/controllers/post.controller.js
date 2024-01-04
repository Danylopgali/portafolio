const Proyecto =require( "../DB/models/proyectos");

const agregarPortadaController = (req,res) =>{


}

const agregarDescripcionController = (req,res) =>{
    

}

const agregarFotoDePerfilController = (req,res)=>{
    

}

const agregarProyectoController = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud
    const { name, descripcion, imagen, tecnologias, integrantes } = req.body;

    // Crear una nueva instancia del modelo Proyecto
    const nuevoProyecto = new Proyecto({
      name,
      descripcion,
      imagen,
      tecnologias,
      integrantes,
    });

    // Guardar el nuevo proyecto en la base de datos
    const proyectoGuardado = await nuevoProyecto.save();

    res.status(201).json(proyectoGuardado); // Devolver el proyecto recién creado
  } catch (error) {
    console.error('Error al agregar proyecto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const agregarProyectoFavoritoController = (req,res)=>{
    

}


module.exports = {
    agregarDescripcionController,
    agregarFotoDePerfilController,
    agregarPortadaController,
    agregarProyectoController,
    agregarProyectoFavoritoController
  };