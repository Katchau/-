<template>
  <v-navigation-drawer
    v-model="drawerInfo.model"
    :clipped="drawerInfo.clipped"
    :floating="drawerInfo.floating"
    :temporary="drawerInfo.temporary"
    app
    overflow
    class="navBar"
  >
    <v-list>
      <v-list-item v-on:click="changePage('/')" class="cancer">
        <v-list-item-content class="cancer">
          <v-img src="/../images/sidebar/home1.jpg" class="navImage">
            <div class="fill-height bottom-gradient">
              <v-list-item-title>
                Home Sweet Home
              </v-list-item-title>
            </div>
          </v-img>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-on:click="changePage('/bananas')" class="cancer">
        <v-list-item-content class="cancer">
          <v-img src="/../images/sidebar/banana1.jpg" class="navImage">
            <div class="fill-height bottom-gradient">
              <v-list-item-title>
                Free Bananas!
              </v-list-item-title>
            </div>
          </v-img>
        </v-list-item-content>
      </v-list-item>
      <v-list-group class="bananas" p-0 m-0>
        <template v-slot:activator>
          <v-img src="/../images/sidebar/letucano2.jpg" class="navImage2">
            <div class="fill-height bottom-gradient">
              <v-list-item-title>
                Path of Exile
              </v-list-item-title>
            </div>
          </v-img>
        </template>
        <v-list-item v-for="(item, i) in listData" :key="i" v-on:click="changePage(item.value)" class="cancer">
          <!--        <v-list-item-avatar>-->
          <v-img :src="item.picture" v-bind:alt="item.name" class="navImage">
            <div class="fill-height bottom-gradient">
              <!--        </v-list-item-avatar>-->
              <v-list-item-content class="v-list-item">
                <v-list-item-title class="v-list-item">
                  {{ item.name }}
                </v-list-item-title>
                <!--              <v-list-item-subtitle>should I had more stuff here ?</v-list-item-subtitle>-->
              </v-list-item-content>
            </div>
          </v-img>
        </v-list-item>
        <v-list-item class="cancer">
          <v-list-item-content class="cancer">
            <v-img src="/../images/sidebar/hm.jpeg" class="navImage">
              <div class="fill-height bottom-gradient">
                <v-list-item-title class="v-list-item">
                  Item Search
                </v-list-item-title>
              </div>
            </v-img>
          </v-list-item-content>
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
    const tmp = itemTypes.getItemTypes().map((obj, index) => {
      obj.value = `/poe/${obj.value}`
      obj.picture = `/../images/sidebar/${index}${obj.picture}`
      return obj
    })
    this.listData.push({
      name: 'PoE Currency Calculator',
      value: '/poe',
      picture: `/../images/sidebar/pokedex.jpeg`
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
.navBar{
  list-style: none;
  overflow: hidden;
}
.bottom-gradient {
  background-image: linear-gradient(217deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px),
  linear-gradient(127deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px),
  linear-gradient(335deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px),
  linear-gradient(25deg, rgba(0, 0, 0, 0.2) 0%, transparent 69px);
  transition: opacity 0.5s;
}
.bottom-gradient:hover {
  opacity: 0;
}
.navImage{
  max-height: 105px;
}
</style>
