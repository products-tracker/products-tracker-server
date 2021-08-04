'use strict';

const mongoose = require('mongoose');


const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  lowInStock: { type: String, required: true},
  distance: { type: Number, required: true}
  
})

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  stores: [storeSchema]
})

module.exports = mongoose.model('users', userSchema);