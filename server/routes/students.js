const router = require('express').Router()

const studentsDb = require('../db/students')

//get a list of all students in the db
router.get('/', (req, res) => {
  studentsDb.getStudents()
    .then(students => res.json(students))
    .catch(err => console.log({err}))
})

//find students by a school id
router.get('/schools/:school_id', (req, res) => {
  studentsDb.getStudentsBySchoolId(req.params.school_id)
    .then(students => res.json(students))
    .catch(err => console.log({err}))
})

//add a student to the db
router.post('/', (req, res) => {
  studentsDb.insertStudent(req.body)
    .then(student => res.status(201).json(student))
})

// router.get('/:id/songs', () => {
//   studentsDb.getStudentSongs(req.params.id)
//     .then(songs => res.status(200).json(songs))
// })
//
// router.post('/:id/songs', () => {
//   studentsDb.insertStudentSong(req.params.id, req.body)
//     .then(songs => res.status(200).json(songs))
// })

module.exports = router
