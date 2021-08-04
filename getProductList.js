'use strict';

const axios = require('axios');
const cache = require('./cache.js');


function getProductList(product, sku) {
  const key = 'products: ' + product;
  const API =  `https://api.bestbuy.com/v1/products(longDescription=${product}*)?show=sku,name,image,regularPrice&pageSize=15&page=1&apiKey=${process.env.BESTBUY_API}&format=json`


  if(!cache[key]) {
    cache[key] = {};
    cache[key].data = axios.get(API)
      .then(data => parseFunctionData(data.data));
  }
  return cache[key].data;
}
function parseFunctionData(data) {
  try{

    const products = data.products.map(data => {
      return new Product(data);
    });
    return Promise.resolve(products);

  } catch (err) {
    return Promise.reject(err);
  }
}



class Product {
  constructor(data) {
    this.sku = data.sku ;
    this.name = data.name;
    this.type = data.type;
    this.price = data.regularPrice;
    this.image = data.image
  }
}

module.exports = getProductList;