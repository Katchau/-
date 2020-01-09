// "Request" library
const request = require('request')
const url = require('../config/ninjaSRC')

module.exports.getCurrency = function (req, res) {
  const authOptions = {
    url: url.baseURL + url.currency + url.standardLeague,
    json: true
  }

  request.get(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body)
    }
  })
}
