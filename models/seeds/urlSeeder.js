const mongoose = require('mongoose')
const generateShortenUrl = require('../../generate_shortenUrl')
const Url = require('../urls')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 1; i <= 5; i++) {
    Url.create({ originalUrl: 'w', shortenUrl: generateShortenUrl() })
  }
  console.log('done')
})