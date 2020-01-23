<template>
  <div v-bind:class="autismoElevado">
    <div v-if="loaded">
      <!--      <Dropdown v-if="!isCurrency" :obj-data="fds" :is-image-type="true" @setSelectedOption="changearino ($event)" />-->
      <div>
        <v-simple-table class="shopthingy">
          <template v-slot:default>
            <thead>
              <tr>
                <th v-bind:class="textType">
                  Icon
                </th>
                <th v-bind:class="textType">
                  Currency Name
                </th>
                <th v-bind:class="textType">
                  Value
                </th>
                <th v-bind:class="textType + ` text-center`">
                  Selected Currency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in info">
                <td><img v-bind:src="item.picture" v-on:click="searchItem (item)" v-bind:alt="item.id"></td>
                <td>
                  {{ item.displayName || item.name }}
                </td>
                <td>
                  {{ (item.value / ratio.value).toFixed(5) }}
                </td>
                <td v-if="isCurrency" class="text-center">
                  {{ ratio.name }}s
                </td>
                <td v-else class="text-center">
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
export default {
  name: 'StoreThingy',
  // middleware: 'poeCurr',

  props: {
    pageTitle: {
      type: String,
      required: false,
      default: 'Currency Calculator'
    }
  },

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
    },
    autismoElevado () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'smallautism'
        case 'sm': return 'smallautism'
        case 'md': return 'autism'
        case 'lg': return 'autism'
        case 'xl': return 'autism'
        default: return 'autism'
      }
    },
    textType () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return ''
        case 'sm': return ''
        case 'md': return 'title'
        case 'lg': return 'title'
        case 'xl': return 'title'
        default: return 'title'
      }
    }
  },

  // this is bad but it works. this is because the created method isnt being called when navigating between the same dynamic nest
  watch: {
    pageTitle (oldValue, newValue) {
      if (!this.isCurrency && this.pageTitle !== 'Currency Calculator') {
        if (oldValue !== 'Currency Calculator') {
          const objList = this.getObjects()
          const loaded = objList !== null
          const type = (objList.length === 0 || objList[0].id === 1)
          this.loaded = loaded
          this.isCurrency = type
          this.info = objList
          this.ratio = this.$store.getters.ratio
          this.fds = this.$store.getters.currency
        }
      }
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
    padding: 0 20px;
    margin: 1% auto;
  }
  .v-btn{
    text-transform: lowercase;
  }
</style>
