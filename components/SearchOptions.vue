<template>
  <v-col cols="12" md="4">
    <span v-if="name" class="headline">
      {{ name }}
    </span>
    <div v-for="(field, key) in fields" :key="key + field.label">
      <div v-if="field.isMinMax">
        Aii querias
      </div>
      <v-autocomplete
        v-else
        v-model="value"
        :items="field.items"
        :filter="customFilter"
        :label="field.label"
      />
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
      value: String
    }
  },

  watch: {
    value: {
      handler (answer) {
        this.$emit('searchAnswer', answer)
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
