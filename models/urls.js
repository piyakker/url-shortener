const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlschema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortenUrl: String
})

module.exports = mongoose.model('Url', urlschema)