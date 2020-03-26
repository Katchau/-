<template>
  <v-form>
    <v-row v-for="(row, key) in rows" :key="'row' + key">
      <SearchOptions v-for="(column, key2) in row" :key="'col' + key2" :name="column.name" :fields="column.fields" @searchAnswer="buildAnswer" />
    </v-row>
  </v-form>
</template>

<script>
import SearchOptions from './SearchOptions'
export default {
  name: 'SearchHeader',
  components: { SearchOptions },
  data () {
    return {
      searchOptions: {},
      rows: [
        [
          {
            name: 'Type Filters',
            fields: [
              {
                label: 'Item Category',
                isMinMax: false,
                items: this.getItemObject('Any,Jewel,Abyss Jewel,Weapon,One handed Weapon,One handed melee Weapon,Two handed Weapon,Two handed melee Weapon,Bow,Claw,Dagger,One handed Axe,Two handed Axe,One handed Sword,Two handed Sword,Mace,Sceptre,Two handed mace,Staff,Wand,Armour,Chest,Helmet,Boots,Gloves,Shield,Quiver,Accessory,Ring,Amulet,Belt', ',jewel,jewel.abyss,weapon,weapon.one,weapon.onemelee,weapon.two,weapon.twomelee,weapon.bow,weapon.claw,weapon.dagger,weapon.oneaxe,weapon.twoaxe,weapon.onesword,weapon.twosword,weapon.onemace,weapon.sceptre,weapon.twomace,weapon.staff,weapon.wand,armour,armour.chest,armour.helmet,armour.boots,armour.gloves,armour.shield,armour.quiver,accessory,accessory.ring,accessory.amulet,accessory.belt', 'typeCategory')
              },
              {
                label: 'Item Rarity',
                isMinMax: false,
                items: this.getItemObject('Any,Any Non-Unique,Unique,Relic,Rare,Magic,Normal', ',nonunique,unique,uniquefoil,rare,magic,normal', 'rarity')
              }
            ]
          },
          {
            name: 'Maps',
            fields: [
              {
                label: 'Map Tier',
                isMinMax: true,
                items: []
              },
              {
                label: 'Shaped Map',
                isMinMax: false,
                items: this.getDefaultItem('map_shaped')
              },
              {
                label: 'Elder Map',
                isMinMax: false,
                items: this.getDefaultItem('map_elder')
              },
              {
                label: 'Blighted Map',
                isMinMax: false,
                items: this.getDefaultItem('map_blighted')
              },
              {
                label: 'Map Series',
                isMinMax: false,
                items: []
              }
            ]
          }
        ],
        [
          {
            name: 'Item Search',
            fields: [
              {
                label: 'Item Name',
                isMinMax: false,
                items: this.$store.getters.itemInfo
              }
            ]
          }
        ]
      ]
    }
  },

  methods: {
    getItemObject (names, list, parameterType) {
      const items = []
      const nameArray = names.split(',')
      const listArray = list.split(',')
      listArray.forEach((obj, i) => {
        items.push({
          text: nameArray[i],
          value: {
            parameter: parameterType,
            parameterValue: obj
          }
        })
      })
      return items
    },
    getDefaultItem (parameterType) {
      return [
        {
          text: 'Any',
          value: {
            parameter: parameterType,
            parameterValue: undefined
          }
        },
        {
          text: 'Yes',
          value: {
            parameter: parameterType,
            parameterValue: 'true'
          }
        },
        {
          text: 'No',
          value: {
            parameter: parameterType,
            parameterValue: 'false'
          }
        }
      ]
    },
    buildAnswer (answer) {
      if (answer.parameter) {
        this.searchOptions[answer.parameter] = answer.parameterValue
      } else {
        console.log(answer)
      }
    }
  }
}
</script>

<style scoped>

</style>
