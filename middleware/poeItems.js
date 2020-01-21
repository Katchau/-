export default async function ({ $axios, store, route }) {
  store.dispatch('setSelection', route.params.type)
  const { data } = await $axios.get('/getItems?item=' + store.getters.selection)
  return store.dispatch('setItems', data)
}
