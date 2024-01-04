const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');
const { agregarPortadaController, agregarProyectoController, agregarDescripcionController, agregarFotoDePerfilController } = require('../controllers/post.controller');
const obtenerProyectosController = require('../controllers/get.controllers');

// Ruta para enviar un correo electrónico
router.post('/send-email', emailController.sendEmail);
router.post("/agregar-portada",agregarPortadaController);
router.post("/agregar-proyecto",agregarProyectoController);
router.post("agreagr-descrpccion",agregarDescripcionController);
router.post("agreagr-fotoDePerfil",agregarFotoDePerfilController);
router.get("/all-proyects", obtenerProyectosController);



module.exports = router;
