'use strict';

const getKey = require('../lib/getKey.js');
const jwt =require('jsonwebtoken');
const User = require('../models/User.js');

const Store = {};


Store.show = (req, res) => {
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
          res.send(user.books);
        }
      })
    }
  })
}

Store.add = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async function(err, user){
    if(err) {
      res.send('invalid token');
    } else {
      const {email, name, description, status } =req.body;
      const newBook = { name, description, status };
      await User.findOne({ email }, (err, user) => {
        user.books.push(newBook);
        user.save().then(() => {
          res.send(user.books)
        })
        .catch(err => console.error(err))
      })
    }
  })
}

Store.delete = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, async function(err, user){
    if(err) {
      res.send('invalid token');
    } else {
      const id = Number(req.params.id);
      const email = req.params.email;
      await User.findOne({ email }, (err, user) => {
        const filtered = user.books.filter(book => book.id != id);
        user.books = filtered;
        user.save().then(() => {
          res.send(user.books)
        })
        .catch(err => console.error(err))
      })
    }
  })
}



module.exports = Store;