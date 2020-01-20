<template>
  <div class="autism">
    <div v-if="loaded">
      <ul class="shopthingy">
        <li v-for="(item, index) in info">
          <img v-bind:src="item.picture" v-on:click="searchItem (item)" v-bind:alt="item.id">
          {{ item.displayName || item.name }}
          {{ (item.value * ratio).toFixed(5) }}
          <span v-if="isCurrency">
            {{ info[id].name }}s
          </span>
          <span v-else>
            Chaos Orbs
          </span>
          <v-btn v-if="isCurrency" v-on:click="changearino(index, item.value)" rounded>
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
      id: 0,
      ratio: 1,
      isCurrency: false,
      info: []
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
  },

  methods: {

    getObjects () {
      const tmp = this.$store.getters.selection === 'currency'
      return (tmp) ? this.$store.getters.currency : this.$store.getters.items
    },

    changearino (id, value) {
      this.id = id
      this.ratio = 1 / value
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
