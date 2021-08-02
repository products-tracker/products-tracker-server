'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const getFunction = require ('./getFunction');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use('*', (req,res) => {
  res.status(404).send('rout not found');
})


app.get('/weather', weatherHandler);

function weatherHandler(req, res){
  const product = req.query.product;
  getFunction(product)
    .then(inventory => res.send(inventory))
    .catch(err => console.error(err));
}