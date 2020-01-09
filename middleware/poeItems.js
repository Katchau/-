export default async function ({ $axios, store }) {
  const { data } = await $axios.get(store.state.selection)
  return store.dispatch('setCurrency', data)
}
