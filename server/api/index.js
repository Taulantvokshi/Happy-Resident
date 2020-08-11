const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/assistance', require('./assistance'))
router.use('/account', require('./account'))
router.use('/archives', require('./folder'))
router.use('/payments', require('./payments'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
