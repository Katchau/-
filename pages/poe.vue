<template>
  <div>
    <LoadingDialog />
    <Dropdown :obj-data="currencyList" :is-image-type="true" @setSelectedOption="changearino($event)" />
    <nuxt-child />
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown'
import LoadingDialog from '../components/PageSections/LoadingDialog'
export default {
  name: 'Poe',

  transition: 't1',

  components: {
    LoadingDialog,
    Dropdown
  },

  data () {
    return {
      currencyList: [],
      overMenu: false
    }
  },

  created () {
    this.currencyList = this.$store.getters.currency
  },

  methods: {

    changearino (obj) {
      this.$store.dispatch('setRatio', obj)
    }

  }
}
</script>

<style scoped>

</style>
