// "Request" library
const request = require('request')
// TODO https://app.swaggerhub.com/apis/Chuanhsing/poe/1.0.0#/default/get_api_trade_fetch__items_ api stuff

// TODO have to dynamically introduce which league to search
const url = 'https://www.pathofexile.com/api/trade/search/Standard'
const fetchUrl = 'https://www.pathofexile.com/api/trade/fetch/'
const itemInfoUrl = 'https://www.pathofexile.com/api/trade/data/items'
const statInfoUrl = 'https://www.pathofexile.com/api/trade/data/stats'

// why? i dont honestly remember
// i think its because they change the api and the true or false value can change between
// boolean and string for some god damn reason
function getOptionsObject (paramValue) {
  return {
    option: paramValue.toString()
  }
}

// function filterItemCategoryList () {
//   return ''.filter((str) => { return str.length !== 0 })
// }
function getMinMaxLevels (parameter, paramValue) {
  const ret = {
    min: parseInt(paramValue),
    max: parseInt(paramValue)
  }
  if (parameter.includes('Min')) {
    ret.min = null
  }
  if (parameter.includes('Max')) {
    ret.max = null
  }
  return ret
}

function setMapFilters (parameter, paramValue) {
  const mapFilter = {}
  if (parameter.includes('maptier')) {
    mapFilter.map_tier = getMinMaxLevels(parameter, paramValue)
    return mapFilter
  }
  if (parameter.match(/^(map_elder|map_shaped|map_blighted|map_series)/)) {
    mapFilter[parameter] = getOptionsObject(paramValue)
  }
  return mapFilter
}

function setMiscFilters (parameter, paramValue) {
  const miscFilters = {}
  if (parameter.matches(/^(quality|ilvl|gem_level|gem_level_progress).*/)) {
    miscFilters[parameter] = getMinMaxLevels(parameter, paramValue)
    return miscFilters
  }
  // comboio incoming
  if (parameter.matches(/ˆ(shaper|crusader|hunter|elder|redeemer|warlord|fractured|synthesised)_item/)) {
    miscFilters[parameter] = getOptionsObject(paramValue)
    return miscFilters
  }
  // outro
  if (parameter.matches(/^(identified|alternate_art|corrupted|crafted|enchanted|mirrored|veiled)/)) {
    miscFilters[parameter] = getOptionsObject(paramValue)
  }
  return miscFilters
}

function updateFilterFunction (currFilter, parameter, paramValue) {
  if (parameter === 'name' || parameter === 'type') {
    currFilter.query[parameter] = paramValue.toString()
  } else if (parameter === 'rarity') {
    currFilter.query.filters.type_filters.disabled = false
    currFilter.query.filters.type_filters.filters.rarity = paramValue.toString()
  } else if (parameter === 'typeCategory') {
    currFilter.query.filters.type_filters.disabled = false
    currFilter.query.filters.type_filters.filters.category = paramValue.toString()
  } else if (parameter.includes('map')) {
    currFilter.query.filters.map_filters.disabled = false
    currFilter.query.filters.map_filters.filters = setMapFilters(parameter, paramValue)
  } else if (parameter.includes('sockets')) {
    currFilter.query.filters.socket_filters.disabled = false
    currFilter.query.filters.socket_filters.filters.sockets = getMinMaxLevels(parameter, paramValue)
  } else if (parameter.includes('socketlinks')) {
    currFilter.query.filters.socket_filters.disabled = false
    currFilter.query.filters.socket_filters.filters.links = getMinMaxLevels(parameter, paramValue)
  } else {
    currFilter.query.filters.misc_filters.disabled = false
    currFilter.query.filters.misc_filters.filters = setMiscFilters(parameter, paramValue)
  }
  return currFilter
}

// TODO update the query settings
module.exports.searchItem = function (req, res) {
  let searchInfo = {
    query: {
      filters: {
        // yes there could be a way to automatize this but wtv :)
        type_filters: {
          disabled: true,
          filters: {}
        },
        map_filters: {
          disabled: true,
          filters: {
            map_tier: {}
          }
        },
        socket_filters: {
          disabled: true,
          filters: {}
        },
        misc_filters: {
          disabled: true,
          filters: {}
        }
      },
      status: {
        option: 'online'
      },
      stats: [{
        type: 'and',
        filters: []
      }]
    },
    sort: {
      price: 'asc'
    }
  }

  const isPost = (req.body && req.body.params)
  let params = isPost ? req.body.params : decodeURIComponent(req.url).split('?')[1]
  if (isPost) {
    // TODO check if this actually works lmao
    params.forEach((option) => {
      const tmp = option.split('=')
      searchInfo = updateFilterFunction(searchInfo, tmp[0], tmp[1])
    })
  } else {
    if (!params.includes('type=')) {
      params = params.replace('name=', 'type=')
    }
    const options = params.split('&')
    options.forEach((option) => {
      const tmp = option.split('=')
      searchInfo = updateFilterFunction(searchInfo, tmp[0], tmp[1])
    })
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

module.exports.fetchItemInfo = function (res) {
  const authOptions = {
    url: itemInfoUrl,
    json: true
  }
  request.get(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const reduceMethod = function (actual, next) {
        if (next.entries) {
          next.entries = next.entries.map((entry) => {
            const obj = {}
            obj.value = {
              name: entry.name,
              type: entry.type
            }
            obj.label = next.label
            obj.text = entry.text
            return obj
          })
          return actual.concat(next.entries)
        } else {
          return actual
        }
      }
      return res.send(body.result.reduce(reduceMethod, []))
    } else {
      return res.send({
        location: 'fetch item info from PoE',
        success: false,
        errorMessage: error,
        responseCode: response.statusCode
      })
    }
  })
}

module.exports.fetchStatInfo = function (res) {
  const authOptions = {
    url: statInfoUrl,
    json: true
  }
  request.get(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const reduceMethod = function (actual, next) {
        if (next.entries) {
          next.entries = next.entries.map((entry) => {
            const obj = {}
            obj.value = {
              id: entry.id
            }
            obj.label = next.label
            obj.text = entry.text
            return obj
          })
          return actual.concat(next.entries)
        } else {
          return actual
        }
      }
      return res.send(body.result.reduce(reduceMethod, []))
    } else {
      return res.send({
        location: 'fetch stat info from PoE',
        success: false,
        errorMessage: error,
        responseCode: response.statusCode
      })
    }
  })
}
