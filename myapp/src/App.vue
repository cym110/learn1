<template>
  <div id="app">
    <my-header></my-header>
    <!-- <img src="./assets/logo.png"> -->
    <div class="d1">123</div>
    <p>state：{{this.$store.state.num}}</p>
    <p>getter:{{this.$store.getters.getNum}}</p>
    <button @click="add">+1</button>
    <button @click="asyncadd">+1</button>
    <!-- <router-view/> -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import tabBar from './components/tabBar.vue'
export default {
  components: { myHeader, tabBar },
  name: 'App',
  mounted () {
    console.log(this.$store.getters.getNum)
  },
  methods: {
    add () {
      this.$store.commit('incre', 1)
    },
    asyncadd () {
      this.$store.dispatch('asyncIncre', 1)
    }
  }
}
</script>

<style>
.d1 {
  margin-top: 40px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* .mint-tab-item { */
  /* padding: 4vw 0; */
/* } */
</style>
