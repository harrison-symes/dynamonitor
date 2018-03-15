
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('labels', table => {
    table.increments('id')
    table.string('name')
    table.string('short')
    table.boolean('is_primary')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('labels')
};
