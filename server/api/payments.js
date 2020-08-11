const stripe = require('stripe')(process.env.StripesecretKey)
const router = require('express').Router()
const {User, Rents} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
  const data = req.body

  try {
    const customer = await stripe.customers.create({
      email: req.user.email,
      source: data.id
    })

    await req.user.update({stripeId: customer.id})
    const charge = await stripe.charges.create({
      amount: req.user.rentAmount,
      description: 'happy residency',
      currency: 'usd',
      customer: customer.id
    })

    const newRent = await Rents.create({
      transactionId: charge.id,
      amount: charge.amount,
      balanceTransaction: charge.balance_transaction,
      currency: charge.currency,
      costumer: charge.customer,
      paid: charge.paid,
      paymentMethod: charge.payment_method,
      status: charge.status,
      receiptUrl: charge.receipt_url,
      created: charge.created,
      userId: req.user.id
    })

    await newRent.addRentUsers(req.user.id)
  } catch (err) {
    throw new Error(err)
  }
})
