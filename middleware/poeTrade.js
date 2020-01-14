
export default async function ({ $axios, store, route }) {
  const { data } = await $axios.get('/searchItem')
  return store.dispatch('setSearchResults', data)
}
