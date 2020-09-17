/*
 * @Author: your name
 * @Date: 2020-09-17 14:40:21
 * @LastEditTime: 2020-09-17 19:12:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/main.js
 */
import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
//
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})
Vue.config.productionTip = false
Vue.use(axios,VueAxios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
