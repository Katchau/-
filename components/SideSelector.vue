<template>
  <v-container>
    <v-navigation-drawer
      expand-on-hover
      right
      absolute
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item class="px-0" two-line>
          <v-list-item-avatar>
            <v-icon x-large>mdi-swap-horizontal-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Change Exchange Object</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in obj"
          :key="item.name"
          link
        >
          <v-list-item-icon>
            <v-img
              :src="item.picture"
              contain
            />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'SideSelector',
  props: {
    objData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      obj: [],
      answer: null
    }
  },

  created () {
    this.setObjData()
  },

  methods: {
    setObjData () {
      this.obj = this.objData
    },

    selectOption () {
      this.$emit('setSelectedOption', this.answer)
    }
  }
}
</script>

<style scoped>

</style>
