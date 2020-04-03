import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import { licenceKeyboard, licencePlate } from './../packages/index'

Vue.config.productionTip = false
// 注册组件库
Vue.use(licenceKeyboard).use(licencePlate)

new Vue({
  render: h => h(App)
}).$mount('#app')
