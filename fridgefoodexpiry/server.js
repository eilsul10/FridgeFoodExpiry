const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// let foodItem = null;
let foodItems = [];

app.post('/api/food', (req, res) => {
  console.log(req.body);
  foodItemsArray = foodItems.push(req.body.foodItem)
  res.json(foodItemsArray);
});

app.get('/api/food', (req, res) => {
    res.json(foodItems);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));