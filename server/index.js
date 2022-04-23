const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cst = require('./modul/cst');
const Bill = require('./modul/bills');

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
app.post('/getbills', (req, res) => {
  Bill.find(req.body).then((data) => {
    res.json(data);
  });
});

app.post('/add', async (req, res) => {
  const { name, cost, date, item1, item2, item3, check } = req.body;

  // save fun

  await save(name, cost, date, item1, item2, item3, check);
});

app.post('/Bills', async (req, res) => {
  const { name, date, item1, item2, item3, check } = req.body;
  const bill = new Bill({
    name: name.name,
    date: date,
    item1: item1,
    item2: item2,
    item3: item3,
    check: check,
  });
  try {
    await bill.save();
    console.log(bill);
  } catch (error) {
    console.log(error);
  }
});
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
async function save(name, cost, date, item1, item2, item3, checked) {
  let Cst = new cst({
    name: name,
    cost: cost,
    bills: [{ date, item1, item2, item3, checked }],
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
