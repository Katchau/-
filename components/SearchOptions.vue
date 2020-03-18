<template>
  <div>
    <span v-if="option.name" class="headline">
      {{ option.name }}
    </span>
    <div v-if="isMinMax">
      Aii querias
    </div>
    <v-autocomplete
      v-else
      v-model="value"
      :items="option.filters"
      :filter="customFilter"
      :label="option.label"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchOptions',

  props: {
    option: {
      type: Object,
      required: true
    },
    isMinMax: {
      type: Boolean,
      required: false,
      default: false
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
        console.log('oh boy')
        console.log(answer)
      }
    }
  },

  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.text.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.includes(searchText)
    }
  }
}
</script>

<style scoped>

</style>
