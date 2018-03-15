const knex = require('./connection')

const getSongById = id =>
  knex('songs')
    .where({id})
    .first()

module.exports = {
  getSongs: () => knex('songs'),
  getSongById,
  insertSong: (student) => knex('songs')
    .insert(student)
    .then(id => getStudentById(id[0]))
}
