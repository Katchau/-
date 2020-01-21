<template>
  <v-select
    @input="selectOption"
    :items="obj"
    :readonly="false"
    :return-object="true"
    v-model="answer"
    class="dropdownCenas"
    item-text="name"
    item-value="value"
    label="Choose on of the following"
    name="option selection"
  >
    <template slot="selection" slot-scope="data">
      <v-flex v-if="isImageType" xs2>
        <v-avatar size="25px">
          <img v-if="isImageType" :src="data.item.picture" alt="">
        </v-avatar>
      </v-flex>
      <v-flex class="ml-1">
        {{ data.item.name }}
      </v-flex>
    </template>
    <template slot="item" slot-scope="data">
      <v-img
        v-if="isImageType"
        :src="data.item.picture"
        :max-height="50"
        :max-width="50"
        alt=""
      />
      <v-list-item-title v-html="data.item.name" />
    </template>
  </v-select>
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

    selectOption () {
      this.$emit('setSelectedOption', this.answer)
    },

    getImgURL (url) {
      return `background-img:url(${url})`
    }
  }
}
</script>

<style scoped></style>
