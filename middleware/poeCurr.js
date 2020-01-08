import axios from 'axios'

export default async function ({ route, store }) {
  const { data } = await axios.get(`https://poe.ninja/api/data/currencyoverview?league=Standard&type=Currency`)
  return store.dispatch('setCurrency', data)
}
