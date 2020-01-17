export default async function ({ $axios, store, route }) {
  if (store.getters.selection === null) {
    store.dispatch('setSelection', route.params.type)
  }
  const { data } = await $axios.get('/getItems?item=' + store.getters.selection)
  return store.dispatch('setItems', data)
}
