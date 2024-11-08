// src/db.js
const knex = require('knex');
const knexConfig = require('./knexfile'); // Importa la configuración de knexfile.js

const db = knex(knexConfig); // Crear instancia de knex con la configuración

module.exports = db; // Exportar la instancia para usarla en otros archivos
