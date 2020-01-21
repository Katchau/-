<template>
  <div class="autism">
    <div v-if="loaded">
      <Dropdown v-if="!isCurrency" :obj-data="fds" :is-image-type="true" @setSelectedOption="changearino ($event)" class="d-md-flex d-lg-none" />
      <SideSelector v-if="!isCurrency" :obj-data="fds" @setSelectedOption="changearino ($event)" class="d-none d-lg-flex" />
      <div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Origin
                </th>
                <th class="text-left">
                  Map
                </th>
                <th class="text-left">
                  Ratio
                </th>
                <th class="text-left">
                  Exchange Object
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in info">
                <td><img v-bind:src="item.picture" v-on:click="searchItem (item)" v-bind:alt="item.id"></td>
                <td class="text-left">
                  {{ item.displayName || item.name }}
                </td>
                <td class="text-left">
                  {{ (item.value / ratio.value).toFixed(5) }}
                </td>
                <td v-if="isCurrency">
                  {{ ratio.name }}s
                </td>
                <td v-else>
                  <img v-bind:src="ratio.picture" v-bind:alt="ratio.id">
                </td>
                <v-btn v-if="isCurrency" v-on:click="changearino(item)" rounded>
                  Change to this currency
                </v-btn>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
    <div v-else>
      {{ throwError }}
    </div>
  </div>
</template>

<script>
import SideSelector from './SideSelector'
export default {
  name: 'StoreThingy',
  components: { SideSelector },
  // middleware: 'poeCurr',

  data () {
    return {
      loaded: false,
      ratio: null,
      isCurrency: false,
      info: [],
      fds: null
    }
  },

  computed: {
    throwError () {
      return this.$nuxt.error({ statusCode: 619, message: 'PoE API data is unavailable right now' })
    }
  },

  created () {
    const objList = this.getObjects()
    const loaded = objList !== null
    const type = (objList.length === 0 || objList[0].id === 1)
    this.loaded = loaded
    this.isCurrency = type
    this.info = objList
    this.ratio = this.$store.getters.ratio
    this.fds = this.$store.getters.currency
  },

  methods: {

    getObjects () {
      const tmp = this.$store.getters.selection === 'currency'
      return (tmp) ? this.$store.getters.currency : this.$store.getters.items
    },

    changearino (obj) {
      this.$store.dispatch('setRatio', obj)
      this.ratio = this.$store.getters.ratio
    },

    searchItem (item) {
      if (!this.isCurrency) {
        this.$emit('setSelectedItem', item)
      }
    }

  }
  // watch: {
  //   ratio (oldValue, newValue) {
  //     this.$store.dispatch()
  //   }
  // },
}
</script>

<style scoped>
  .shopthingy{
    list-style: none;
    display: table;
  }
  .v-btn{
    text-transform: lowercase;
  }
</style>
