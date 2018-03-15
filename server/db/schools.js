const knex = require('./connection')

module.exports = {
  getSchools: () => knex('schools')
}
