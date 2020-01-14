
export default async function ({ $axios, store, route }) {
  const tmp = route.params.query.toString().split('&')
  const { data } = await $axios.get('/searchItem?name=' + tmp[0] + '&type=' + tmp[1])
  return store.dispatch('setSearchResults', data)
}
