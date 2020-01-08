/*
Currency structure
id - name - picture - chaos worth
 */

export const state = () => ({
  currency: null
})

export const mutations = {
  SET_CURRENCY (state, currency) {
    state.currency = currency
  }
}

export const actions = {
  setCurrency ({ commit }, currency) {
    const lines = currency.lines
    const details = currency.currencyDetails
    const ret = []
    lines.forEach((obj) => {
      const tmp = {}
      tmp.name = obj.currencyTypeName
      tmp.id = obj.receive.get_currency_id
      tmp.value = obj.chaosEquivalent
      tmp.picture = details[tmp.id - 1].icon
      ret.push(tmp)
    })
    commit('SET_CURRENCY', ret)
  }
}
