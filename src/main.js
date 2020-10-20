import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
