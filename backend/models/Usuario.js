const db = require('../db/knex');  // Requerir la configuración de Knex

// Definir un modelo de usuario
const Usuario = {
  // Crear un nuevo usuario
  create: async ({ nombreUsuario, contrasena }) => {
    try {
      const [usuario] = await db('usuarios').insert({
        nombre_usuario: nombreUsuario,
        contrasena: contrasena
      }).returning('*');  // Devuelve el usuario insertado
      return usuario;
    } catch (error) {
      throw new Error('Error al crear el usuario: ' + error.message);
    }
  },

  // Buscar un usuario por su nombre de usuario
  findOne: async ({ nombreUsuario }) => {
    try {
      const usuario = await db('usuarios').where({ nombre_usuario: nombreUsuario }).first();
      return usuario;
    } catch (error) {
      throw new Error('Error al buscar el usuario: ' + error.message);
    }
  }
};

module.exports = Usuario;
