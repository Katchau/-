<template>
  <div class="autism">
    <div>
      <ul class="shopthingy">
        <h1>
          {{ title }}
        </h1>
        <li v-for="re in results">
          <div>
            <img v-bind:src="re.picture" v-bind:alt="re.itemDetails.name">
            {{ re.itemDetails.name }}
            {{ (re.price.amount).toFixed(2) }}
            <span>
              {{ re.price.currency }}
            </span>
          </div>
          <textarea v-model="re.whisperMsg" class="copyCoiso" disabled />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// const url = require('url') new url.URL('this.$route.params.query')

export default {
  name: 'Query',

  computed: {
    title () {
      return this.$route.params.query.toString().replace('&', ' ')
    }
  },
  // data () {
  //   return {
  //     results: this.$store.state.searchResults,
  //     title: this.$route.params.query.toString().replace('&', ' ')
  //   }
  // },
  // middleware: 'poeTrade',
  // isto vai dar ao mesmo que asyncData só que este necessita de dar return para dar merge com os dados a cima, enquanto que o fetch dá mais jeito para fazer pedidos
  // oops agr isto é asyncData. de qq das maneiras, isto com fetch daria ao msm, só que não seria necessário o return e teria de usar um computed para is buscar à store
  asyncData (context) {
    // return new Promise((resolve, reject) => {
    //   console.log('olup') resolve para o codigo que queres lancar seguigo de then e catch
    // })
    const tmp = context.route.params.query.toString().split('&')
    return context.$axios.get(`/searchItem?name=${tmp[0]}&type=${tmp[1]}`)
      .then(({ data }) => {
        context.store.dispatch('setSearchResults', data)
        return {
          results: context.store.getters.searchResults
        }
      })
      .catch((e) => {
        context.redirect('/poe')
      })
  }
}
</script>

<style scoped>
  .autism h1 {
    margin: auto;
  }
  .shopthingy{
    list-style: none;
    display: table;
  }
  .copyCoiso{
    width: 100%;
    overflow: hidden;
  }
</style>
