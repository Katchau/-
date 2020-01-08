import axios from 'axios'

export default async function ({ route, store }) {
  const { data } = await axios.get(`https://poe.ninja/api/data/currencyoverview?league=Metamorph&type=Currency`)
  return store.dispatch('setCurrency', data)
}
