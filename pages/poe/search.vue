<template>
  <div>
    <h1>
      Mequie
    </h1>
    <SearchHeader />
  </div>
</template>

<script>
import SearchHeader from '../../components/SearchHeader'
export default {
  name: 'Search',
  components: { SearchHeader },
  middleware: 'poeSearchFilters',
  transition: 't2'
}
</script>

<style scoped>

</style>
