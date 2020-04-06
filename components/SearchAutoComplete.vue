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
    }
  },

  data () {
    return {
      value: Object,
      clickedAnswer: {}
    }
  },

  watch: {
    value: {
      handler (answer) {
        if (answer.id) {
          this.clickedAnswer.id = answer.id
          this.clickedAnswer.min = undefined
          this.clickedAnswer.max = undefined
          this.$emit('autoAnswer', this.clickedAnswer)
        } else {
          this.$emit('autoAnswer', answer)
        }
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
