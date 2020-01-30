<template>
  <div :class="checkBackgroundColour">
    <!--    {{ item.itemDetails.name }}-->
    <!--    <p v-if="item.price !== null">-->
    <!--      {{ (item.price.amount).toFixed(2) }}-->
    <!--      <span>-->
    <!--        {{ item.price.currency }}-->
    <!--      </span>-->
    <!--    </p>-->
    <div>
      Item level: {{ item.ilvl }}
    </div>
    <div v-if="item.identified" :class="checkCorruption">
      <div v-if="item.properties">
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
      <!--      todo melhorar isto aqui-->
      <div v-if="item.implicitMods" v-for="(imp, i) in item.implicitMods" :key="'b' + i">
        {{ imp }}
      </div>
      <div v-if="item.explicitMods" v-for="(exp, i) in item.explicitMods" :key="'c' + i">
        {{ exp }}
      </div>
      <div v-if="item.enchantMods" v-for="(exp, i) in item.enchantMods" :key="'d' + i">
        Enchanted: {{ exp }}
      </div>
      <div v-if="item.fracturedMods" v-for="(exp, i) in item.fracturedMods" :key="'e' + i">
        Fractured: {{ exp }}
      </div>
      <div v-if="item.craftedtMods" v-for="(exp, i) in item.craftedtMods" :key="'f' + i">
        Crafted: {{ exp }}
      </div>
    </div>
  </div>
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
      return this.item.corruption ? 'red' : ''
    },
    // todo melhorar isto aqui, por imagens em vez desta porra
    checkBackgroundColour () {
      if (this.item.isRelic !== undefined) {
        return 'reliquia'
      }
      if (this.item.shaper) {
        return 'violet'
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
</style>
