// db.js
const mongoose = require('mongoose');
require("dotenv").config();

const MOGODB_URI = process.env.MONGODB_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(MOGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message);
    process.exit(1); // Sale del proceso con un código de error
  }
};

module.exports = connectDB;

