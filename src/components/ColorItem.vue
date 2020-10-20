<template>
  <div class="color-item">
    <div class="color-top" :style="{background: item.hex}"></div>
    <div class="col">
      <span class="col-text" :style="{color: item.hex}">{{item.name}}</span>
      <span class="col-pinyin">{{item.pinyin.toUpperCase()}}</span>
      <span class="col-rgb">{{item.hex.replace(/#/, "")}}</span>
      <canvas width="50" height="278" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.drawCanvas()
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.canvas;
      var context = canvas.getContext("2d");
      context.strokeStyle = "#fff";
      context.lineWidth = 6;
      context.beginPath();
      context.arc(
        13,
        30,
        9,
        -0.5 * Math.PI,
        this.item.CMYK[0] / 100 * (2 * Math.PI) - Math.PI / 2,
        false
      );
      context.stroke();
      context.beginPath();
      context.arc(
        13,
        62,
        9,
        -0.5 * Math.PI,
        this.item.CMYK[1] / 100 * (2 * Math.PI) - Math.PI / 2,
        false
      );
      context.stroke();
      context.beginPath();
      context.arc(
        13,
        94,
        9,
        -0.5 * Math.PI,
        this.item.CMYK[2] / 100 * (2 * Math.PI) - Math.PI / 2,
        false
      );
      context.stroke();
      context.beginPath();
      context.arc(
        13,
        126,
        9,
        -0.5 * Math.PI,
        this.item.CMYK[3] / 100 * (2 * Math.PI) - Math.PI / 2,
        false
      );
      context.stroke();
      context.closePath()
      context.lineWidth = 0.5;
      const num1 = parseInt((280 - 150) / 255 * this.item.RGB[0]) + 150
      const num2 = parseInt((280 - 150) / 255 * this.item.RGB[1]) + 150
      const num3 = parseInt((280 - 150) / 255 * this.item.RGB[2]) + 150
      context.beginPath();
      context.moveTo(18.5, 150)
      context.lineTo(18.5, num1);
      context.stroke();
      context.beginPath();
      context.moveTo(21.5, 150)
      context.lineTo(21.5, num2);
      context.stroke();
      context.beginPath();
      context.moveTo(24.5, 150)
      context.lineTo(24.5, num3);
      context.stroke();
    },
  },
};
</script>
<style lang='scss' scoped>
.color-item {
  text-align: center;
  cursor: pointer;
  .color-top {
    width: 50px;
    height: 6px;
    background: rgb(92, 34, 35);
  }
  .col {
    width: 50px;
    height: 278px;
    background: url("../assets/images/col_bg.png") no-repeat;
    position: relative;
    transition: all 0.5s linear;
    &:hover {
      opacity: .6;
    }
    .col-text {
      position: absolute;
      right: 4px;
      color: rgb(92, 34, 35);
      font-family: "Microsoft YaHei", "微软雅黑", Helvetica;
      padding-top: 1em;
      display: block;
      width: 1em;
    }
    .col-pinyin {
      position: absolute;
      top: 148px;
      right: 10px;
      display: block;
      width: 1em;
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      text-transform: uppercase;
      font-size: 0.8em;
      color: #fff;
    }
    .col-rgb {
      position: absolute;
      right: 38px;
      font-size: 11px;
      position: absolute;
      top: 148px;
      display: block;
      width: 1em;
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      text-transform: uppercase;
      color: #fff;
    }
  }
}
</style>