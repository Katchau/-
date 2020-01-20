<template>
  <select id="dropdownCenas" @change="selectOption" name="option selection">
    <option v-if="!isImageType" value="" selected disabled hidden>
      <p>
        Choose on of the following
      </p>
    </option>
    <option v-if="!isImageType" v-for="item in obj" v-bind:value="item.value">
      {{ item.name }}
    </option>
    <option v-else v-for="item in obj" v-bind:value="item.value" v-bind:style="getImgURL(item.picture)">
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
    },
    isImageType: {
      type: Boolean,
      required: false,
      default: false
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
    },

    getImgURL (url) {
      return `background-img:url(${url})`
    }

  }
}
</script>

<style scoped>

</style>
