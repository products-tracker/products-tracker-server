'use strict';

const axios = require('axios');
const cache = require('./cache.js');

function getFunction(product) {
  const key = 'something' + product;
  const API = `API_domain?key=${process.env.YOUR_API_KEY}&query=${product}`;

  if(!cache[key]) {
    cache[key] = {};
    cache[key].data = axios.get(API)
      .then(data => parseFunctionData(data.data));
  }
  return cache[key].data;
}
function parseFunctionData(data) {
  try{
    const inventory = data.data.map(data => {
      return new Thing(data);
    });
    return Promise.resolve(inventory);
  } catch (err) {
    return Promise.reject(err);
  }
}

// {
//     let dailyForecast = response.data.data.results.map(data => new Forecast(data));
//     return Promise.resolve(dailyForecast);
//   })
//   .catch(err => Promise.reject(err));

class Thing {
  constructor(data) {
    this.store = data.location ;
    this.inStock = data.inStock;
    this.quantity = data.quantity;
  }
}

module.exports = getFunction;