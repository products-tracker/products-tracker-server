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

function fakeStoreHandler(req, res) {
  axios.get('https://fakestoreapi.com/products/1')    
    .then(json=>res.send(json.data))
}

function weatherHandler(req, res){
  const product = req.query.product;
  getFunction(product)
    .then(inventory => res.send(inventory))
    .catch(err => console.error(err));
}