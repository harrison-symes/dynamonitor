
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('studentLearningSong', table => {
    table.increments('id')
    table.integer('song_id')
    table.integer('student_id')
    table.boolean('is_complete').defaultTo(false)
    table.string('admin_comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('studentLearningSong')
};
