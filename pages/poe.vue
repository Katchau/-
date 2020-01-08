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
          {{ item.value.toFixed(2) }} {{ info[id].name }}s
          <button v-on:click="changearino(index)">
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
  name: 'Poe',
  title: 'Poe a mao na mao do meu senhor',
  middleware: 'poeCurr',
  data () {
    const currency = this.getCurrency()
    const banana = currency !== null
    return {
      loaded: banana,
      id: 0,
      info: currency
    }
  },
  methods: {
    getCurrency () {
      return this.$store.state.currency
    },
    changearino (id) {
      this.id = id
    }
  }
}
</script>

<style scoped>
.shopthingy{
  list-style: none
}
</style>
