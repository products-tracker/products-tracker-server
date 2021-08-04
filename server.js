'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
//const axios = require('axios');
const PORT = process.env.PORT || 3001;
const axios = require('axios');

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

}
