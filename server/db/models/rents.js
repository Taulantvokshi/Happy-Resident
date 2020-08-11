const Sequelize = require('sequelize')
const db = require('../db')

const Rents = db.define('rents', {
  transactionId: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.STRING
  },
  balanceTransaction: {
    type: Sequelize.STRING
  },
  currency: {
    type: Sequelize.STRING
  },
  costumer: {
    type: Sequelize.STRING
  },
  paid: {
    type: Sequelize.STRING
  },
  paymentMethod: {
    type: Sequelize.STRING
  },

  status: {
    type: Sequelize.STRING
  },

  receiptUrl: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.STRING
  }
})
module.exports = Rents
