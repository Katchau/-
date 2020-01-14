<template>
  <div>
    <h1>
      oi
    </h1>
    <div>
      {{ test }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Query',
  middleware: 'poeTrade',
  data () {
    return {
      test: this.$store.state.searchResults
    }
  }
}
</script>

<style scoped>

</style>
