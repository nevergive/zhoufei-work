/*
 * @Author: your name
 * @Date: 2020-09-17 14:40:21
 * @LastEditTime: 2020-09-18 10:04:34
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
const mock = true
if(mock){
  require('./mock/api')
}
// axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 8000
//接口错误拦截
axios.interceptors.response.use(function(response){
  if(response.status == 200){
    return response.data
  }else if(response.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(response.msg)
  }
})
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
