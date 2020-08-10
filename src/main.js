import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './service/http'

Vue.config.productionTip = false
// 把 Http 挂载到 Vue 实例上
Vue.prototype.$Http = Http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
