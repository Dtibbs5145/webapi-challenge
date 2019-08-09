
exports.up = function(knex) {
  return knex.schema.createTable('chores', function(chores) {
    chores.increments();

    chores
        .integer('chores_id')
        .unsigned()
        .notNullable()

    chores
        .string('notes', 150)

    chores
        .string('description', 260)
        .notNullable();

    chores
        .references('id')
        .inTable('people')

    chores
        .boolean('completed')
        .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('chores');
};
