<template>
  <StoreThingy />
</template>

<script>
import StoreThingy from '../components/StoreThingy'

export default {
  name: 'Poe',
  components: {
    StoreThingy
  },
  middleware: 'poeCurr'
}
</script>

<style scoped>
.shopthingy{
  list-style: none
}
</style>
