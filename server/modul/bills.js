const mongoose = require('mongoose');
const bill = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  item1: {
    type: String,
  },
  item2: {
    type: String,
  },
  item3: {
    type: String,
  },
  check: {
    type: String,
  },
});
module.exports = mongoose.model('Bills', bill);
