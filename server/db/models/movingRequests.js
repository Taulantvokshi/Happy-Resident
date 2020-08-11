const Sequelize = require('sequelize')
const db = require('../db')

const MovingRequest = db.define('movingRequest', {
  date: {
    type: Sequelize.STRING
  },

  description: {
    type: Sequelize.TEXT,
    validate: {
      len: {
        args: [0, 1500],
        msg: 'Request text is very long! please write short text'
      }
    }
  }
})

module.exports = MovingRequest
