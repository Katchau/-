<template>
  <v-card class="itemInfo">
    <!--    {{ item.itemDetails.name }}-->
    <!--    <p v-if="item.price !== null">-->
    <!--      {{ (item.price.amount).toFixed(2) }}-->
    <!--      <span>-->
    <!--        {{ item.price.currency }}-->
    <!--      </span>-->
    <!--    </p>-->
    <div :class="checkCorruption + ' itemHeader'" :style="checkBackgroundColour">
      <div :class="changeHeaderColour + ' headerInfo itemHeader'">
        <div>
          Item level: {{ item.ilvl }}
        </div>
        <div v-if="item.identified && item.properties">
          <div v-for="(prop, i) in item.properties" :key="'a' + i">
            {{ prop.name }}
            <span v-if="prop.values[0] !== undefined">
              <span v-if="prop.values[0][0] !== undefined">
                {{ prop.values[0][0] }}
              </span>
              <span v-else>
                {{ prop.values[0] }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--      todo melhorar isto aqui-->
    <v-divider />
    <div v-if="item.implicitMods" v-for="(imp, i) in item.implicitMods" :key="'b' + i" class="">
      {{ imp }}
    </div>
    <div v-if="item.utilityMods" v-for="(imp, i) in item.utilityMods" :key="'g' + i" class="">
      {{ imp }}
    </div>
    <v-divider />
    <div v-if="item.explicitMods" v-for="(exp, i) in item.explicitMods" :key="'c' + i" class="">
      {{ exp }}
    </div>
    <div v-if="item.enchantMods" v-for="(exp, i) in item.enchantMods" :key="'d' + i" class="">
      Enchanted: {{ exp }}
    </div>
    <div v-if="item.fracturedMods" v-for="(exp, i) in item.fracturedMods" :key="'e' + i" class="">
      Fractured: {{ exp }}
    </div>
    <div v-for="(craft, d) in item.craftedMods" :key="'f' + d" class="cyan--text">
      Crafted: {{ craft }}
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ItemDisplayer',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    checkCorruption () {
      return this.item.corrupted ? 'red--text' : ''
    },

    changeHeaderColour () {
      return this.$vuetify.theme.dark ? 'darkHeader' : 'whiteHeader'
    },

    // todo melhorar isto aqui, está cancro
    checkBackgroundColour () {
      const tmp = []
      const ret = {
        background: ''
      }
      if (this.item.isRelic !== undefined) {
        ret.background = 'linear-gradient(180deg, rgba(255,248,0,1) 0%, rgba(35,144,150,1) 64%, rgba(0,212,255,1) 100%)'
        return ret
      }
      if (this.item.shaper) {
        tmp.push('rgba(56,50,180,1)')
      }
      if (this.item.elder) {
        tmp.push('rgba(103,65,143,1)')
      }
      if (this.item.influences !== undefined) {
        const influence = this.item.influences
        // as of now you cannot have more than 1. inb4 this changes :')
        // lmao last update made possible having 2. oops, need to make changes here then
        if (influence.hunter) {
          tmp.push('rgba(26,101,30,1)')
        }
        if (influence.crusader) {
          tmp.push('rgba(198,51,51,1)')
        }
        if (influence.redeemer) {
          tmp.push('rgba(28,126,181,1)')
        }
        if (influence.warlord) {
          tmp.push('rgba(232,221,60,1)')
        }
      }
      if (tmp.length === 1) {
        ret.background = tmp[0]
      } else if (tmp.length > 1) {
        ret.background = `linear-gradient(180deg, ${tmp[0]} 0%, ${tmp[1]} 100%)`
      }
      return ret
    }

  }

}
</script>

<style scoped>
  .reliquia{
    background: rgb(255,248,0);
    background: linear-gradient(180deg, rgba(255,248,0,1) 0%, rgba(35,144,150,1) 64%, rgba(0,212,255,1) 100%);
  }
  .headerInfo{
    /*display: table;*/
    margin: 5%;
  }
  .whiteHeader{
    background-color: white;
  }
  .darkHeader{
    background-color: #424242;
  }
  .itemHeader{
    border-style: solid;
    border-color: darkgray;
  }
  .itemInfo{
  }
  .shaper{
    /*background: url("../static/images/poe/shaper.png") no-repeat;*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
  }
</style>
