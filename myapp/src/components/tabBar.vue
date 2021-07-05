<template>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      selected: '外卖'
    }
  }

}
</script>
<style scoped>
  .mint-tab-item{

  }
</style>
