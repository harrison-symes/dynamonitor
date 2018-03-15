
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, first_name: 'Harrison', last_name: 'Symes', other_names: 'James Broe', age: 21}
      ]);
    });
};
