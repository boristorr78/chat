// Archivo de configuración de Knex para interactuar con la base de datos PostgreSQL
const knex = require('knex');

const db = knex({
  client: 'pg',  // Utilizamos PostgreSQL
  connection: {
    host: 'localhost',
    user: 'postgres',  // Cambia esto con tu usuario de PostgreSQL
    password: 'holaboris21',  // Cambia esto con tu contraseña de PostgreSQL
    database: 'postgres'  // Cambia esto con el nombre de tu base de datos
  }
});

module.exports = db;  // Exporta la configuración de Knex
