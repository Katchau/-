// "Request" library
const request = require('request')
const url = 'https://www.pathofexile.com/api/trade/search/Standard'
const fetchUrl = 'https://www.pathofexile.com/api/trade/fetch/'
// https://app.swaggerhub.com/apis/Chuanhsing/poe/1.0.0#/default/get_api_trade_fetch__items_ api stuff

// TODO item not god damn hardcoded
module.exports.searchItem = function (req, res, itemInfo) {
  const searchInfo = {
    query: {
      // filters: {
      //   trade_filters: {
      //     disabled: false,
      //     filters: {
      //       price: {
      //         min: 1,
      //         max: 50
      //       }
      //     }
      //   }
      // },
      status: {
        option: 'online'
      },
      stats: [{
        type: 'and',
        filters: []
      }],
      name: itemInfo.name.toString(),
      type: itemInfo.type.toString()
    },
    sort: {
      price: 'asc'
    }
  }

  const authOptions = {
    url: url.toString(),
    body: searchInfo,
    json: true
  }
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      if (body.result === undefined) {
        return res.send(false)
      }
      let tmp = ''
      let i = 0
      body.result.forEach((id) => {
        // TODO apparently there is a limit for maximum fetching down. make this dynamic afterwards
        if (i < 10) {
          tmp += id + '%2C'
          i++
        }
      })
      tmp = tmp.substr(0, tmp.length - 3)
      return fetchItem(res, {
        result: tmp,
        searchId: body.id
      })
    } else {
      return res.send({
        location: 'search item',
        success: false,
        errorMessage: error,
        responseCode: response.statusCode
      })
    }
  })
}
// https://www.pathofexile.com/api/trade/fetch/5e05e41a97a0b7b4584e7e8ab4855bf66c892c0da4b01dc08f4e9b682826959c%2C48f256545c03f04ea6ce4a7420c025a26133f12f841fd72666e767424e6104e1?query=q9knr6kFg
function fetchItem (res, items) {
  const tmp = fetchUrl + items.result + '?query=' + items.searchId
  const authOptions = {
    url: tmp,
    json: true
  }
  request.get(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      return res.send(body)
    } else {
      return res.send({
        location: 'fetch item',
        success: false,
        errorMessage: error,
        responseCode: response.statusCode
      })
    }
  })
}
