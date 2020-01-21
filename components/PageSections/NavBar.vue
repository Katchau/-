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

      <v-list-group value="true" class="bananas" p-0 m-0>
        <template v-slot:activator>
          <v-list-item-title>
            Path of Exile
          </v-list-item-title>
        </template>
        <v-list-item v-for="(item, i) in listData" :key="i" v-on:click="changePage(item.value)" class="cancer">
          <!--        <v-list-item-avatar>-->
          <v-img :src="item.picture" v-bind:alt="item.name" contain>
            <!--        </v-list-item-avatar>-->
            <div class="fill-height bottom-gradient" />
            <v-list-item-content class="v-list-item">
              <v-list-item-title class="v-list-item">
                {{ item.name }}
              </v-list-item-title>
              <!--              <v-list-item-subtitle>should I had more stuff here ?</v-list-item-subtitle>-->
            </v-list-item-content>
          </v-img>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import itemTypes from '~/assets/poeItemTypes'

export default {
  name: 'NavBar',

  props: {
    drawerInfo: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      listData: []
    }
  },

  created () {
    const tmp = itemTypes.getItemTypes().map((obj) => {
      obj.value = `/poeItems/${obj.value}`
      obj.picture = `/../images/sidebar/1${obj.picture}`
      return obj
    })
    this.listData.push({
      name: 'PoE Currency Calculator',
      value: '/poe',
      picture: ''
    })
    this.listData.push(...tmp)
  },

  methods: {
    getFolderStructure () {
      let curRoutes = this.$router.options.routes
      const tmp = []

      curRoutes = curRoutes.sort((a, b) => {
        if (a.path.length > b.path.length) {
          return 1
        }
        if (a.path.length < b.path.length) {
          return -1
        }
        return 0
      })
      // this is just to mess around as I dont know whats happening here. but i found it fun
      curRoutes.forEach((obj) => {
        const path = obj.path.replace(/:.*/, '')
        if (path.length > 1) {
          if ((path.match(/\//g) || []).length === 1) {
            tmp.push({
              name: path.replace('/', ''),
              depth: 1,
              parent: null
            })
          } else {
            const parents = path.split('/').filter((str) => { return str.length !== 0 })

            if (parents.length === 1) {
              tmp.push({
                name: parents[0],
                depth: 1,
                parent: null
              })
            } else {
              tmp.forEach((parent) => {
                if (parent.depth === (parents.length - 1) && parents[parents.length - 2] === parent.name) {
                  tmp.push({
                    name: parents[parents.length - 1],
                    depth: parent.depth + 1,
                    parent: parent.name
                  })
                }
              })
            }
          }
        }
      })
      return tmp
    },

    changePage (path) {
      if (path === undefined || path === '') {
        return
      }
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style scoped>
.cancer{
  padding: 0 !important;
}
.bottom-gradient {
  background-image: linear-gradient(217deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px),
  linear-gradient(127deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px),
  linear-gradient(335deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px),
  linear-gradient(25deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px);
}
.bottom-gradient:hover {
  background: none;
}
</style>
