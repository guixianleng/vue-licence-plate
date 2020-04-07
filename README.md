# licence-plate-keyboard

## 安装依赖
```shell
npm install vue-licence-plate --save-dev
or
yarn add vue-licence-plate
```

### 引入组件
```js
import Vue from 'vue'
// 自带车牌显示
import licencePlate from 'vue-licence-plate'
// 只有键盘
import licenceKeyboard from 'vue-licence-keyboard'
// 注册引入
Vue.use(licencePlate)
Vue.use(licenceKeyboard)
```
### 使用
```html
<licence-keyboard v-model="caoNo"></licence-keyboard>
<licence-plate @done="handleDone"></licence-plate>

<script>
  ...
  methods: {
    handleDone (str) {
      console.log(str)
    }
  }
</script>
```

### 效果图示
![Image](https://raw.githubusercontent.com/guixianleng/vue-licence-plate/master/examples/assets/images/case.gif)
