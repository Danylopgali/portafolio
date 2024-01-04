const mongoose= require( "mongoose");

const proyectoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  imagen: {
    type: String,
  },
  tecnologias: {
    type: [String], 
  },
  integrantes: {
    type: [String], 
  },
});

const Proyecto = mongoose.model("Proyecto", proyectoSchema);

module.exports= Proyecto;
