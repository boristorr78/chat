// 20241107222750_create_amigos_table.js
exports.up = function(knex) {
    return knex.schema.createTable('amigos', function(table) {
      table.increments('id').primary();
      table.integer('usuario_id').unsigned().notNullable();
      table.integer('amigo_id').unsigned().notNullable();
      table.foreign('usuario_id').references('usuarios.id').onDelete('CASCADE');
      table.foreign('amigo_id').references('usuarios.id').onDelete('CASCADE');
      table.timestamps();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('amigos');
  };
  