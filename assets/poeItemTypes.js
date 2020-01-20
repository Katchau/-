export default {

  getItemTypes () {
    const itemTypes = []

    itemTypes.push({ value: 'divCard', name: 'Divination Cards' })
    itemTypes.push({ value: 'essence', name: 'Essences' })
    itemTypes.push({ value: 'prophecy', name: 'Prophecies' })
    itemTypes.push({ value: 'uniqueAccessory', name: 'Unique Accessories' })
    itemTypes.push({ value: 'uniqueArmour', name: 'Unique Armours' })
    itemTypes.push({ value: 'uniqueFlask', name: 'Unique Flasks' })
    itemTypes.push({ value: 'uniqueJewel', name: 'Unique Jewels' })
    itemTypes.push({ value: 'uniqueMap', name: 'Unique Maps' })
    itemTypes.push({ value: 'uniqueWeapon', name: 'Unique Weapons' })
    itemTypes.push({ value: 'maps', name: 'Maps (blight & synth included)' })
    itemTypes.push({ value: 'resonator', name: 'Delve Resonators' })
    itemTypes.push({ value: 'fossil', name: 'Fossils' })
    itemTypes.push({ value: 'scarab', name: 'Scarabs' })
    itemTypes.push({ value: 'incubator', name: 'Legion Incubators' })
    itemTypes.push({ value: 'oil', name: 'Oils' })

    return itemTypes
  }
}
