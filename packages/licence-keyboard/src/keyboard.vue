<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
    <div class="keyboard" v-if="showKeyboard">
      <div class="header">
        <span class="clear" @click="handleClear">清除</span>
        <span class="confirm" @click="confirm">确定</span>
      </div>
      <div class="keyboard-line" :class="line.size" v-for="(line, ind) in keyboardList" :key="ind">
        <div
          class="keyboard-line__key"
          :class="{
            delete: key === 'delete',
            disabled: current === 1 && line.type === 'number',
            sixthDis: current !== 7 && (line.type === 'special' || ind === 3 && ix == 7 && line.type !== 'province') && key !== 'delete'
          }"
          v-for="(key, ix) in line.name"
          :key="ix"
          @touchstart="touchstart()"
          @touchend="touchend()"
          @click="handleClickKey(key, line.type, ix)"
        >
          <i class="remove" v-if="key === 'delete'"></i>
          <span v-else>{{ key }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ALPHAS from './alpha'
import PROVINCES from './province'

export default {
  name: 'licence-keyboard',
  props: {
    // 显示车牌键盘
    showKeyboard: {
      type: Boolean,
      default: false
    },
    // 当前第几个车牌号
    current: {
      type: Number,
      default: 0
    },
    // v-model
    value: {
      type: [String, Array],
      default: ''
    },
    // 是否为新能源汽车
    isEnergy: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // 改变键盘显示
    keyboardList () {
      if (this.current === 0) {
        return PROVINCES
      } else {
        return ALPHAS
      }
    },
    arrSize () { // 新能源车牌8位，普通7位
      return this.isEnergy ? 8 : 7
    }
  },
  data () {
    return {
      carNoArr: [],
      activeIndex: null
    }
  },
  methods: {
    handleClickKey (key, type, ix) {
      let currentIndex = this.current
      this.activeIndex = ix
      if (key === 'delete') {
        this.$set(this.carNoArr, this.current, '')
        if (this.current > 0) {
          currentIndex--
        }
      } else {
        this.$set(this.carNoArr, this.current, key)
        if (this.current < this.carNoArr.length - 1) {
          currentIndex++
        }
      }
      this.$emit('update:current', currentIndex)
    },
    // 完成
    confirm () {
      const arrString = this.carNoArr.join('')
      const arrLength = arrString.length
      // 错误提示文案
      let errMsg = ''
      if (arrLength < this.arrSize - 1 && arrLength !== 0) { // 长度校验
        errMsg = '请输入完整车牌号！'
      } else if (arrLength === 8 && !this._isEnergyNumber(arrString)) { // 非新能源车牌校验
        errMsg = '非新能源车牌，请重新输入！'
      } else if (arrLength === 7 && !this.isLicenseNo(arrString)) { // 普通车牌校验
        errMsg = '车牌输入有误，请重新输入！'
      } else {
        this.$emit('input', arrString)
          .$emit('update:showKeyboard', false)
          .$emit('done', arrString)
          .$emit('update:current', null)
        return false
      }
      this.$emit('error', errMsg)
    },
    // 清空
    handleClear () {
      this.$emit('input', '').$emit('update:current', 0)
    },
    // 新能原车牌校验
    _isEnergyNumber (str) {
      return /\W[A-Z][0-9DF][0-9A-Z]\d{3}[0-9DF]/.test(str)
    },
    // 普通车牌校验
    isLicenseNo (str) {
      return /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(str)
    },
    // 解决移动端active伪类不显示
    touchstart () {},
    touchend () {}
  },
  watch: {
    value: {
      handler (newValue) {
        if (Object.prototype.toString.call(newValue) === '[object String]') {
          const valueArr = newValue.split('')
          for (let i = 0; i <= this.arrSize - 1; i++) {
            if (valueArr[i]) {
              this.$set(this.carNoArr, i, valueArr[i])
            } else {
              this.$set(this.carNoArr, i, '')
            }
          }
        } else {
          this.carNoArr = newValue
        }
        this.$emit('input', this.carNoArr)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
@import './keyboard.less';
</style>
