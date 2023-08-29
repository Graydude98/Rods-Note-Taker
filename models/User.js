const mongoose = require('mongoose')
const kittySchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
  });