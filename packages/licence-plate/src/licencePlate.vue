<template>
  <div class="car-plate">
    <div class="car-no__content">
      <ul>
        <li
          class="car-no__digit"
          v-for="(digit, i) in carNo"
          :key="i"
          :class="{ current: currentNo === i, isEnergy: i == 7 && !digit }"
          @click.stop="handleClickDigit(i)"
        >
          {{ digit }}
        </li>
      </ul>
      <div class="err" v-if="errMsg">{{ errMsg }}</div>
    </div>
    <licence-keyboard
      :showKeyboard.sync="show"
      :current.sync="currentNo"
      v-model="carNo"
      @error="handleError"
      @done="handleDone"
    ></licence-keyboard>
  </div>
</template>

<script>

export default {
  name: 'licence-plate',
  data () {
    return {
      carNo: '',
      errMsg: '',
      show: false,
      currentNo: null,
      timer: null
    }
  },
  methods: {
    // 点击修改车牌号
    handleClickDigit (i) {
      this.currentNo = i
      this.show = true
    },
    handleError (msg) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.errMsg = msg
      this.timer = setTimeout(() => {
        this.errMsg = ''
      }, 1000)
    },
    handleDone (str) {
      this.$emit('done', str)
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
