const router = require('express').Router()

const studentsDb = require('../db/students')

router.get('/', (req, res) => {
  studentsDb.getStudents()
    .then(students => res.json(students))
    .catch(err => console.log({err}))
})

router.get('/schools/:id', (req, res) => {
  studentsDb.getStudentsBySchoolId(req.params.id)
    .then(students => res.json(students))
    .catch(err => console.log({err}))
})

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
