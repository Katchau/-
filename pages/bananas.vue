<template>
  <div id="main">
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
  #main {
    margin: 0 auto;
    min-height: 100vh;
    display: table;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>
