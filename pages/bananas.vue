<template>
  <div class="autism">
    <h1>
      bananas
    </h1>
    <img v-bind:src="imgSrc" alt="oops i did it again">
    <div>
      {{ coiso }}?
      {{ coiso }}!
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bananas',
  transition: 't1',
  // TODO https://vuejs.org/v2/guide/computed.html ver se isto dp funciona com estas coizinhas
  data () {
    return {
      coiso: 'sim',
      imgSrc: 'images/banana.gif'
    }
  }
}
</script>

<style scoped>
</style>
