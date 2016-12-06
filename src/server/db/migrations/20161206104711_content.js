
exports.up = function(knex, Promise) {
  return knex.schema.createTable('content', (t) => {
    t.increments();
    t.string('type').notNullable();
    t.string('content').notNullable();
    t.string('data').notNullable();
    t.string('title').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('content');
};
