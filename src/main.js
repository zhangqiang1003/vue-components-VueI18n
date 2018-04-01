// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'

import LangSwitch from './components/LangSwitch';

Vue.config.productionTip = false;

//注册全局组件

Vue.component('lang-switch', LangSwitch);

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
console.log(vm.$i18n.locale = "en");