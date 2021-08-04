'use strict';

const axios = require('axios');
const cache = require('./cache.js');

function getFunction(sku, postalCode) {
  const key = `Stores near ${postalCode} with sku:${sku}`;
  const API = `https://api.bestbuy.com/v1/products/${sku}/stores.json?postalCode=${postalCode}&apiKey=${process.env.BESTBUY_API}`;

  if(!cache[key]) {
    cache[key] = {};
    cache[key].data = axios.get(API)
      .then(data => parseFunctionData(data.data));
  }
  return cache[key].data;
}
function parseFunctionData(data) {
  try{
    const stores = data.stores.map(data => {
      return new Store(data);
    });
    return Promise.resolve(stores);
  } catch (err) {
    return Promise.reject(err);
  }
}

// {
//     let dailyForecast = response.data.data.results.map(data => new Forecast(data));
//     return Promise.resolve(dailyForecast);
//   })
//   .catch(err => Promise.reject(err));

class Store {
  constructor(data) {
    this.store = data.name ;
    this.address = data.address;
    this.lowInStock = data.lowStock;
    this.distance = data.distance;
  }
}

module.exports = getFunction;