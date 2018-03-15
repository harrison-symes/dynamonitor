const router = require('express').Router()

const songsDb = require('../db/songs')

router.get('/', (req, res) => {
  songsDb.getSongs()
    .then(songs => res.json(songs))
    .catch(err => console.log({err}))
})

router.post('/', (req, res) => {
  songsDb.insertSong(req.body)
    .then(song => res.status(201).json(song))
})

router.get('/students/:student_id/', (req, res) => {
  songsDb.getStudentSongs(req.params.student_id)
    .then(songs => res.status(200).json(songs))
})
//
// router.post('/:id/songs', () => {
//   songsDb.insertStudentSong(req.params.id, req.body)
//     .then(songs => res.status(200).json(songs))
// })

module.exports = router
