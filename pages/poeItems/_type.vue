<template>
  <StoreThingy />
</template>

<script>
import StoreThingy from '../../components/StoreThingy'

export default {
  name: 'Type',
  components: {
    StoreThingy
  },
  middleware: 'poeItems',
  data () {
    return {
      type: this.$route.params.type
    }
  },
  beforeCreate () {
    if (this.$store.state.selection === null || this.$store.state.items.length === 0) {
      this.$router.push({
        path: '/poe'
      })
    }
  }
}
</script>

<style scoped>

</style>
