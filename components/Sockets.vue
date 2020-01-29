<template>
  <div>
    <div v-for="(row, i) in structure" :key="'sck' + i">
      <div v-if="row[0].group < 0">
        <span v-for="(column, a) in row" :key="'column' + a">
          <span v-if="column.column">
            I
          </span>
          <span v-else>
            x
          </span>
        </span>
      </div>
      <span v-else v-for="(socket, j) in row" :key="'sockets' + j" :class="colourClass(socket.sColour)">
        {{ socket.group }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sockets',

  props: {
    sockets: {
      type: Array,
      required: true
    }
  },

  created () {
    // this is something interesting but
    // this.structure = this.sockets.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key])
    //   : rows[rows.length - 1].push(key)) && rows, [])
    this.structure = []
    for (let i = 0, k = -1; i < this.sockets.length; i++) {
      if (i % 2 === 0) {
        if (i !== 0) {
          k++
          const tmp = { group: -1, column: this.sockets[i].group === this.sockets[i - 1].group }
          this.structure[k] = []
          if ((i + 1) % 3 === 0) {
            this.structure[k].push({ group: -1, column: false })
            this.structure[k].push(tmp)
          } else {
            this.structure[k].push(tmp)
            this.structure[k].push({ group: -1, column: false })
          }
        }
        k++
        this.structure[k] = []
      }
      this.structure[k].push(this.sockets[i])
    }
  },

  methods: {
    colourClass (colour) {
      switch (colour) {
        case 'R': return 'red--text'
        case 'G': return 'green--text'
        case 'B': return 'blue--text'
        case 'A': return 'brown--text'
        case 'W': return 'yellow--text'
        default: return 'black--text'
      }
    }
  }

}
</script>

<style scoped>
.socketThingies{
  border-color: gray;
  border-style: solid;
}
</style>
