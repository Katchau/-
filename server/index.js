const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // this is to ignore the god damned CORS errors
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

app.get('/test', function (req, res) {
  res.send('works!')
})

app.get('/getCurrency', function (req, res) {
  require('./ninjaAPI/currency').getCurrency(req, res)
})

app.get('/getItems', function (req, res) {
  require('./ninjaAPI/items').getItems(req, res)
})

app.get('/searchItem', function (req, res) {
  require('./poeAPI/search').searchItem(req, res)
})

app.post('/search', function (req, res) {
  require('./poeAPI/search').searchItem(req, res)
})

app.get('/fetchItemInfo', function (req, res) {
  require('./poeAPI/search').fetchItemInfo(res)
})

app.get('/fetchStatInfo', function (req, res) {
  require('./poeAPI/search').fetchStatInfo(res)
})
