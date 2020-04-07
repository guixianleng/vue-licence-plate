<template>
  <div id="app">
    <div class="car-no">
      <h2>车牌</h2>
      <licence-plate @done="handleCarNo" />
    </div>
    <div class="show-no">
      <h2>车牌号码：</h2>
      <span>{{ carNo }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      carNo: ''
    }
  },
  methods: {
    handleCarNo (str) {
      this.carNo = str
    }
  }
}
</script>

<style lang="less">
#app {
  padding: 10px;
  font-size: 14px;
  .car-no {
    h2 {
      color: #333;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .show-no {
    margin-top: 10px;
    h2 {
      color: #333;
      font-weight: 600;
      display: inline-block;
    }
    span {
      color: #313131;
      font-size: 14px;
    }
  }
}
</style>
