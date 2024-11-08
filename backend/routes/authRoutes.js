const express = require('express');
const router = express.Router();
const controladorAuth = require('../controllers/authController');  // Renombramos para que esté en español

// Ruta para registrar un usuario
router.post('/registrar', controladorAuth.registrar);  // Ruta en español

// Ruta para iniciar sesión
router.post('/iniciar-sesion', controladorAuth.iniciarSesion);  // Ruta en español

module.exports = router;
