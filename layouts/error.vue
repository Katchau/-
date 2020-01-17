<template>
  <div>
    <h1>
      Oh boy, you done goofed boy
    </h1>
    <div class="center">
      <h1 v-if="error.statusCode === 404">
        You a sneaky little bastard aren't ya. Go back to the homepage and stop sniffing
      </h1>
      <h1 v-else>
        {{ error.message }}
      </h1>
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
  }
}
</script>

<style scoped>

</style>
