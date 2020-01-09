// import axios from 'axios'

export default async function ({ $axios, store }) {
  const { data } = await $axios.get('/getCurrency')
  store.dispatch('setSelection', 'currency')
  return store.dispatch('setCurrency', data)
}
