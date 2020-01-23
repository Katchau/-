<template>
  <v-img v-bind:src="getBananaURL" contain class="bananImage" />
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
.bananImage{
  max-height: 420px;
}
</style>
