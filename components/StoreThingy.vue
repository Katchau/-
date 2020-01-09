<template>
  <div class="autism">
    <h1>
      Será que isto irá funcionar?
    </h1>
    <div v-if="loaded">
      <ul class="shopthingy">
        <li v-for="(item, index) in info">
          <img v-bind:src="item.picture" v-bind:alt="item.id">
          {{ item.name }}
          {{ (item.value * ratio).toFixed(5) }} {{ info[id].name }}s
          <button v-on:click="changearino(index, item.value)">
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
    const currency = this.getCurrency()
    const banana = currency !== null
    return {
      loaded: banana,
      id: 0,
      ratio: 1,
      info: currency
    }
  },
  methods: {
    getCurrency () {
      return this.$store.state.currency
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
