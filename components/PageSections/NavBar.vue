<template>
  <v-navigation-drawer
    v-model="drawerInfo.model"
    :clipped="drawerInfo.clipped"
    :floating="drawerInfo.floating"
    :temporary="drawerInfo.temporary"
    app
    overflow
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img src="https://thumbs.gfycat.com/FickleTerribleCockroach.webp" alt="dragonite gif">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Testing this stuff</v-list-item-title>
          <v-list-item-subtitle>stuff</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-avatar>
          <img src="https://thumbs.gfycat.com/ElaborateOldCygnet.webp" alt="bulbasaur gif">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Hmmmmmmmm</v-list-item-title>
          <v-list-item-subtitle>stuff</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    drawerInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
