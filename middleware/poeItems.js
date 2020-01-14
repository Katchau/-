export default async function ({ $axios, store, route }) {
  if (store.state.selection === null) {
    store.dispatch('setSelection', route.params.type)
  }
  const { data } = await $axios.get('/getItems?item=' + store.state.selection)
  return store.dispatch('setItems', data)
}
