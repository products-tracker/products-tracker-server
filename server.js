'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
//const axios = require('axios');
const PORT = process.env.PORT || 3001;

const getFunction = require ('./getFunction');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`listening on ${PORT}`));

// app.use('*', (req,res) => {
//   res.status(404).send('rout not found');
// })


app.get('/products', getProductHandler);

async function getProductHandler(req, res){
  const sku = req.query.sku;
  const postalCode = req.query.postalCode;

  getFunction(sku, postalCode)
    .then(stores => res.send(stores))
    .catch(err => console.error(err));
  
  // const API = `https://api.bestbuy.com/v1/products/${sku}/stores.json?postalCode=${postalCode}&apiKey=${process.env.BESTBUY_API}`;

  // try{
  //   const response = await axios.get(API);  
  //   const stores = response.data.stores.map(data => {
  //     return new Store(data);
  //   });
  //   res.send(stores);
  // } catch (err) {
  //   res.send(err);
  // }

}



// class Store {
//   constructor(data) {
//     this.store = data.name ;
//     this.address = data.address;
//     this.outOfStock = data.lowStock;
//     this.distance = data.distance;
//   }
// }