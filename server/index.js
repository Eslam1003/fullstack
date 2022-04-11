const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cst = require('./modul/cst');
mongoose
  .connect(
    'mongodb+srv://eslam:mohamed_1993@cluster0.jl2e4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then((result) => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

// middel ware
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//routs
app.get('/login', (req, res) => {
  res.json({ userName: 'hamdy', password: '01273050924' });
});
app.get('/home', (req, res) => {
  cst.find().then((data) => {
    res.json(data);
    console.log(data);
  });
});

app.post('/add', (req, res) => {
  const { name, cost } = req.body;
  save(name, cost);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
async function save(name, cost) {
  let Cst = new cst({
    name: name,
    cost: cost,
  });
  try {
    await Cst.save();
  } catch (error) {
    console.log(error);
  }
}
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
