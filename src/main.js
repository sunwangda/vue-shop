import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8082/hf-user'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
