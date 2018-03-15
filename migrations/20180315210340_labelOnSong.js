
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('labelsOnSongs', table => {
    table.increments('id')
    table.integer('label_id')
    table.integer('student_song_id')
    table.integer('song_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('labelsOnSongs')
};
