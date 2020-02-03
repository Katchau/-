<template>
  <v-card :class="checkBackgroundColour + ' itemInfo'">
    <!--    {{ item.itemDetails.name }}-->
    <!--    <p v-if="item.price !== null">-->
    <!--      {{ (item.price.amount).toFixed(2) }}-->
    <!--      <span>-->
    <!--        {{ item.price.currency }}-->
    <!--      </span>-->
    <!--    </p>-->
    <div :class="checkCorruption + ' itemHeader'">
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
    // todo melhorar isto aqui, por imagens em vez desta porra
    checkBackgroundColour () {
      if (this.item.isRelic !== undefined) {
        return 'reliquia'
      }
      if (this.item.shaper) {
        return 'shaper'
      }
      if (this.item.elder) {
        return 'purple'
      }
      if (this.item.influences !== undefined) {
        const influence = this.item.influences
        // as of now you cannot have more than 1. inb4 this changes :')
        // lmao last update made possible having 2. oops, need to make changes here then
        if (influence.hunter) {
          return 'green'
        }
        if (influence.crusader) {
          return 'orange'
        }
        if (influence.redeemer) {
          return 'blue'
        }
        if (influence.warlord) {
          return 'yellow'
        }
      }
      return ''
    }

  }

}
</script>

<style scoped>
  .reliquia{
    background: rgb(255,248,0);
    background: linear-gradient(180deg, rgba(255,248,0,1) 0%, rgba(35,144,150,1) 64%, rgba(0,212,255,1) 100%);
  }
  .itemInfo{
    /*display: table;*/
  }
  .itemHeader{
    border-style: solid;
    border-color: darkgray;
  }
  .shaper{
    background: url("../static/images/poe/shaper.png") no-repeat;
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
  }
</style>
