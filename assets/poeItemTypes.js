export default {

  getItemTypes () {
    const itemTypes = []

    itemTypes.push({ id: 'divCard', name: 'Divination Cards' })
    itemTypes.push({ id: 'essence', name: 'Essences' })
    itemTypes.push({ id: 'prophecy', name: 'Prophecies' })
    itemTypes.push({ id: 'uniqueAccessory', name: 'Unique Accessories' })
    itemTypes.push({ id: 'uniqueArmour', name: 'Unique Armours' })
    itemTypes.push({ id: 'uniqueFlask', name: 'Unique Flasks' })
    itemTypes.push({ id: 'uniqueJewel', name: 'Unique Jewels' })
    itemTypes.push({ id: 'uniqueMap', name: 'Unique Maps' })
    itemTypes.push({ id: 'uniqueWeapon', name: 'Unique Weapons' })
    itemTypes.push({ id: 'maps', name: 'Maps (blight & synth included)' })
    itemTypes.push({ id: 'resonator', name: 'Delve Resonators' })
    itemTypes.push({ id: 'fossil', name: 'Fossils' })
    itemTypes.push({ id: 'scarab', name: 'Scarabs' })
    itemTypes.push({ id: 'incubator', name: 'Legion Incubators' })
    itemTypes.push({ id: 'oil', name: 'Oils' })

    return itemTypes
  }
}
