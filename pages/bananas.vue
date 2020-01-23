<template>
  <div class="bananas">
    <v-div class="center">
      <h1 class="display-3">
        Bananas
      </h1>
      <v-card>
        <nuxt-child />
      </v-card>
      <v-btn v-on:click="getThemBananas">
        Oh yes
      </v-btn>
      <div>
        {{ coiso }}?
        {{ coiso }}!
      </div>
    </v-div>
  </div>
</template>

<script>
export default {
  name: 'Bananas',

  transition: 't1',

  // TODO https://vuejs.org/v2/guide/computed.html ver se isto dp funciona com estas coizinhas
  data () {
    return {
      coiso: 'sim'
    }
  },

  methods: {
    getThemBananas () {
      const random = Math.floor(Math.random() * Math.floor(10))
      this.$router.push({
        path: `/bananas/${random}`
      })
    }
  }
}
</script>

<style scoped>
  .bananas {
    margin: 0 auto;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .center > * {
    margin: 20px
  }
</style>
