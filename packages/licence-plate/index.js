/*
 * @Author: LenGxin
 * @Description: Do not edit
 * @Date: 2020-04-03 11:03:23
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-04-03 17:36:34
 */
import licencePlate from './src/licencePlate.vue'

// 为组件提供 install 安装方法，供按需引入
licencePlate.install = function (Vue) {
  Vue.component(licencePlate.name, licencePlate)
}

export default licencePlate
