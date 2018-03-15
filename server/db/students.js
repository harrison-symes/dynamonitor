const knex = require('./connection')

const getStudentById = id =>
  knex('students')
    .where({id})
    .first()

module.exports = {
  getStudents: () => knex('students'),
  getStudentById,
  getStudentsBySchoolId: school_id => knex('students')
    .where({school_id}),
  insertStudent: (student) => knex('students')
    .insert(student)
    .then(id => getStudentById(id[0]))
}
