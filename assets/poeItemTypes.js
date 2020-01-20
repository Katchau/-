export default {

  getItemTypes () {
    const itemTypes = []

    itemTypes.push({ value: 'divCard', name: 'Divination Cards', picture: '1.png' })
    itemTypes.push({ value: 'essence', name: 'Essences', picture: '1.png' })
    itemTypes.push({ value: 'prophecy', name: 'Prophecies', picture: '1.png' })
    itemTypes.push({ value: 'uniqueAccessory', name: 'Unique Accessories', picture: '1.png' })
    itemTypes.push({ value: 'uniqueArmour', name: 'Unique Armours', picture: '1.png' })
    itemTypes.push({ value: 'uniqueFlask', name: 'Unique Flasks', picture: '1.png' })
    itemTypes.push({ value: 'uniqueJewel', name: 'Unique Jewels', picture: '1.png' })
    itemTypes.push({ value: 'uniqueMap', name: 'Unique Maps', picture: '1.png' })
    itemTypes.push({ value: 'uniqueWeapon', name: 'Unique Weapons', picture: '1.png' })
    itemTypes.push({ value: 'maps', name: 'Maps (blight & synth included)', picture: '1.png' })
    itemTypes.push({ value: 'resonator', name: 'Delve Resonators', picture: '1.png' })
    itemTypes.push({ value: 'fossil', name: 'Fossils', picture: '1.png' })
    itemTypes.push({ value: 'scarab', name: 'Scarabs', picture: '1.png' })
    itemTypes.push({ value: 'incubator', name: 'Legion Incubators', picture: '1.png' })
    itemTypes.push({ value: 'oil', name: 'Oils', picture: '1.png' })

    return itemTypes
  }
}
