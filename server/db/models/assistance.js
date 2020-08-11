const Sequelize = require('sequelize')
const db = require('../db')
const date = new Date()

const Assistance = db.define('assistance', {
  appliance: {
    type: Sequelize.STRING,

    validate: {
      length: value => {
        if (value.length === 0)
          throw new Error('No empty input, add the name of the isue')
        if (value.length > 50) throw new Error('Shorter description please!')
        if (value.length < 2) throw new Error('Longer description is required')
      }
    }
  },
  date: {
    type: Sequelize.STRING,

    validate: {
      isAfter: {
        args: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() -
          1}`,
        msg: 'Should be on the future'
      }
      // warning: hasDate => {
      //   if (!hasDate) {
      //     throw new Error(
      //       "we received your request, since you didn't specify any day, we will come any day this or next week"
      //     )
      //   }
      // }
    }
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Assistance
