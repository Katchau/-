<template>
  <v-col cols="12" md="4">
    <span v-if="name" class="headline">
      {{ name }}
    </span>
    <div v-for="(field, key) in fields" :key="key + field.label">
      <SearchAutoComplete :field="field" :list-key="key" @autoAnswer="updateSearchAnswer" />
      <div v-if="field.isMinMax && !field.isAutoComplete">
        <v-text-field v-model="field.items[0].parameterValue" :label="field.items[0].label" />
        <v-text-field v-model="field.items[1].parameterValue" :label="field.items[1].label" />
      </div>
      <span v-if="field.isMinMax && field.isAutoComplete && field.clickedAnswer.id">
        <v-text-field v-model="field.clickedAnswer.min" label="Min" />
        <v-text-field v-model="field.clickedAnswer.max" label="Max" />
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
      value: Object
    }
  },

  methods: {
    updateSearchAnswer (answer) {
      if (answer.id) {
        this.fields[answer.key].clickedAnswer.id = answer.id
        this.$emit('searchAnswer', this.fields[answer.key].clickedAnswer)
      } else {
        this.$emit('searchAnswer', answer)
      }
    }
  }
}
</script>

<style scoped>

</style>
