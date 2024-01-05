const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const CLOUDINARY_NAME=process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET;
cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
  
  module.exports =cloudinary;