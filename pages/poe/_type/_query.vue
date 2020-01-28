<template>
  <v-dialog v-model="dialog" class="nolose" content-class="nolose">
    <v-card>
      <v-alert v-if="success" type="success" class="stickMe">
        {{ displayMsg }}
      </v-alert>
      <v-alert v-else-if="success !== null" type="error">
        {{ displayMsg }}
      </v-alert>
      <v-list class="shopthingy center">
        <v-list-item-title class="titulo display-2 font-weight-medium">
          {{ title }}
        </v-list-item-title>
        <v-list-item v-for="(re, i) in results" :key="i">
          <div class="conteudo">
            <div>
              <v-img v-bind:src="re.picture" v-bind:alt="re.itemDetails.name" max-width="40%" class="conteudo" contain />
            </div>
            <div>
              {{ re.itemDetails.name }}
              <p v-if="re.price !== null">
                {{ (re.price.amount).toFixed(2) }}
                <span>
                  {{ re.price.currency }}
                </span>
              </p>
            </div>
            <ItemDisplayer :item="re.itemDetails" />
            <v-btn v-on:click="copyMessage(re.whisperMsg, i)" small rounded>
              Copy Whisper message to clipboard
            </v-btn>
          </div>
          <input v-bind:id="'item_' + i" v-bind:value="re.whisperMsg" class="copyCoiso" type="hidden">
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>

import ItemDisplayer from '../../../components/ItemDisplayer'
export default {
  name: 'Query',
  components: { ItemDisplayer },
  transition: 't1',

  data () {
    return {
      dialog: false,
      displayMsg: '',
      success: null
    }
  },

  computed: {
    title () {
      return this.$route.params.query.toString().replace('&', ' ')
    }
  },

  watch: {
    dialog () {
      if (!this.dialog) {
        this.$router.back()
      }
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
        context.store.dispatch('setLoadingScreen', false)
        return {
          results: context.store.getters.searchResults,
          dialog: true
        }
      })
      .catch((e) => {
        context.redirect('/poe')
      })
  },

  methods: {
    copyMessage (message, index) {
      if (document !== undefined) {
        const elCopy = document.querySelector(`#item_${index}`)
        elCopy.setAttribute('type', 'text')
        elCopy.select()
        try {
          this.success = document.execCommand('copy')
          this.displayMsg = this.success ? 'Copied to the clipboard!' : 'Couldnt Copy message :('
        } catch (err) {
          this.success = false
          this.displayMsg = 'Oh no, error copying message'
        }
        elCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      }
    }
  }
}

</script>

<style scoped>
  .titulo{
    margin: 2% auto;
    text-align: center;
  }
  .shopthingy{
    list-style: none;
  }
  .copyCoiso{
    width: 100%;
    overflow: hidden;
  }
  .conteudo{
    text-align: center;
    margin: 0 auto;
    padding-bottom: 2%;
  }
  .stickMe{
    position: sticky !important;
  }
</style>
