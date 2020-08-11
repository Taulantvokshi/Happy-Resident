const router = require('express').Router()
const {Assistance} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const assistances = await Assistance.findAll({where: {userId: req.user.id}})
    res.status(200).json(assistances)
  } catch (error) {
    next(error)
  }
})

router.post('/delete', async (req, res, next) => {
  const id = req.body.id
  try {
    await Assistance.destroy({where: {id}})
    res.status(204).json({message: 'Item Deleted!'})
  } catch (error) {
    next(error)
  }
})
