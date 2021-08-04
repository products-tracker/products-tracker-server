'use strict';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true},
  status: { type: String, required: true}
  //img: { type: String, required: true}
})

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  books: [bookSchema]
})

module.exports = mongoose.model('users', userSchema);