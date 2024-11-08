exports.up = function(knex) {
    return knex.schema.createTable('chats', table => {
      table.increments('id').primary();
      table.integer('id_emisor').unsigned().references('id').inTable('usuarios').onDelete('CASCADE');
      table.integer('id_receptor').unsigned().references('id').inTable('usuarios').onDelete('CASCADE');
      table.text('mensaje').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('chats');
  };
  