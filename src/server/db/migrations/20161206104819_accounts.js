
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', (t) => {
    t.increments();
    t.string('name').notNullable();
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.boolean('active').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('accounts');
};
