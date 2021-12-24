const express = require('express')
const axios = require('axios')
const {API_URL, API_KEY} = require('../config.js');


const app = express();

const PORT = 3000;
app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})

app.use(express.json())

app.use('/', express.static(__dirname + '/../client/dist'))


// API Proxy
app.use('/api/*', async (req, res) => {
  const payload = await axios({
    method: req.method.toLowerCase(),
    url: API_URL + req.originalUrl.slice(4), // slice off the api
    headers: {Authorization: API_KEY},
    data: req.body
  });

  res.send(payload.data);
});