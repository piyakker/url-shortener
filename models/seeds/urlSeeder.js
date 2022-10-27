const generateShortenUrl = require('../../generate_shortenUrl')
const Url = require('../urls')

const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 1; i <= 5; i++) {
    Url.create({ originalUrl: 'w', shortenUrl: generateShortenUrl() })
  }
  console.log('done')
})