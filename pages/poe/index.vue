<template>
  <StoreThingy />
</template>

<script>
import itemTypes from '../../assets/poeItemTypes'
import StoreThingy from '../../components/StoreThingy'

export default {
  name: 'Index',

  components: {
    StoreThingy
  },

  data () {
    return {
      answer: '',
      tmp: itemTypes.getItemTypes().map((obj) => {
        obj.picture = `images/sidebar/${obj.picture}`
        return obj
      })
    }
  },

  middleware: 'poeCurr',

  methods: {
    changePage () {
      if (this.answer === '') {
        return
      }
      this.$router.push({
        path: `/poe/${this.answer}`
      })
    },

    selectOption (obj) {
      this.answer = obj.value
      this.$store.dispatch('setSelection', this.answer)
    }

  }
}
</script>

<style scoped>

</style>
