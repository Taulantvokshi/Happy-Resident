const router = require('express').Router()
const User = require('../db/models/user')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})

    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const rent = 2600 * 100
    const user = await User.create({
      ...req.body,
      image: 'images/avatar.jpg',
      rentAmount: String(rent)
    })
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (error) {
    const messages = error.errors.reduce((obj, current) => {
      obj[current.path] = current.message
      return obj
    }, {})
    console.log(messages)

    res.status(401).json(messages)
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
