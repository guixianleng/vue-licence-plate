/*
 * @Author: LenGxin
 * @Description: Do not edit
 * @Date: 2020-04-03 11:03:23
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-04-03 11:16:54
 */
import licencePlate from './src/keyboard.vue'

// 为组件提供 install 安装方法，供按需引入
licencePlate.install = function (Vue) {
  Vue.component(licencePlate.name, licencePlate)
}

export default licencePlate
