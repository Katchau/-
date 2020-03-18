<template>
  <v-form>
    <v-row v-for="(column, key) in columns" :key="key">
      <SearchOptions :option="column"/>
    </v-row>
  </v-form>
</template>

<script>
import SearchOptions from './SearchOptions'
export default {
  name: 'SearchHeader',
  components: { SearchOptions },
  data () {
    return {
      columns: [
        {
          name: 'cenas',
          label: 'LMAO',
          filters: [
            {
              text: 'Any',
              value: undefined
            },
            {
              text: 'Yes',
              value: {
                cenas:
                  'true'
              }
            },
            {
              text: 'No',
              value: {
                cenas:
                  'false'
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
