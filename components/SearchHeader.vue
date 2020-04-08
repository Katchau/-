<template>
  <v-form>
    <v-row v-for="(row, key) in rows" :key="'row' + key">
      <SearchOptions
        v-for="(column, key2) in row"
        :key="'col' + key2"
        :name="column.name"
        :fields="column.fields"
        @searchAnswer="buildAnswer"
      />
    </v-row>
    <v-btn @click="sendRequest">
      Search for the item you ugly twat
    </v-btn>
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
      rows: [this.getFirstRowColumns(), this.getSecondRowColumns(), this.getThirdRowColumns(), this.getForthRowColumns()]
    }
  },

  methods: {

    getSecondRowColumns () {
      return [
        {
          name: 'Type Filters',
          fields: [
            {
              label: 'Item Category',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getItemObject('Any,Jewel,Abyss Jewel,Weapon,One handed Weapon,One handed melee Weapon,Two handed Weapon,Two handed melee Weapon,Bow,Claw,Dagger,One handed Axe,Two handed Axe,One handed Sword,Two handed Sword,Mace,Sceptre,Two handed mace,Staff,Wand,Armour,Chest,Helmet,Boots,Gloves,Shield,Quiver,Accessory,Ring,Amulet,Belt', ',jewel,jewel.abyss,weapon,weapon.one,weapon.onemelee,weapon.two,weapon.twomelee,weapon.bow,weapon.claw,weapon.dagger,weapon.oneaxe,weapon.twoaxe,weapon.onesword,weapon.twosword,weapon.onemace,weapon.sceptre,weapon.twomace,weapon.staff,weapon.wand,armour,armour.chest,armour.helmet,armour.boots,armour.gloves,armour.shield,armour.quiver,accessory,accessory.ring,accessory.amulet,accessory.belt', 'typeCategory')
            },
            {
              label: 'Item Rarity',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getItemObject('Any,Any Non-Unique,Unique,Relic,Rare,Magic,Normal', ',nonunique,unique,uniquefoil,rare,magic,normal', 'rarity')
            },
            {
              label: 'Quality',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('quality', 'Quality')
            },
            {
              label: 'Item Level',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('ilvl', 'Level')
            }
          ]
        },
        {
          name: 'Maps',
          fields: [
            {
              label: 'Map Tier',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('maptier', 'Map Tier')
            },
            {
              label: 'Shaped Map',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('map_shaped')
            },
            {
              label: 'Elder Map',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('map_elder')
            },
            {
              label: 'Blighted Map',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('map_blighted')
            },
            {
              label: 'Map Series',
              isMinMax: false,
              isAutoComplete: true,
              items: []
            }
          ]
        }
      ]
    },

    getFirstRowColumns () {
      return [
        {
          name: 'Item Search',
          fields: [
            {
              label: 'Item Name',
              isMinMax: false,
              isAutoComplete: true,
              items: this.$store.getters.itemInfo
            }
          ]
        },
        {
          name: 'Item Stats',
          fields: [
            {
              label: 'Stat list',
              isMinMax: true,
              isAutoComplete: true,
              items: this.$store.getters.statInfo,
              clickedAnswer: {
                id: undefined,
                min: undefined,
                max: undefined
              }
            }
          ]
        }
      ]
    },

    getThirdRowColumns () {
      return [
        {
          name: 'Sockets',
          fields: [
            {
              label: 'Number of Sockets',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('sockets', 'Sockets')
            },
            {
              label: 'Number of Socket Links',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('socketLinks', 'Links')
            }
          ]
        },
        {
          name: 'Gems',
          fields: [
            {
              label: 'Gem Level',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('gem_level', 'Current Level')
            },
            {
              label: 'Gem Level Progress',
              isMinMax: true,
              isAutoComplete: false,
              items: this.getDefaultMinMax('gem_level_progress', 'Current Level Progress')
            }
          ]
        }
      ]
    },

    getForthRowColumns () {
      return [
        {
          name: 'Influences',
          fields: [
            {
              label: 'Shaper',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('shaper_item')
            },
            {
              label: 'Elder',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('elder_item')
            },
            {
              label: 'Crusader',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('crusader_item')
            },
            {
              label: 'Hunter',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('hunter_item')
            },
            {
              label: 'Redeemer',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('redeemer_item')
            },
            {
              label: 'Warlord',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('warlord_item')
            }
          ]
        },
        {
          name: 'Crafting Options',
          fields: [
            {
              label: 'Identified',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('identified')
            },
            {
              label: 'Corrupted',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('corrupted')
            },
            {
              label: 'Crafted',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('crafted')
            },
            {
              label: 'Enchanted',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('enchanted')
            },
            {
              label: 'Mirrored',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('mirrored')
            },
            {
              label: 'Veiled',
              isMinMax: false,
              isAutoComplete: true,
              items: this.getDefaultItem('veiled')
            }
          ]
        }
      ]
    },

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

    getDefaultMinMax (parameter, name) {
      return [
        {
          label: `Minimum ${name}`,
          value: {
            parameter: `${parameter}Min`,
            parameterValue: undefined
          }
        },
        {
          label: `Maximum ${name}`,
          value: {
            parameter: `${parameter}Max`,
            parameterValue: undefined
          }
        }]
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

    // TODO be careful if the order is changed because this is depending on that
    updateMinMaxAnswers () {
      const rowsWithMinMax = this.rows.slice(1, 3)
      rowsWithMinMax.forEach((row) => {
        row.forEach((columns) => {
          columns.fields.forEach((field) => {
            if (field.isMinMax) {
              const fieldMinValue = field.items[0].value
              const fieldMaxValue = field.items[1].value
              if (fieldMinValue.parameterValue) {
                this.searchOptions[fieldMinValue.parameter] = fieldMinValue.parameterValue
              }
              if (fieldMaxValue.parameterValue) {
                this.searchOptions[fieldMaxValue.parameter] = fieldMaxValue.parameterValue
              }
            }
          })
        })
      })
    },

    buildAnswer (answer) {
      if (answer.parameter) {
        this.searchOptions[answer.parameter] = answer.parameterValue
        return
      } else if (answer.id) {
        if (!this.searchOptions.stats) {
          this.searchOptions.stats = []
        }
        this.searchOptions.stats.push(answer)
        return
      }
      if (answer.name) {
        this.searchOptions.name = answer.name
      }
      if (answer.type) {
        this.searchOptions.type = answer.type
      }

      if (!answer.type && !answer.name) {
        // TODO provavelmente ter aqui alguma coisa
        console.log(answer)
      }
    },
    sendRequest () {
      // TODO this is the lazy method, update this after if i want to lmao
      this.updateMinMaxAnswers()
      console.log(this.searchOptions)
    },

    async tempSend () {
      await this.$axios.post('/search', this.searchOptions)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
