<template>
  <div class="autism">
    <h1>
      oi
    </h1>
    <div>
      <ul class="shopthingy">
        <li v-for="re in results">
          <div>
            <img v-bind:src="re.picture" v-bind:alt="re.itemDetails.name">
            {{ re.itemDetails.name }}
            {{ (re.price.amount).toFixed(2) }}
            <span>
            {{ re.price.currency }}
            </span>
          </div>
          <textarea class="copyCoiso" v-model="re.whisperMsg" disabled />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Query',
  middleware: 'poeTrade',
  data () {
    return {
      results: this.$store.state.searchResults
    }
  }
}
</script>

<style scoped>
  .shopthingy{
    list-style: none;
    display: table;
  }
  .copyCoiso{
    width: 100%;
    overflow: hidden;
  }
</style>
