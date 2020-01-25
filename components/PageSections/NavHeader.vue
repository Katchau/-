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
      {{ darkModeText }}
    </v-label>
    <!--    <v-switch v-model="$vuetify.theme.dark" left primary class="pl-2 mt-5" />-->
    <v-btn @click="switchTheme" v-model="$vuetify.theme.dark" text icon>
      <v-icon v-if="$vuetify.theme.dark">
        mdi-brightness-5
      </v-icon>
      <v-icon v-else>
        mdi-brightness-2
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavHeader',
  computed: {
    darkModeText () {
      return !this.$vuetify.theme.dark ? 'Enable decent mode' : 'Enable masochist mode'
    }
  },

  methods: {
    hideDrawer () {
      this.$emit('hideDrawer')
    },

    switchTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>
</style>
