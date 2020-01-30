<template>
  <div class="socket">
    <div v-for="(row, i) in structure" :key="'sck' + i" :class="selectSide(i)">
      <div v-for="(socket, j) in row" :key="'sockets' + j" :class="colourClass(socket.sColour) + ' socketCircle mx-2 mb-3'" />
      <div v-if="row.length > 1 && row[0].group === row[1].group && i===2" class="socketLink socketLinkHorizontal mx-n8 mt-2" />
      <div v-else-if="row.length > 1 && row[0].group === row[1].group" class="socketLink socketLinkHorizontal mx-8 mt-2" />
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
          const tmp = { group: -2, sColour: this.sockets[i].group === this.sockets[i - 1].group }
          this.structure[k] = []
          if ((i + 1) % 3 === 0) {
            tmp.sColour = tmp.sColour ? 'right' : false
            this.structure[k].push(tmp)
          } else {
            tmp.sColour = tmp.sColour ? 'left' : false
            this.structure[k].push(tmp)
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
        case 'R': return 'socketRed'
        case 'G': return 'socketGreen'
        case 'B': return 'socketBlue'
        case 'A': return 'socketAbyss'
        case 'W': return 'socketWhite'
        case 'right': return 'socketLinkVertical socketLink rightSide idk'
        case 'left': return 'socketLinkVertical socketLink leftSide idk'
        default: return 'rip'
      }
    },

    selectSide (index) {
      if (index === 2) {
        return 'd-flex flex-row-reverse'
      }
      return 'd-flex flex-row'
    }
  }

}
</script>

<style scoped>
  .socket{
    /*margin: 0 auto;*/
    margin-top: 25%;
    /*min-height: 100vh;*/
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .socketWhite{
    background: url("../static/images/socket.png") no-repeat -36px -107px;
  }
  .socketGreen{
    background: url("../static/images/socket.png") no-repeat -106px -72px;
  }
  .socketRed{
    background: url("../static/images/socket.png") no-repeat -1.0px -106px;
  }
  .socketBlue{
    background: url("../static/images/socket.png") no-repeat -1.0px -2.0px;
  }
  .socketAbyss{
    background: url("../static/images/socket.png") no-repeat -70.5px -70.5px;
  }
  .socketCircle{
    width: 34px;
    height: 34px;
  }
  .socketLinkVertical{
    background: url("../static/images/socket.png") no-repeat -140px -5px;
    width: 38px;
    height: 30px;
    position: absolute;
  }
  .socketLinkHorizontal{
    background: url("../static/images/socket.png") no-repeat -1px -140px;
    width: 38px;
    height: 15px;
    position: absolute;
  }
  .fix3{
    opacity: 0;
  }
  .rip{
    opacity: 0;
    position: absolute;
  }
  .socketLink{
    z-index: 2;
  }
  .idk{
    margin-top: -21px;
  }
  .rightSide{
    margin-left: 66.6px !important;
  }
  .leftSide{
    margin-left: 16.6px !important;
  }
</style>
