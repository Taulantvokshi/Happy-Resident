/*eslint complexity:*/
const router = require('express').Router()
const {User, MovingRequest} = require('../db/models')
const upload = require('./account-aws')

module.exports = router

router.put('/', async (req, res, next) => {
  const number = req.body.phoneNumber
  try {
    if (req.user) {
      if (!req.user.phoneNumber) {
        await req.user.update({phoneNumber: number})
        res.status(200).json({message: 'Sucess we got your number'})
      } else {
        await req.user.update({phoneNumber: number})
        res.status(200).json({message: 'Sucess we updated your number'})
      }
    } else {
      res.status(401).json({message: 'Authentication error'})
    }
  } catch (error) {
    const errorMessge = {
      message: error.errors[0].message,
      path: error.errors[0].path
    }
    res.status(401).json(errorMessge)
  }
})

router.post('/', async (req, res, next) => {
  const data = req.body
  try {
    if (req.user) {
      await MovingRequest.create({...data, userId: req.user.id})
      res.status(200).json({message: 'We receive your request!', status: true})
    } else {
      res.status(401).json({message: 'Authentication error', status: false})
    }
  } catch (error) {
    const errorMessge = {
      message: error.errors[0].message,
      path: error.errors[0].path
    }
    res.status(401).json(errorMessge)
  }
})

//API endpoint for uploading... User Pictures
const singleUpload = upload.single('picture')
router.post('/upload-image', async (req, res) => {
  try {
    await singleUpload(req, res, async () => {
      await User.update(
        {image: req.file.location},
        {returning: true, where: {id: req.user.id}}
      )
      res.redirect('/account')
    })
  } catch (error) {
    throw new Error(error)
  }
})

router.post('/check-pass', async (req, res, next) => {
  const password = req.body.password
  const status = req.body.status
  try {
    if (req.user && status === 'isPass') {
      if (req.user.correctPassword(password)) {
        res.status(200).json({message: '', status: true})
      } else {
        res
          .status(401)
          .json({message: 'Incorect password', status: false, path: true})
      }
    } else if (req.user && status === 'changePass') {
      await req.user.update({password})
      res.status(401).json({message: 'Password has ben updated'})
    } else if (req.user && status === 'deleteUser') {
      await req.user.destroy()
      res.status(401).json({message: 'Account has ben deleted', path: true})
    }
  } catch (error) {
    const errorMessge = {
      message: error.errors[0].message,
      path: error.errors[0].path
    }
    res.status(401).json(errorMessge)
  }
})
