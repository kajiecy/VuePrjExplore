import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from  './store'
Vue.config.productionTip = false
Vue.use(iView);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
