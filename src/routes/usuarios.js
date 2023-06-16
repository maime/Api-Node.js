const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');

// Ruta para listar todos los usuarios desde otra api
router.get('/', usuariosController.findAll);

// Ruta para leer un usuario por su ID 
router.get('/:id', usuariosController.findById);

module.exports = router 
