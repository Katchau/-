<template>
  <select id="dropdownCenas" @change="selectOption" name="option selection">
    <option value="" selected disabled hidden>
      Choose on of the following
    </option>
    <option v-for="item in obj" v-bind:value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    objData: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      obj: []
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
      const value = document.getElementById('dropdownCenas').value
      this.$emit('setSelectedOption', value)
    }

  }
}
</script>

<style scoped>

</style>
