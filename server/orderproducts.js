
const db = require('APP/db')
const OrderProduct = db.model('OrderProduct')
const Product = db.model('products')

const { mustBeLoggedIn, forbidden } = require('./auth.filters')

module.exports = require('express').Router()
  .get('/:id',
  // The forbidden middleware will fail *all* requests to list users.
  // Remove it if you want to allow anyone to list all users on the site.
  //
  // If you want to only let admins list all the users, then you'll
  // have to add a role column to the users table to support
  // the concept of admin users.
  // forbidden('listing users is not allowed'),
  (req, res, next) => {
    OrderProduct.findAll({
      where: {
        order_id: req.params.id
      },
      include: [Product]

    })

      .then(order => res.json(order))
      .catch(next)
  })
  .delete('/delete/:orderId/:productId',
  (req, res, next) => {
    OrderProduct.findOne({
      where: {
        order_id: req.params.orderId,
        product_id: req.params.productId
      }
    })
      .then(found => {
        return found.destroy()
      })
      .then(res.sendStatus(204))
      .catch(next)
  })
