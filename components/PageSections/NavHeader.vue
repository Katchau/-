<template>
  <v-app-bar
    :clipped-left="true"
    justify-center
    dense
    class="wtf"
    app
  >
    <v-app-bar-nav-icon @click.stop="hideDrawer" />
    <v-toolbar-title>
      Welcome to this mess
    </v-toolbar-title>
    <v-spacer />
    <v-label>
      Enable the decent mode
    </v-label>
    <v-switch v-model="$vuetify.theme.dark" left primary class="pl-2 mt-5" />
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavHeader',
  methods: {
    hideDrawer () {
      this.$emit('hideDrawer')
    }
  }
}
</script>

<style scoped>
</style>
