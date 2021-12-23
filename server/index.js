const express = require('express')
const axios = require('axios')
const token = require('../config.js');
const { response } = require('express');

const app = express();

const PORT = 3000;
app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})

app.use(express.json())

app.use('/', express.static(__dirname + '/../client/dist'))

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-den'


//Sterling CRUD
app.get('/products', (req, res) => {
  let {page, count} = req.body;
  const header = {headers: {
    'Authorization': token.TOKEN
  }}

  if(!page) {
    page = 1;
  }
  if (!count) {
    count = 5;
  }

  axios.get(api + `/products?page=${page}&count=${count}`, header)
    .then(response => {
      res.send(response.data) })
    .catch(err => res.status(400).send("ERROR", err))
})

//Marc CRUD


//Mitchell CRUD