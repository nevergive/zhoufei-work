<!--
 * @Author: your name
 * @Date: 2020-09-17 14:40:21
 * @LastEditTime: 2020-09-18 10:06:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="父与子传值"/>
    <ul >
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import storage from '../storage'
export default {
  name: 'Home',
  data(){
    return{
      list:[]
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    // storage.setItem('a',1)
    //  storage.setItem('user',{a:1})
    this.axios.get("/user/login").then((res)=>{
      console.log(res)
      this.list = res
    })
  }
}
</script>
