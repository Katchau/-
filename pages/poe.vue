<template>
  <div class="autism">
    <div>
      <input v-model="answer">
      <button v-on:click="changePage">
        Let's fly awayyyyyyyyyyyyyyy
      </button>
    </div>
    <StoreThingy />
  </div>
</template>

<script>
import StoreThingy from '../components/StoreThingy'

export default {
  name: 'Poe',
  components: {
    StoreThingy
  },
  middleware: 'poeCurr',
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    changePage () {
      this.$store.dispatch('setSelection', this.answer)
      this.$router.push({
        path: '/poeItems/' + this.answer
      })
    }
  }
}
</script>

<style scoped>

</style>
