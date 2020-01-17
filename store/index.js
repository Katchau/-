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

  nuxtServerInit (vuexContext, context) {
    return context.$axios.get('/getCurrency')
      .then(({ data }) => {
        vuexContext.dispatch('setCurrency', data)
      })
      .catch((e) => {
        vuexContext.commit('SET_SELECTION', 'err')
        vuexContext.dispatch('setCurrency', [])
      })
  },

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
      tmp.displayName = (obj.links !== undefined && obj.links !== 0) ? obj.name + ' with ' + obj.links + ' links' : obj.name
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
    if (results.result === undefined || results.result.length === 0) {
      return commit('SET_RESULTS', [])
    }
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

export const getters = {

  searchResults (state) {
    return state.searchResults
  },

  currency (state) {
    return state.currency
  },

  items (state) {
    return state.items
  },

  selection (state) {
    return state.selection
  }

}
