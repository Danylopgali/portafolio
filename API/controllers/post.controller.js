const Proyecto =require( "../DB/models/proyectos");
const cloudinary = require("../cloudinary/cloudinary")

const agregarPortadaController = async(req,res) =>{

  try {
    
    
  } catch (error) {
    
  }


}

const agregarDescripcionController = (req,res) =>{
    

}

const agregarFotoDePerfilController = (req,res)=>{
    

}

const agregarProyectoController = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud
    const { name, descripcion, imagen, tecnologias, integrantes } = req.body;


    let imageUrl;
    if (req.files && req.files.imagen) {
      const imagen = req.files.imagen;

      // Subir la imagen a Cloudinary
      const result = await cloudinary.uploader.upload(imagen.tempFilePath);
      imageUrl = result.secure_url;
    }

    // Crear una nueva instancia del modelo Proyecto
    const nuevoProyecto = new Proyecto({
      name,
      descripcion,
      imagen: imageUrl,
      tecnologias,
      integrantes,
    });



    // Guardar el nuevo proyecto en la base de datos
    const proyectoGuardado = await nuevoProyecto.save();

    res.status(201).json(proyectoGuardado); // Devolver el proyecto recién creado
    console.log(imagen);
    // console.log(req.files);

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