exports.up = function(knex) {
    return knex.schema.createTable('me_gusta', table => {
      table.increments('id').primary();
      table.integer('id_publicacion').unsigned().references('id').inTable('publicaciones').onDelete('CASCADE');
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('me_gusta');
  };
  