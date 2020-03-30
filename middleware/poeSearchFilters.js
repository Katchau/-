export default async function ({ store, $axios }) {
  await Promise.all([store.dispatch('setStatInfo', $axios), store.dispatch('setItemInfo', $axios)])
}
