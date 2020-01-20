<template>
  <div class="autism">
    <div v-if="loaded">
      <ul class="shopthingy">
        <li v-for="(item) in info">
          <img v-bind:src="item.picture" v-on:click="searchItem (item)" v-bind:alt="item.id">
          {{ item.displayName || item.name }}
          {{ (item.value / ratio.value).toFixed(5) }}
          <span v-if="isCurrency">
            {{ ratio.name }}s
          </span>
          <span v-else>
            <Dropdown :obj-data="fds" :is-image-type="true" @setSelectedOption="changearino2 ($event)" />
          </span>
          <v-btn v-if="isCurrency" v-on:click="changearino(item)" rounded>
            Change to this currency
          </v-btn>
        </li>
      </ul>
    </div>
    <div v-else>
      {{ throwError }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreThingy',
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
    getCurrencyList () {
      return this.$store.getters.currency
    },
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
    this.fds = [{
      name: 'wtf',
      value: 1,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    }]
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
    },

    changearino2 (value) {
      const currObj = this.fds.find(obj => obj.value === value)
      this.changearino(currObj)
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
