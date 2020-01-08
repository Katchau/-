<template>
  <div class="autism">
    <h1>
      Será que isto irá funcionar?
    </h1>
    <div v-if="loaded">
      <ul class="shopthingy">
        <li v-for="item in info">
          <img v-bind:src="item.picture" alt="oops i did it again">
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
      info: currency
    }
  },
  methods: {
    getCurrency () {
      return this.$store.state.currency
    }
  }
}
</script>

<style scoped>
.shopthingy{
  list-style: none
}
</style>
