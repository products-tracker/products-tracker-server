'use strict';

// const getKey = require('../lib/getKey.js');
// const jwt =require('jsonwebtoken');
const SaveProduct = require('../models/Product.js');

const Product = {};


// Product.show = (req, res) => {
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
//           res.send(user.products);
//         }
//       })
//     }
//   })
// }
Product.show = async (req, res) => {
  try{
    const saved = await SaveProduct.find();
    res.send(saved);
  } catch (err) {
    res.send('invalid product');
  }
  
}

// Product.add = (req, res) => {
//   const token = req.headers.authorization.split(' ')[1];

//   jwt.verify(token, getKey, {}, async function(err, user){
//     if(err) {
//       res.send('invalid token');
//     } else {
//       const {email, name, description, status } =req.body;
//       const newProduct = { name, description, status };
//       await User.findOne({ email }, (err, user) => {
//         user.products.push(newProduct);
//         user.save().then(() => {
//           res.send(user.products)
//         })
//         .catch(err => console.error(err))
//       })
//     }
//   })
// }
Product.add = async (req, res) => {
  try{
    const sku = req.body.sku;
    const name = req.body.name;
    const price = req.body.price;
    const saved = new SaveProduct({sku: sku, name: name, price: price});
    saved.save().then(() => {
      res.send(saved);
    })
    
  } catch (err) {
    res.send('invalid product');
  }
  
}

// Product.delete = (req, res) => {
//   const token = req.headers.authorization.split(' ')[1];

//   jwt.verify(token, getKey, {}, async function(err, user){
//     if(err) {
//       res.send('invalid token');
//     } else {
//       const id = Number(req.params.id);
//       const email = req.params.email;
//       await User.findOne({ email }, (err, user) => {
//         const filtered = user.products.filter(product => product.id != id);
//         user.products = filtered;
//         user.save().then(() => {
//           res.send(user.products)
//         })
//         .catch(err => console.error(err))
//       })
//     }
//   })
// }
// Product.delete = async (req, res) => {
//   try{
//     const id = parseFloat(req.body._id);
//     SaveProduct.findByIdAndDelete(id, function (err, docs) {
//       if (err){
//           console.log(err)
//       }
//       else{
//           console.log("Deleted : ", docs);
//       }
//   });
    
//   } catch (err) {
//     res.send('invalid product');
//   }
  
// }



module.exports = Product;