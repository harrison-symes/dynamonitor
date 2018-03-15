
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('students', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('other_names')
    table.integer('age')
    table.string('lesson_time')
    table.string('lesson_day')
    table.integer('school_id')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
