<!--
 * @Author: your name
 * @Date: 2020-09-17 14:40:21
 * @LastEditTime: 2020-09-21 09:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/views/Home.vue
-->
<template>
  <div class="home">
      <NavHeader></NavHeader>
      <div class="main-indexpage">
          <div class="container">
            <!-- 首页轮播 <br/>
            1111

            1
            1
            1
            1
            1 -->
            
          </div>
      </div>
      <NavFooter></NavFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
// import storage from '../storage'
export default {
  name: 'Home',
  data(){
    return{
      list:[],
      testlist:[]
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  mounted(){
    // storage.setItem('a',1)
    //  storage.setItem('user',{a:1})
    // this.axios.get("/user/login").then((res)=>{
    //   console.log(res)
    //   this.list = res
    // })
    this.axios.get("/user/productList").then((res)=>{
      console.log(res)
      if(res.status == 200 && res.status == '200'){
        this.testlist = res.data
      }
      
    })
  }
}
</script>
<style lang="scss" scoped>
@import url('./../assets/sass/base.scss');
.main-indexpage{
    height:670px;
    background: #fafafa;
}
</style>