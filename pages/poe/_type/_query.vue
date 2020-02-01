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
            <div v-on:click="flip(i)" :class="re.flipped ? 'flipImage flipped' : 'flipImage'">
              <div class="flipper">
                <v-img v-bind:src="re.picture" v-bind:alt="re.itemDetails.name" max-width="40%" class="conteudo front" contain>
                  <div v-if="re.itemDetails.sockets !== undefined" class="fill-height hoverCenas">
                    <Sockets v-if="re.itemDetails.sockets.length > 0" :sockets="re.itemDetails.sockets" />
                  </div>
                </v-img>
                <ItemDisplayer :item="re.itemDetails" class="back" />
              </div>
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
import Sockets from '../../../components/Sockets'
export default {
  name: 'Query',
  components: { Sockets, ItemDisplayer },
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
      return this.$route.params.query.toString().replace(/&.*=.*/, '').replace('&', ' ')
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
    let queryString = `/searchItem?name=${tmp[0]}`
    for (let i = 1; i < tmp.length; i++) {
      if (i === 1 && !tmp[1].includes('=')) {
        queryString += `&type=${tmp[i]}`
      } else {
        queryString += `&${tmp[i]}`
      }
    }
    return context.$axios.get(queryString)
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
    },

    flip (index) {
      this.$store.dispatch('changeFlipState', index)
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
  .hoverCenas{
    transition: opacity 0.5s;
    opacity: 0;
  }
  .hoverCenas:hover{
    opacity: 100%;
    background: rgb(189,189,189);
    background: radial-gradient(circle, rgba(189,189,189,1) 0%, rgba(163,168,173,0) 59%);
  }
  .flipImage{
    perspective: 1000px;
  }
  .front, .back{
    backface-visibility: hidden;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
  }
  .front{
    z-index: 2;
  }
  .back{
    transform: rotateY(180deg);
    position: absolute;
  }
  .flipImage.flipped .front{
    transform: rotateY(-180deg);
  }
  .flipImage.flipped .back{
    transform: rotateY(0);
  }
  .flipper{
    position: relative;
  }
</style>
