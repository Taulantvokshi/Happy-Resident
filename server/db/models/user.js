const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [4, 30],
        msg: 'First Name is either short or long'
      },
      is: {
        args: ['^[a-z]+$', 'i'],
        msg: 'Use only letters please'
      },
      isAllWhiteSpaces(value) {
        if (value.length) {
          if (!value.trim().length) {
            throw new Error('No white spaces')
          }
        }
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      isAllWhiteSpaces(value) {
        if (value.length) {
          if (value.trim().length === 0) {
            throw new Error('No white spaces')
          }
        }
      },

      len: {
        args: [4, 30],
        msg: 'Last Name is either short or long'
      },
      is: {
        args: ['^[a-z]+$', 'i'],
        msg: 'Use only letters please'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: 'Not a valid email'
      }
    },
    notEmpty: {
      args: true,
      msg: 'Not an empty feild'
    },
    isAllWhiteSpaces(value) {
      if (value.length) {
        if (!value.trim().length) {
          throw new Error('No white spaces')
        }
      }
    }
  },
  floor: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not empty Value'
      },
      isAllWhiteSpaces(value) {
        if (value.length) {
          if (!value.trim().length) {
            throw new Error('No only white spaces')
          }
        }
      },
      max: {
        args: 100,
        msg: 'No more than 300 floors'
      },
      min: {
        args: -1,
        msg: 'No les 0 floors'
      },
      longLenght: value => {
        if (value.length > 4) {
          throw new Error('input to long')
        }
      },
      not: {
        args: ['[a-z]', 'i'],
        msg: 'only number floors'
      }
    }
  },
  aptNumber: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Not empty Value'
      },
      isAllWhiteSpaces(value) {
        if (value.length) {
          if (!value.trim().length) {
            throw new Error('No only white spaces')
          }
        }
      },
      longLenght: value => {
        if (value.length > 5) {
          throw new Error('input to long')
        }
      },
      warning(number) {
        if (number.length <= 1) {
          throw new Error('appt number is to short')
        }
      }
    }
  },
  residentCode: {
    type: Sequelize.STRING,
    validate: {
      longLenght: value => {
        if (value.length > 40) {
          throw new Error('input to long')
        }
      },
      isAllWhiteSpaces(value) {
        if (value.length) {
          if (!value.trim().length) {
            throw new Error('No only white spaces')
          }
        }
      },
      notEmpty: {
        args: true,
        msg: 'Not empty Value'
      },
      warning(number) {
        if (number.length < 8) {
          throw new Error('Resident code is to short')
        }
      }
    }
  },

  image: {
    type: Sequelize.STRING
  },
  rentAmount: {
    type: Sequelize.STRING
  },
  stripeId: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING,
    validate: {
      warning(number) {
        if (number.length < 17) {
          throw new Error('Not a real number! we accept only US numbers')
        }
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      longLenght: value => {
        if (value.length > 15) {
          throw new Error('Password is to long')
        }
      },
      isAllWhiteSpaces(value) {
        if (value.length) {
          if (!value.trim().length) {
            throw new Error('No white spaces')
          }
        }
      },
      notEmpty: {
        args: true,
        msg: 'Not empty Value'
      },
      isPass: val => {
        if (val.length < 5) {
          throw new Error('Password is to short')
        }
      }
    },

    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
