<template>
  <v-form>
    <v-row v-for="(column, key) in columns" :key="key">
      {{ column.name }}
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'SearchHeader',
  data () {
    return {
      columns: [
        {
          name: 'cenas',
          section1: ['any', 'true', 'false']
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
