'use strict';

const axios = require('axios');
const cache = require('./cache.js');

function getPriceAndName(sku) {

  const key = `Product with sku:${sku}`;

  const API = `https://api.bestbuy.com/v1/products/${sku}.json?show=sku,name,salePrice,largeImage&apiKey=${process.env.BESTBUY_API}`;

  if(!cache[key]) {
    cache[key] = {};
    cache[key].data = axios.get(API)
      .then(data => parsePriceData(data.data));
  }
  return cache[key].data;
}
function parsePriceData(data) {
  try{
    const product = new Product(data);
    return Promise.resolve(product);
  } catch (err) {
    return Promise.reject(err);
  }
}


class Product {
  constructor(data) {
    this.name = data.name ;
    this.sku = data.sku;
    this.price = data.salePrice;
    this.offer = data.offers;
    this.url = data.largeImage;
  }
}

module.exports = getPriceAndName;