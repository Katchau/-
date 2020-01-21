export default {

  getItemTypes () {
    const itemTypes = []

    itemTypes.push({ value: 'divCard', name: 'Divination Cards', picture: '.jpeg' })
    itemTypes.push({ value: 'essence', name: 'Essences', picture: '.jpeg' })
    itemTypes.push({ value: 'prophecy', name: 'Prophecies', picture: '.png' })
    itemTypes.push({ value: 'uniqueAccessory', name: 'Unique Accessories', picture: '.jpeg' })
    itemTypes.push({ value: 'uniqueArmour', name: 'Unique Armours', picture: '.jpeg' })
    itemTypes.push({ value: 'uniqueWeapon', name: 'Unique Weapons', picture: '.jpeg' })
    itemTypes.push({ value: 'uniqueFlask', name: 'Unique Flasks', picture: '.jpeg' })
    itemTypes.push({ value: 'uniqueJewel', name: 'Unique Jewels', picture: '.jpeg' })
    itemTypes.push({ value: 'uniqueMap', name: 'Unique Maps', picture: '.jpeg' })
    itemTypes.push({ value: 'maps', name: 'Maps (blight & synth included)', picture: '.jpeg' })
    itemTypes.push({ value: 'resonator', name: 'Delve Resonators', picture: '.jpeg' })
    itemTypes.push({ value: 'fossil', name: 'Fossils', picture: '.jpeg' })
    itemTypes.push({ value: 'scarab', name: 'Scarabs', picture: '.jpeg' })
    itemTypes.push({ value: 'incubator', name: 'Legion Incubators', picture: '.jpeg' })
    itemTypes.push({ value: 'oil', name: 'Oils', picture: '.jpeg' })

    return itemTypes
  }
}
