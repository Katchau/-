// "Request" library
const request = require('request')
const url = require('../config/ninjaSRC')

module.exports.getItems = function (req, res) {
  const itemOption = req.query.item
  if (itemOption === null || itemOption === undefined) {
    return res.send({})
  }
  const authOptions = {
    url: url.baseURL + url[itemOption] + url.standardLeague,
    json: true
  }
  request.get(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return res.send(body)
    } else {
      return res.send(error)
    }
  })
}
