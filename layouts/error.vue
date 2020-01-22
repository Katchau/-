<template>
  <div class="container">
    <div class="center">
      <img v-bind:src="img" alt="error image" />
      <h1 class="text-center font-weight-bold display-3">
        Oh boy, you done goofed
      </h1>
      <h2 v-if="error.statusCode === 404" class="text-center text-capitalize font-italic">
        You a sneaky little bastard aren't ya. Go back to the homepage and stop sniffing
      </h2>
      <h2 v-else class="text-center text-capitalize font-italic">
        {{ error.message }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      img: '/../images/oops.gif'
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
