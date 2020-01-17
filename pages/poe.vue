<template>
  <div class="autism">
    <div>
      <h1>
        Será que isto irá funcionar?
      </h1>
      <Dropdown :obj-data="tmp" @setSelectedOption="selectOption ($event)" />
      <v-btn v-on:click="changePage" small>
        Let's fly awayyyyyyyyyyyyyyy
      </v-btn>
    </div>
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
      tmp: itemTypes.getItemTypes()
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
      this.answer = obj
      this.$store.dispatch('setSelection', this.answer)
    }

  }
}
</script>

<style scoped>

</style>
