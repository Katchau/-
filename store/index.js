/*
Currency structure
id - name - picture - value (chaos worth)
 */

export const state = () => ({
  currency: null,
  items: null,
  selection: null,
  searchResults: null
})

export const mutations = {
  SET_CURRENCY (state, currency) {
    state.currency = currency
  },
  SET_SELECTION (state, page) {
    state.selection = page
  },
  SET_ITEM (state, items) {
    state.items = items
  },
  SET_RESULTS (state, results) {
    state.searchResults = results
  }
}

export const actions = {
  setCurrency ({ commit }, currency) {
    const lines = currency.lines
    const details = currency.currencyDetails
    const ret = []
    ret.push({
      name: 'Chaos Orb',
      id: 1,
      value: 1,
      picture: details[0].icon
    })
    lines.forEach((obj) => {
      const tmp = {}
      tmp.name = obj.currencyTypeName
      tmp.id = obj.receive.get_currency_id
      // tmp.value = obj.chaosEquivalent
      tmp.value = obj.receive.value
      tmp.picture = details[tmp.id - 1].icon
      ret.push(tmp)
    })
    commit('SET_CURRENCY', ret)
  },
  updateRatio ({ commit }, currency, ratio) {
    const ret = []
    ret.push(currency.filter(function (item) {
      item.value *= ratio
      return item
    }))
    commit('SET_CURRENCY', ret)
  },
  setSelection ({ commit }, selection) {
    commit('SET_SELECTION', selection)
  },
  setItems ({ commit }, items) {
    const lines = items.lines
    if (lines === undefined) {
      commit('SET_ITEM', [])
      return
    }
    const ret = []
    lines.forEach((obj) => {
      const tmp = {}
      tmp.name = obj.name
      tmp.id = obj.id
      tmp.value = obj.chaosValue
      tmp.picture = obj.icon
      tmp.baseType = obj.baseType
      ret.push(tmp)
    })
    commit('SET_ITEM', ret)
  },
  setSearchResults ({ commit }, results) {
    const ret = []
    results.result.forEach((obj) => {
      const tmp = {}
      tmp.time = obj.listing.indexed
      tmp.whisperMsg = obj.listing.whisper
      tmp.price = obj.listing.price
      tmp.picture = obj.item.icon
      tmp.itemDetails = obj.item
      ret.push(tmp)
    })
    commit('SET_RESULTS', ret)
  }
}
