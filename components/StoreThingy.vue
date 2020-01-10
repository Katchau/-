<template>
  <div class="autism">
    <div v-if="loaded">
      <ul class="shopthingy">
        <li v-for="(item, index) in info">
          <img v-bind:src="item.picture" v-bind:alt="item.id">
          {{ item.name }}
          {{ (item.value * ratio).toFixed(5) }}
          <span v-if="isCurrency">
            {{ info[id].name }}s
          </span>
          <span v-else>
            Chaos Orbs
          </span>
          <button v-if="isCurrency" v-on:click="changearino(index, item.value)">
            Change to this currency
          </button>
        </li>
      </ul>
    </div>
    <div v-else>
      NOPE try again l8
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreThingy',
  // middleware: 'poeCurr',
  data () {
    const currency = this.getObjects()
    const banana = currency !== null
    const type = (currency[0].id === 1)
    return {
      loaded: banana,
      id: 0,
      ratio: 1,
      isCurrency: type,
      info: currency
    }
  },
  methods: {
    getObjects () {
      const tmp = this.$store.state.selection === 'currency'
      return (tmp) ? this.$store.state.currency : this.$store.state.items
    },
    changearino (id, value) {
      this.id = id
      this.ratio = 1 / value
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
    list-style: none
  }
</style>
