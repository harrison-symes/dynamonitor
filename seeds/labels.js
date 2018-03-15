
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('labels').del()
    .then(function () {
      // Inserts seed entries
      return knex('labels').insert([
        {id: 1, name: 'Left Hand', short: 'LH', is_primary: true},
        {id: 2, name: 'Right Hand', short: 'RH', is_primary: true},
        {id: 3, name: 'Hands Seperate', short: 'HS', is_primary: true},
        {id: 4, name: 'Hands Together', short: 'HT', is_primary: true},
        {id: 5, name: 'Numbers', short: '#', is_primary: false},
        {id: 6, name: 'Letters', short: 'ABC', is_primary: false},
        {id: 7, name: 'Notes', short: '♪', is_primary: false},
      ]);
    });
};
