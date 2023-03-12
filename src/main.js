import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css';
import 'font-awesome/css/font-awesome.min.css'
import i18n from './assets/language/index.js'
import VueI18n from 'vue-i18n'
import store from './store/index.js';
//应用VueRouter
Vue.use(VueRouter);
Vue.use(ElementUI,{size:"small"});
Vue.use(VueI18n);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router:router,
  i18n,
  store,
}).$mount('#app');