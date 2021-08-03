'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require('axios');

const getFunction = require ('./getFunction');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/weather', weatherHandler);

app.get('/fakestore', fakeStoreHandler);

app.use('*', (req,res) => {
  res.status(404).send('route not found');
})



app.get('/products', getProductHandler);

function fakeStoreHandler(req, res) {
  axios.get('https://fakestoreapi.com/products/1')    
    .then(json=>res.send(json.data))
}


function getProductHandler(req, res){
  const sku = req.query.product;
  const postalCode = req.query.postalCode;
  getFunction(sku, postalCode)
    .then(stores => res.send(stores))
    .catch(err => console.error(err));
}