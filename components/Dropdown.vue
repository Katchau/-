<template>
  <v-menu
    :close-on-content-click="true"
    absolute
  >
    <template v-slot:activator="{ on }">
      <v-btn
        :fixed="true"
        v-on="on"
        fab
        color="#ff4081"
        bottom
        right
        class="currBtn"
      >
        <v-icon x-large>
          mdi-swap-horizontal-circle
        </v-icon>
      </v-btn>
    </template>

    <v-card style="max-height: 420px">
      <v-list>
        <v-list-item v-for="(data, i) in objData" :key="i" v-on:click="selectOption(data)">
          <v-img v-if="isImageType" :src="data.picture" :max-height="50" :max-width="50" alt="" />
          <v-list-item-title v-html="data.name" />
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    objData: {
      type: Array,
      required: true
    },
    isImageType: {
      type: Boolean,
      required: false,
      default: false
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

    selectOption (data) {
      this.$emit('setSelectedOption', data)
    }

  }
}
</script>

<style scoped>
  .currBtn{
    color: white
  }
</style>
