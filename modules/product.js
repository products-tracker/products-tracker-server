'use strict';

const getKey = require('../lib/getKey.js');
const jwt =require('jsonwebtoken');
const User = require('../models/User.js');

const Product = {};


Product.show = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async function(err, user){
    if(err) {
      res.send('invalid token');
    } else {
      const email = user.email;
      await User.find({email}, (err, user) => {
        if (err) {
          res.send('invalid user');
        } else {
          res.send(user.products);
        }
      })
    }
  })
}

Product.add = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async function(err, user){
    if(err) {
      res.send('invalid token');
    } else {
      const {email, name, description, status } =req.body;
      const newProduct = { name, description, status };
      await User.findOne({ email }, (err, user) => {
        user.products.push(newProduct);
        user.save().then(() => {
          res.send(user.products)
        })
        .catch(err => console.error(err))
      })
    }
  })
}

Product.delete = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async function(err, user){
    if(err) {
      res.send('invalid token');
    } else {
      const id = Number(req.params.id);
      const email = req.params.email;
      await User.findOne({ email }, (err, user) => {
        const filtered = user.products.filter(product => product.id != id);
        user.products = filtered;
        user.save().then(() => {
          res.send(user.products)
        })
        .catch(err => console.error(err))
      })
    }
  })
}

Product.update = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async function(err, user){
    if(err) {
      res.send('invalid token');
    } else {
      const { email, name, description, status } =req.body;
      const id = Number(req.params.id);

      await User.findOne({ email }, (err, user) => {
        const updatedProducts = user.products.map(product => {
          return product._id === id ? product = { name, description, status } : product;
        });
        user.products = updatedProducts;
        user.save().then(() => {
          res.send(user.products)
        })
        .catch(err => console.error(err))
      })
    }
  })
}

module.exports = Product;