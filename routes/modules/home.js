const express = require('express')
const router = express.Router()

const generateShortenedUrl = require('../../generate_shortenUrl.js')
const Url = require('../../models/urls')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  //先找有沒有一樣的 originalUrl, 如果沒有就 create 一個並且隨機配一組亂碼網址
  return Url.findOrCreate({ originalUrl }, { shortenUrl: generateShortenedUrl() })
    .then(url => {
      const shortenUrl = url.doc.shortenUrl
      res.redirect(`/success/${shortenUrl}`)
    })
})

//這個路由的存在意義，是因為伺服器會自動去請求網址左側小圖標的文件，而就網址來看，剛好會符合下面"/:shorten_url"的格式，就會造成req.params的質獨到favicon.ico，這時只要在他的前面設一個這樣的路由，接住圖標得請求即可。
router.get('/favicon.ico', (req, res) => {
  return 'your favicon'
})

router.get('/fail', (req, res) => {
  return res.render('fail')
})

//短網址連動回原網址
router.get('/:shorten_url', (req, res) => {
  const shortenUrl = req.params.shorten_url
  return Url.findOne({ shortenUrl })
    .then(url => {
      if (!url) {
        return res.redirect('/fail')
      }
      return res.redirect(url.originalUrl)
    })
})

module.exports = router