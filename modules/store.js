'use strict';

const getKey = require('../lib/getKey.js');
const jwt =require('jsonwebtoken');
const User = require('../models/Product.js');

const Store = {};


Store.show = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];

  // jwt.verify(token, getKey, {}, async function(err, user){
  //   if(err) {
  //     res.send('invalid token');
  //   } else {
      //const email = user.email;
      await User.find({}, (err, user) => {
        if (err) {
          res.send('invalid user');
        } else {
          res.send(user.stores);
          //console.log(user.stores);
        }
      })
  //   }
  // })
}

Store.add = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];

  // jwt.verify(token, getKey, {}, async function(err, user){
  //   if(err) {
  //     res.send('invalid token');
  //   } else {

      //const {email, name, address, lowInStock, distance } =req.body;
      const email = req.body;
      const newUser = new User({email : email});
      //const newStore = { name, address, lowInStock, distance };
      // await User.findOne({ email }, (err, user) => {
      //   user.stores.push(newStore);
      //   user.save().then(() => {
      //     res.send(user.stores)
      //   })
      //   .catch(err => console.error(err))
      // })
  //   }
  // })
  await newUser.save().then(() => {
      res.send(user.stores)

    })
    .catch(err => console.error(err));


}

Store.delete = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];

  // jwt.verify(token, getKey, {}, async function(err, user){
  //   if(err) {
  //     res.send('invalid token');
  //   } else {

      const id = parseFloat(req.params.id);
      const email = req.params.email;
      await User.findOne({ email }, (err, user) => {
        const filtered = user.stores.filter(store => store.id != id);
        user.stores = filtered;
        user.save().then(() => {
          res.send(user.stores)
        })
        .catch(err => console.error(err))
      })

  //   }
  // })
}



module.exports = Store;