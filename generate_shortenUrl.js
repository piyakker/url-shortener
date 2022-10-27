//產生五碼亂數
function generateShortenedUrl() {
  let collection = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  collection = collection.split('')
  let shortenedUrl = ''
  for (let i = 0; i < 5; i++) {
    shortenedUrl += sample(collection)
  }
  return shortenedUrl

}

function sample(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = generateShortenedUrl