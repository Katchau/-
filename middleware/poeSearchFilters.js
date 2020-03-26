export default async function ({ $axios, store }) {
  const items = await $axios.get('/fetchItemInfo')
  const stats = await $axios.get('/fetchStatInfo')
  store.dispatch('setItemInfo', items.data)
  // config.url TODO meter isto em cima com um promisses all
  return store.dispatch('setStatInfo', stats.data)
}
