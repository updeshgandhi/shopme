process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
const port = 80;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));


app.get('/api/product', async (req, res) => {
  let url = `https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  }
  catch (err) {
    res.send(err)
  }
});

app.listen(port, () => {
    console.log(`Server listening on the port:: ${port}`);
});