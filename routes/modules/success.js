const express = require('express')
const router = express.Router()
const Url = require('../../models/urls')



//呈現短網址的頁面
router.get('/:shorten_url', (req, res) => {
  const shortenUrl = req.params.shorten_url
  return Url.findOne({ shortenUrl })
    .lean()
    .then(url => {
      if (!url) {
        const error = '網址好像不太對耶。。。'
        return res.redirect(`/fail?error=${error}`)
      }
      const fullUrl = req.protocol + "://" + req.get('host') + '/' + url.shortenUrl
      res.render('show', { url, fullUrl })
    })
    .catch(error => console.log(error))
})

module.exports = router