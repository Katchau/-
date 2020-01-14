<template>
  <div class="autism">
    <div>
      <ul class="shopthingy">
        <h1>
          {{ title }}
        </h1>
        <li v-for="re in results">
          <div>
            <img v-bind:src="re.picture" v-bind:alt="re.itemDetails.name">
            {{ re.itemDetails.name }}
            {{ (re.price.amount).toFixed(2) }}
            <span>
              {{ re.price.currency }}
            </span>
          </div>
          <textarea v-model="re.whisperMsg" class="copyCoiso" disabled />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// const url = require('url') new url.URL('this.$route.params.query')

export default {
  name: 'Query',
  middleware: 'poeTrade',
  data () {
    return {
      results: this.$store.state.searchResults,
      title: this.$route.params.query.toString().replace('&', ' ')
    }
  }
}
</script>

<style scoped>
  .autism h1 {
    margin: auto;
  }
  .shopthingy{
    list-style: none;
    display: table;
  }
  .copyCoiso{
    width: 100%;
    overflow: hidden;
  }
</style>
