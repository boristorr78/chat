exports.up = function(knex) {
    return knex.schema.createTable('publicaciones', table => {
      table.increments('id').primary();
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios').onDelete('CASCADE');
      table.string('contenido').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('publicaciones');
  };
  