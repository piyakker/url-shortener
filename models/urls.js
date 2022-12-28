const mongoose = require('mongoose')
//載入method
const findOrCreate = require('mongoose-findorcreate')
const Schema = mongoose.Schema
const urlschema = new Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortenUrl: {
    type: String,
    required: true,
    unique: true,
  }
})

//套用method
urlschema.plugin(findOrCreate)

module.exports = mongoose.model('Url', urlschema)