/*eslint: */
//const chalk = require('chalk');

// console.log(chalk.white.bgRed.bold('Hello world'))
const router = require('express').Router()
const {Assistance, User} = require('../db/models')
const {futureDate} = require('../../client/util/future_date')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await Assistance.findAll({})
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const data = req.body
  console.log(data.date.length, futureDate(10))

  if (req.user) {
    try {
      const quantity = await Assistance.findAll({where: {userId: req.user.id}})
      if (quantity.length >= 2) {
        res
          .status(200)
          .json({message: 'No more than 2 requests', path: 'limit reached'})
      } else {
        if (!data.date.length) {
          const event = await Assistance.create({
            ...data,
            userId: req.user.id,
            date: futureDate(10)
          })
          await event.addUsers(req.user.id)
          res.status(200).json({
            message: 'No date specified! we will show up in next 10 days',
            warning: true,
            path: true
          })
        } else {
          const event = await Assistance.create({...data, userId: req.user.id})
          await event.addUsers(req.user.id)
          res
            .status(200)
            .json({message: 'Your request has ben posted, Thank you!'})
        }

        console.log('')
      }
    } catch (error) {
      const messages = {
        message: error.errors[0].message,
        path: error.errors[0].path,
        warning: error.errors[0].validatorKey
      }

      res.status(401).json(messages)
    }
  } else {
    res.json({message: 'no user registerd'})
  }
})
