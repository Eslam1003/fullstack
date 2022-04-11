const mongoose = require('mongoose');
const cst = new mongoose.Schema({
  name: {
    type: String,
  },
  cost: {
    type: String,
  },
});
module.exports = mongoose.model('cst', cst);
