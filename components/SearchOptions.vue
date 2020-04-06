<template>
  <v-col cols="12" md="4">
    <span v-if="name" class="headline">
      {{ name }}
    </span>
    <div v-for="(field, key) in fields" :key="key + field.label">
      <SearchAutoComplete :field="field" @autoAnswer="updateSearchAnswer" />
      <div v-if="field.isMinMax && !field.isAutoComplete">
        <v-text-field v-model="field.items[0].parameterValue" :label="field.items[0].label" />
        <v-text-field v-model="field.items[1].parameterValue" :label="field.items[1].label" />
      </div>
      <span v-if="field.isMinMax && field.isAutoComplete && clickedAnswer.id">
        <v-text-field v-model="clickedAnswer.min" label="Min" />
        <v-text-field v-model="clickedAnswer.max" label="Max" />
      </span>
    </div>
  </v-col>
</template>

<script>
import SearchAutoComplete from './SearchAutoComplete'
export default {
  name: 'SearchOptions',
  components: { SearchAutoComplete },

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

  methods: {
    updateSearchAnswer (answer) {
      this.clickedAnswer = answer
      this.$emit('searchAnswer', answer)
    }
  }
}
</script>

<style scoped>

</style>
