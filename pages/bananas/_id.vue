<template>
  <v-img v-bind:src="getBananaURL" max-height="420px" contain />
</template>

<script>
export default {
  name: 'Id',

  transition: 't1',

  data () {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    getBananaURL () {
      return `/../images/bananas/banana${this.id}.gif`
    }
  }
}
</script>

<style scoped>
</style>
