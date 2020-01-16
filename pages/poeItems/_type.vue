<template>
  <StoreThingy @setSelectedItem="searchTradeItem ($event)" />
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
  // idealmente isto seria com validate ou assim. se fosse enviado por parametros ou assim e quisessemos rejeitar
  beforeCreate () {
    if (this.$store.state.selection === null || this.$store.state.items.length === 0) {
      this.$router.push({
        path: '/poe'
      })
    }
  },
  methods: {
    searchTradeItem (obj) {
      if (obj.baseType === undefined) {
        return
      }
      this.$router.push({
        path: '/poeItems/currentMarket/' + obj.name + '&' + obj.baseType
      })
    }
  }
}
</script>

<style slot-scope="component">
  img:hover, img.nuxt-link-active {
    cursor: pointer;
  }
  img:active {
    cursor: wait;
  }
</style>
