export default async function ({ $axios, store }) {
  const { data } = await $axios.get('/getItems?item=' + store.state.selection)
  return store.dispatch('setItems', data)
}
