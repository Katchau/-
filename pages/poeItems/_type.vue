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
  }
}
</script>

<style scoped>

</style>
