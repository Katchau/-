<template>
  <v-dialog v-model="dialog">
    <v-card class="nolose">
      <ul class="shopthingy">
        <v-card-title>
          {{ title }}
        </v-card-title>
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
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'Query',

  transition: 't1',

  data () {
    return {
      dialog: false
    }
  },

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
          results: context.store.getters.searchResults,
          dialog: true
        }
      })
      .catch((e) => {
        context.redirect('/poe')
      })
  }
}
</script>

<style scoped>
  .nolose {
    margin: 2% auto;
    display: table;
  }
  .nolose h1 {
    margin: auto;
  }
  .shopthingy{
    list-style: none;
  }
  .copyCoiso{
    width: 100%;
    overflow: hidden;
  }
</style>
