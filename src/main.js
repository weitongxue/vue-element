// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

//引入vuex
import store from './store'
//支持promise
import 'babel-polyfill'
//引入样式文件
import '@/styles/index.less'
//引入axios(绑定在原型上)
import axios from 'axios'
Vue.prototype.$http = axios
//引入Element（全部引入）
Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
