
export default async function ({ $axios, store, route }) {
  const tmp = route.params.query.toString().split('&')
  let queryString = `/searchItem?name=${tmp[0]}`
  for (let i = 1; i < tmp.length; i++) {
    if (i === 1 && !tmp[1].includes('=')) {
      queryString += `&type=${tmp[i]}`
    } else {
      queryString += `&${tmp[i]}`
    }
  }
  const { data } = await $axios.get(queryString)
  return store.dispatch('setSearchResults', data)
}
