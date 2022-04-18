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

const app = express();
// middel ware
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//routs
app.post('/login', (req, res) => {
  let user = { userName: 'hamdy', password: '01273050924' };
  let { userName, password } = req.body;
  if (userName === user.userName && password && user.password) {
    res.json(true);
  } else {
    res.json(false);
  }
});
app.get('/home', (req, res) => {
  cst.find().then((data) => {
    res.json(data);
  });
});

app.post('/add', async (req, res) => {
  const { name, cost } = req.body;
  console.log(req.body);
  await save(name, cost);
});
app.get('/Bils/:id', async (req, res) => {
  let id = req.params.id;
  let data = await cst.findById(id);
  res.json(data);
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
