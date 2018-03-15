
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('label', table => {
    table.increments('id')
    table.string('name')
    table.boolean('primary')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('label')
};
