<template>
  <div class="autism">
    <h1>
      Será que isto irá funcionar?
    </h1>
    <div v-if="loaded">
      {{ info }}
    </div>
    <div v-else>
      NOPE
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Poe',
  title: 'Poe a mao na mao do meu senhor',
  data () {
    return {
      loaded: false,
      info: {}
    }
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(`https://poe.ninja/api/data/currencyoverview?league=Metamorph&type=Currency`)
    return {
      info: data,
      loaded: true
    }
  }
}
</script>

<style scoped>

</style>
