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
    commit('SET_CURRENCY', currency)
  }
}
