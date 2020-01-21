export default {

  getItemTypes () {
    const itemTypes = []

    itemTypes.push({ value: 'divCard', name: 'Divination Cards', picture: '.png' })
    itemTypes.push({ value: 'essence', name: 'Essences', picture: '.png' })
    itemTypes.push({ value: 'prophecy', name: 'Prophecies', picture: '.png' })
    itemTypes.push({ value: 'uniqueAccessory', name: 'Unique Accessories', picture: '.png' })
    itemTypes.push({ value: 'uniqueArmour', name: 'Unique Armours', picture: '.png' })
    itemTypes.push({ value: 'uniqueFlask', name: 'Unique Flasks', picture: '.png' })
    itemTypes.push({ value: 'uniqueJewel', name: 'Unique Jewels', picture: '.png' })
    itemTypes.push({ value: 'uniqueMap', name: 'Unique Maps', picture: '.png' })
    itemTypes.push({ value: 'uniqueWeapon', name: 'Unique Weapons', picture: '.png' })
    itemTypes.push({ value: 'maps', name: 'Maps (blight & synth included)', picture: '.png' })
    itemTypes.push({ value: 'resonator', name: 'Delve Resonators', picture: '.png' })
    itemTypes.push({ value: 'fossil', name: 'Fossils', picture: '.png' })
    itemTypes.push({ value: 'scarab', name: 'Scarabs', picture: '.png' })
    itemTypes.push({ value: 'incubator', name: 'Legion Incubators', picture: '.png' })
    itemTypes.push({ value: 'oil', name: 'Oils', picture: '.png' })

    return itemTypes
  }
}
