'use strict';

const mongoose = require('mongoose');



// const storeSchema = new mongoose.Schema({
//   store: { type: String, required: true },
//   address: { type: String, required: true },
//   low_in_stock: { type: String, required: true},
//   distance: { type: Number, required: true},
//   favorite: {type: Boolean, required: true}
// })

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true},
  name: { type: String, required: true},
  price: { type: String, required: true},
  
})

module.exports = mongoose.model('product', productSchema);