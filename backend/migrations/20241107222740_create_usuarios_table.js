// 20241107222740_create_usuarios_table.js
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.string('email').unique().notNullable();
      table.string('contraseña').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('usuarios');
  };
  