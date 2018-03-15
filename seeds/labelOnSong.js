
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('labelsOnSongs').del()
    .then(function () {
      // Inserts seed entries
      return knex('labelsOnSongs').insert([
        {id: 1, label_id: 1, song_id: 1,  student_song_id: 1}
      ]);
    });
};
