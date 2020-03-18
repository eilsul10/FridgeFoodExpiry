const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Using node.JS to make HTTP request to Coinbase API

let request = require('request');

//   function capturePrices () {
// handler = code = start of callback, only needs to be defined once
app.get('/foods', function(req, res){
    // req.body console logs empty object
    let food = new Food();

    // console.log(req.body)
    request({
        method: 'GET',
        uri: 'http://localhost:5000/',
        json: true
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          console.log("Insert food here");
        }
      })
  });
// }

function getBTCPrices () {

    request({
        method: 'GET',
        uri: 'https://api.coinbase.com/v2/prices/BTC-USD/spot',
        json: true
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          let price = new Price();
          let currentPrice = body.data.amount
          price.price = currentPrice;
          price.save()
        //   console.log(body.data.amount)
        }
      })
}





// app.use('/prices', todoRoutes)

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

module.exports = app;