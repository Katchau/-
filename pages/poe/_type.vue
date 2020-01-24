<template>
  <div>
    <nuxt-child />
    <StoreThingy :page-title="type" @setSelectedItem="searchTradeItem ($event)" />
  </div>
</template>

<script>
import StoreThingy from '../../components/StoreThingy'

export default {
  name: 'Type',

  transition: 't2',

  components: {
    StoreThingy
  },

  middleware: 'poeItems',

  data () {
    return {
      type: this.$route.params.type,
      search: false
    }
  },

  // idealmente isto seria com validate ou assim. se fosse enviado por parametros ou assim e quisessemos rejeitar
  beforeCreate () {
    if (this.$store.state.selection === null || this.$store.state.items.length === 0) {
      // this.$router.push({
      //   path: '/poe'
      // })
      return this.$nuxt.error({ statusCode: 404, message: 'Invalid URL' })
    }
  },

  methods: {

    searchTradeItem (obj) {
      if (obj.baseType === undefined) {
        return
      }
      this.search = true
      this.$router.push({
        path: `/poe/${this.type}/${obj.name}&${obj.baseType}`
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
