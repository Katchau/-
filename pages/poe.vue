<template>
  <div class="autism">
    <h1>
      Será que isto irá funcionar?
    </h1>
    <div v-if="loaded">
      {{ info }}
    </div>
    <div v-else>
      NOPE
    </div>
  </div>
</template>

<script>
export default {
  name: 'Poe',
  title: 'Poe a mao na mao do meu senhor',
  middleware: 'poeCurr',
  // data () {
  //   return {
  //     loaded: false,
  //     info: {}
  //   }
  // },
  currency: {},
  data () {
    this.currency = this.getCurrency()
    const banana = this.currency !== null
    return {
      loaded: banana,
      info: this.currency
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

</style>
