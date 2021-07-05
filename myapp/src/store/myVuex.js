// 我们是通过new Vuex.store({})获得一个store实例，

import Vue from 'vue'

// 也就是说，我们引入的Vuex中有Store这个类作为Vuex对象的一个属性。因为通过import引入的，实质上就是一个导出一个对象的引用。
// myVuex.js
class Store {
  constructor (options) {
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })
    // 实现getters
    let getters = options.getter || {}
    this.getters = {}
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state)
        }
      })
    })
    // 实现moutation
    let mutations = options.mutations || {}
    this.mutations = {}
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = (arg) => {
        mutations[mutationName](this.state, arg)
      }
    })
    // 实现action
    let actions = options.actions
    this.actions = {}
    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = (arg) => {
        actions[actionName](this, arg)
      }
    })
  }
  // dispatch
  dispatch (method, arg) {
    this.actions[method](arg)
  }
  // commit
  commit = (method, arg) => {
    this.mutations[method](arg)
  }
  get state () {
    return this.vm.state
  }
}

// 我们还使用了Vue.use(),而Vue.use的一个原则就是执行对象的install这个方法
let install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.store) { // 如果是根组件
        this.$store = this.$options.store
      } else { // 如果是子组件
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}
// 就是将上面的Vuex对象导出，如下就是myVuex.js
let Vuex = {
  Store,
  install
}
export default Vuex
