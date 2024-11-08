const db = require('../db/knex');  // Requerir la configuración de knex
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');  // Asegúrate de tener el modelo de Usuario

// Lógica para registrar un usuario
const registrar = async (req, res) => {
  const { nombreUsuario, contrasena } = req.body;
  try {
    const contrasenaCifrada = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = await Usuario.create({ nombreUsuario, contrasena: contrasenaCifrada });
    res.status(201).json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar el usuario', error });
  }
};

// Lógica para iniciar sesión
const iniciarSesion = async (req, res) => {
  const { nombreUsuario, contrasena } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { nombreUsuario } });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    const esCoincidente = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!esCoincidente) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }
    res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
  }
};

module.exports = { registrar, iniciarSesion };

