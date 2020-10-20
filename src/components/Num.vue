<template>
  <div class="nums">
    <div class="title">{{title}}</div>
    <div class="count">
      <div class="count-num" v-if="active">
        0
      </div>
      <div 
        class="count"
        v-for="(item, index) 
        in numberList" 
        :key="index">
          <div class="count-box">
            <div class="count-box__item" :style="{ top: -item * 30 + 'px' }">
              <i :class="{active}" v-for="(ic, indexc) in 10" :key="indexc">{{ ic - 1 }}</i>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    numbers: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      numberList: [0, 0, 0],
      active: true
    };
  },
  methods: {
    PrefixInteger(num, length) {
      return (Array(length).join("0") + num).slice(-length);
    },
    plusNPrAll() {
      const res = this.PrefixInteger(this.numbers, this.numberList.length);
      this.numberList = res.toString().split("");
    }
  },
  watch: {
    numbers() {
      this.active = false
      this.plusNPrAll()
    }
  }
};
</script>
<style lang='scss' scoped>
.nums {
  width: 100%;
  float: left;
  border-top: 1px solid #fff;
  &:nth-child(3) {
    border-bottom: 1px solid #fff; 
  }
  .title {
    height: 26px;
    line-height: 26px;
    color: #fff;
    font-size: 10px;
  }
  .count {
    width: 100%;
    display: flex;
    .count-num {
      position: absolute;
      right: 0;
      font-family: sans-serif;
      font-size: 24px;
      font-weight: 300;
      color: #fff;
    }
    .count-box {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-right: 10px;
      float: left;
      color: #fff;
      text-align: right;
      position: relative;
      z-index: 3;
      overflow: hidden;
      .count-box__item {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.8s ease-in-out;
        i {
          width: 100%;
          float: left;
          font-family: sans-serif;
          font-size: 24px;
          font-weight: 300;
          color: #fff;
          text-align: center;   
          &.active {
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>