// import axios from 'axios'

export default async function ({ $axios, store }) {
  const { data } = await $axios.get('/getCurrency')
  return store.dispatch('setCurrency', data)
}
