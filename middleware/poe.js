import axios from 'axios'

export const baseURL = `https://poe.ninja/api/data/`
export const standardLeague = `&league=Standard`
export const currency = `currencyoverview?&type=Currency`
export const divCard = `itemoverview?type=DivinationCard`
export const essence = `itemoverview?type=Essence`
export const fragment = `currencyoverview?type=Fragment`
export const prophecy = `itemoverview?type=Prophecy`
export const uniqueAccessory = `itemoverview?type=UniqueAccessory`
export const uniqueArmour = `itemoverview?type=UniqueArmour`
export const uniqueFlask = `itemoverview?type=UniqueFlask`
export const uniqueJewel = `itemoverview?type=UniqueJewel`
export const uniqueMap = `itemoverview?type=UniqueMap`
export const uniqueWeapon = `itemoverview?type=UniqueWeapon`
export const maps = `itemoverview?type=Map`
export const resonator = `itemoverview?type=Resonator`
export const fossil = `itemoverview?type=Fossil`
export const scarab = `itemoverview?type=Scarab`
export const incubator = `itemoverview?type=Incubator`
export const oil = `itemoverview?type=Oil`

export default async function ({ route, store }) {
  const { data } = await axios.get(baseURL + currency + standardLeague)
  return store.dispatch('setCurrency', data)
}
