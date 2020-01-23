<template>
  <div class="autism">
    <StoreThingy />
  </div>
</template>

<script>
import StoreThingy from '../components/StoreThingy'
import itemTypes from '~/assets/poeItemTypes'

export default {
  name: 'Poe',

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
        path: `/poeItems/${this.answer}`
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
