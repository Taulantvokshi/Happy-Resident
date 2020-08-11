const User = require('./user')
const Assistance = require('./assistance')
const MovingRequest = require('./movingRequests')
const Rents = require('./rents')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
    
 */

Rents.belongsTo(User, {foreignKey: 'userId'})
User.belongsToMany(Rents, {as: 'UserRents', through: 'AllRents'})
Rents.belongsToMany(User, {as: 'RentUsers', through: 'AllRents'})

Assistance.belongsTo(User, {foreignKey: 'userId'})
User.belongsToMany(Assistance, {as: 'Assistance', through: 'joinedAsisstances'})
Assistance.belongsToMany(User, {as: 'Users', through: 'joinedAsisstances'})

MovingRequest.belongsTo(User, {foreignKey: 'userId'})
// User.belongsToMany(Host, {through: 'UserHost'})
// Post.belongsTo(User, { as: 'userRef', foreignKey: 'userId' }); // puts foreignKey UserId in Post Table
// Post.hasMany(Comment, { as: 'All_comments', foreignKey: 'postId' }); // puts foreignKey: 'postId in to Comment table

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Assistance,
  User,
  MovingRequest,
  Rents
}
