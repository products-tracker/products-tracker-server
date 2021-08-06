'use strict';

const getKey = require('../lib/getKey.js');
const jwt =require('jsonwebtoken');
const User = require('../models/User.js');

const Store = {};


// Store.show = (req, res) => {
//   const token = req.headers.authorization.split(' ')[1];

//   jwt.verify(token, getKey, {}, async function(err, user){
//     if(err) {
//       res.send('invalid token');
//     } else {
//       const email = user.email;
//       await User.find({email}, (err, user) => {
//         if (err) {
//           res.send('invalid user');
//         } else {
//           res.send(user.stores);
//         }
//       })
//     }
//   })
// }

Store.add = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];

  // jwt.verify(token, getKey, {}, async function(err, user){
  //   if(err) {
  //     res.send('invalid token');
  //   } else {
  //     const {email, store, address, low_in_stock, distance } =req.body;
  //     const newStore = { store, address, low_in_stock, distance };
  //     await User.findOne({ email }, (err, user) => {
  //       user.stores.push(newStore);
  //       user.save().then(() => {
  //         res.send(user.stores)
  //       })
  //       .catch(err => console.error(err))
  //     })
  //   }
  // })
  console.log(req.body)

  const newUser = new User({
    'email': req.body.email,
    'stores': req.body.stores
  });
  
  await newUser.save()
    .then(()=> {
      res.send(newUser);
    })


}

Store.delete = async (req, res) => {
  // const token = req.headers.authorization.split(' ')[1];

  // jwt.verify(token, getKey, {}, async function(err, user){
  //   if(err) {
  //     res.send('invalid token');
  //   } else {
      console.log(req.params)
      // const id = parseFloat(req.params.id);
      // const email = req.params.email;
      // await User.findOne({ email }, (err, user) => {
      //   const filtered = user.books.filter(store => store.id != id);
      //   user.stores = filtered;
      //   user.save().then(() => {
      //     res.send(user.stores)
      //   })
      //   .catch(err => console.error(err))
      // })
  //   }
  // })
}



module.exports = Store;