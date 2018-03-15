const router = require('express').Router()

const schoolsDb = require('../db/schools')

router.get('/', (req, res) => {
  schoolsDb.getSchools()
    .then(schools => res.json(schools))
})

module.exports = router
