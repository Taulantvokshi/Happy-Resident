const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')
const db = new Sequelize(
  'd20ut6k5qs46d3',
  'xstmykwkjqxrqx',
  '75196b6370145432e02568b16d199be0ec9dd5d88f910bcf2a62cd99168bebd9',
  {
    host: 'ec2-23-21-94-99.compute-1.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
  }
)
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}