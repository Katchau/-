// import axios from 'axios'

export default function ({ $axios, store }) {
  return store.dispatch('setSelection', 'currency')
}
