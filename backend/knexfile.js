// backend/knexfile.js

module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'holaboris21',
    database: 'postgres',
    port: 5432,
  },

  migrations: {
    directory: './migrations', // Apunta a la carpeta de migraciones dentro del backend
    tableName: 'knex_migrations', // Nombre de la tabla para llevar el control de migraciones
  },

  // Otras configuraciones...
};
