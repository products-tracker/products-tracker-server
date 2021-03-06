'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
//const axios = require('axios');
const PORT = process.env.PORT || 3001;
const axios = require('axios');
const Product = require('./modules/product.js');
const mongoose = require('mongoose');
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);


const getFunction = require ('./getFunction');
const getPriceAndName = require ('./getPriceAndName');
const getProductList = require('./getProductList');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/fakestore', fakeStoreHandler);

app.get('/products', getProductHandler);

app.get('/price', getPriceHandler);


app.get('/productlist', getProductListHandler);

app.get('/stores', Product.show);
app.post('/stores', Product.add);
//app.delete('/stores', Product.delete);


app.use('*', (req,res) => {
  res.status(404).send('route not found');
})

function fakeStoreHandler(req, res) {
  axios.get('https://fakestoreapi.com/products')    
    .then(json=>res.send(json.data))
}

function getProductHandler(req, res){
  const sku = req.query.sku;
  const postalCode = req.query.postalCode;

  getFunction(sku, postalCode)
    .then(stores => res.send(stores))
    .catch(err => console.error(err));
}
function getPriceHandler(req, res){
  const sku = req.query.sku;

  getPriceAndName(sku)
    .then(product => res.send(product))
    .catch(err => console.error(err));
}

function getProductListHandler(req, res){
  const product = req.query.product;
  // const sku = req.query.sku;
  getProductList(product)
    .then(products => res.send(products))
    .catch(err => console.error(err));
}