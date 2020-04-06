<template>
  <v-autocomplete
    v-if="field.isAutoComplete"
    v-model="value"
    :items="field.items"
    :filter="customFilter"
    :label="field.label"
  />
</template>

<script>
export default {
  name: 'SearchAutoComplete',

  props: {
    field: {
      type: Object,
      required: true
    },
    listKey: {
      type: Number,
      required: false,
      default: -1
    }
  },

  data () {
    return {
      value: Object
    }
  },

  watch: {
    value: {
      handler (answer) {
        if (this.listKey >= 0) {
          answer.key = this.listKey
        }
        this.$emit('autoAnswer', answer)
      }
    }
  },

  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.text.toLowerCase()
      if (queryText === undefined) { return true }
      const searchText = queryText.toLowerCase()

      return textOne.includes(searchText)
    }
  }
}
</script>

<style scoped>

</style>
