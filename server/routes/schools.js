const router = require('express').Router()

const schoolsDb = require('../db/schools')

//get a list of all schools in the db
router.get('/', (req, res) => {
  schoolsDb.getSchools()
    .then(schools => res.json(schools))
})

module.exports = router
