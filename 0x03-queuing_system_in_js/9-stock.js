
const express = require('express')
import { createClient } from 'redis';

const listProducts = [
  {itedId: 1, name: 'Suitcase 250', price: 50, initialAvailableQuantity: 4},
  {itedId: 2, name: 'Suitcase 450', price: 100, initialAvailableQuantity: 10},
  {itedId: 3, name: 'Suitcase 650', price: 350, initialAvailableQuantity: 2},
  {itedId: 4, name: 'Suitcase 1050', price: 550, initialAvailableQuantity: 5}
];

const getItemById = (id) => {
  return listProducts.filter(item => item.itedId === id);
}

// console.log(getItemById(2))

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/list_products', (req, res) => {
  res.send(JSON.stringify(listProducts, null, 2));
});

app.listen(port, hostname, () => {
  console.log(`Your server is running on http://${hostname}:${port}/`)
});



const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));
client.on('connect', () => console.log('Redis Client connected succesfully'))