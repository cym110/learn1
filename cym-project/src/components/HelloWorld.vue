<template>
  <!-- <div class="d">
    <div class="d1"></div>
    <div class="d2"></div>
    <div class="d3"></div>
    <div class="d4"></div>
    <div class="d5"></div> -->
    <!-- <div class="d6">11111</div> -->
  <!-- </div> -->
  <div class="bb"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.d {
  display: flex;
  padding: 0 20px;
}
  .d1,.d2,.d3,.d4,.d5 {
    width: 2rem;
    height: 2rem;
  }
  .d1 {
    background-color: aqua;
  }
  .d2 {
    background-color: rgb(199, 204, 202);
  }
  .d3 {
    background-color: rgb(218, 140, 51);
  }
  .d4 {
    background-color: rgb(35, 168, 35);
  }
  .d5 {
    background-color: rgb(151, 34, 92);
  }
  .d6 {
    font-size: 20px;
  }
  .bb {
    border: 1px solid #333;
    height: 100px;
  }
</style>
