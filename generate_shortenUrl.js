const Url = require('./models/urls')

//產生五碼亂數
async function generateShortenedUrl() {
  let collection = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  collection = collection.split('')
  let shortenedUrl = ''
  for (let i = 0; i < 5; i++) {
    shortenedUrl += sample(collection)
  }
  const isRepeatedUrl = await Url.findOne({ shortenUrl: shortenedUrl}) 
  if (isRepeatedUrl) return await generateShortenedUrl()
  
  return shortenedUrl
}

function sample(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = generateShortenedUrl