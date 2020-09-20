<!--
 * @Author: your name
 * @Date: 2020-09-17 15:39:16
 * @LastEditTime: 2020-09-20 15:47:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/components/NavHeader.vue
-->
<template>
  <div class="footer">
        <div class="footer-up">
          <div class="container">
            <div class="footer-nav">
              <ul>
                <li>预约维修服务</li>
                <li>7天无理由退货</li>
                <li>15天免费换货</li>
                <li>满99元包邮</li>
                <li>520余家售后网点</li>
              </ul>
            </div>
            <div class="footer-listtext">
              <dl>
                <dt>帮助中心</dt>
                <dd>账户</dd>
              </dl>
              <dl>
                <dt>服务支持</dt>
                <dd>账户</dd>
              </dl>
              <dl>
                <dt>线下门店</dt>
                <dd>账户</dd>
              </dl>
              <dl>
                <dt>关于小米</dt>
                <dd>账户</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>账户</dd>
              </dl>
              <dl>
                <dt>特色服务</dt>
                <dd>账户</dd>
              </dl>
              <div class="footer-phonenum">
                
              </div>
            </div>
          </div> 
        </div>
        <div class="footer-down">
          <div class="container">
            <div class="footer-logo">

            </div>
            <div class="footer-down-nav">
              <p>22222222222</p>
              <p>111111111111</p>
            </div>
            <div class="footer-down-links">
              
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  data(){
    return{

    }
  },mounted(){

  },methods:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import url('./../assets/sass/base.scss');
  .footer{
    .footer-up{

    }
    .footer-down{
      padding: 30px 0 ;
      font-size: 12px;
      background: #fafafa;
    }
  }
</style>
