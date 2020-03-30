<template>
  <v-col cols="12" md="4">
    <span v-if="name" class="headline">
      {{ name }}
    </span>
    <div v-for="(field, key) in fields" :key="key + field.label">
      <v-autocomplete
        v-if="field.isAutoComplete"
        v-model="value"
        :items="field.items"
        :filter="customFilter"
        :label="field.label"
      />
      <div v-if="field.isMinMax && !field.isAutoComplete">
        <v-text-field v-model="field.items[0].parameterValue" label="Min" />
        <v-text-field v-model="field.items[1].parameterValue" label="Max" />
      </div>
      <span v-if="field.isMinMax && field.isAutoComplete && clickedAnswer.id">
        <v-text-field v-model="clickedAnswer.min" label="Min" />
        <v-text-field v-model="clickedAnswer.max" label="Max" />
      </span>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'SearchOptions',

  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    fields: {
      type: Array,
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
          this.clickedAnswer.stat = true
          this.clickedAnswer.id = answer.id
          this.clickedAnswer.min = undefined
          this.clickedAnswer.max = undefined
          this.$emit('searchAnswer', this.clickedAnswer)
        } else {
          this.$emit('searchAnswer', answer)
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
