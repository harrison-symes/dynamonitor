const moment = require('moment')
const {tz} = require('moment-timezone')


exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('songs', table => {
    table.increments('id')
    table.string('name')
    table.integer('difficulty')
    // table.string('composer').defaultTo(null)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('songs')
};
