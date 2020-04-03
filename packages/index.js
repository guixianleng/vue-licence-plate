/*
 * @Author: LenGXin
 * @Description: 注册组件，按需加载
 * @Date: 2020-04-03 11:15:03
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-04-03 17:20:20
 */
import licenceKeyboard from './licence-keyboard'
import licencePlate from './licence-plate'

const components = [
  licenceKeyboard,
  licencePlate
]

/**
 * install
 * @param {*} Vue 接收 Vue 作为参数
 * 如果使用 use 注册插件，则所有的组件都将被注册
 */
const install = function (Vue) {
  if (install.installed) return
  // 遍历组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  licenceKeyboard,
  licencePlate
}
