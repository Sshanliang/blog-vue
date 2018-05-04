
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import api from './util/api'
import apii from './api/api'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$apii = apii
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
