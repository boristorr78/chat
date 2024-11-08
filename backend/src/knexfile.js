// src/knexfile.js
require('dotenv').config(); // Cargar variables del archivo .env

module.exports = {
  client: 'pg', // Usamos PostgreSQL
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 2,
    max: 10
  }
};
