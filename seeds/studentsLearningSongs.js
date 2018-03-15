
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('studentsLearningSongs').del()
    .then(function () {
      // Inserts seed entries
      return knex('studentsLearningSongs').insert([
        {id: 1, song_id: 1, student_id: 1, is_complete: false, admin_comment: null},
      ]);
    });
};
