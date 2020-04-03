<template>
  <div id="app">
    <licence-plate @done="handleCarNo" />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleCarNo (str) {
      console.log('车牌号：', str)
    }
  }
}
</script>
