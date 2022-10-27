const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const routes = require('./routes')

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
//啟用 body-parser
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => console.log(`listening on http://localhost:${port}`))