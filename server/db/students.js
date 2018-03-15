const knex = require('./connection')

const getStudentById = id =>
  knex('students')
    .where({id})
    .first()

module.exports = {
  getStudents: () => knex('students'),
  getStudentById,
  insertStudent: (student) => knex('students')
    .insert(student)
    .then(id => getStudentById(id[0]))
}
