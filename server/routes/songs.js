const router = require('express').Router()

const songsDb = require('../db/songs')

//get a list of all songs in the db
router.get('/', (req, res) => {
  songsDb.getSongs()
    .then(songs => res.json(songs))
    .catch(err => console.log({err}))
})

//add a new song to the database
router.post('/', (req, res) => {
  songsDb.insertSong(req.body)
    .then(song => res.status(201).json(song))
})

//get a list of all songs a student is learning / has learnt (by their id)
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
