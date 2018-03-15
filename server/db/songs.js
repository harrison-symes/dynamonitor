const knex = require('./connection')

const getSongById = id =>
  knex('songs')
    .where({id})
    .first()

const getSongLabels = student_id => knex('labelsOnSongs')
  .join('labels', 'labelsOnSongs.song_id', 'labels.id')

module.exports = {
  getSongs: () => knex('songs'),
  getSongById,
  insertSong: (student) => knex('songs')
    .insert(student)
    .then(id => getStudentById(id[0])),
  getStudentSongs: student_id => knex('studentsLearningSongs')
    .where('student_id', student_id)
    .join('songs', 'studentsLearningSongs.song_id', 'songs.id')
    .select('*', 'studentsLearningSongs.id as student_song_id')
    .then(songs => {
      // console.log({songs, student_id});
      return getSongLabels(student_id)
        .then(labels => {
          return songs.map(song => {
            song.labels = labels.filter(label => label.student_song_id == song.student_song_id)
            return song
          })
        })
    })
}
