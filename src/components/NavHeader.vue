<!--
 * @Author: your name
 * @Date: 2020-09-17 15:39:16
 * @LastEditTime: 2020-09-20 15:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhoufei-work/src/components/NavHeader.vue
-->
<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="barlist-left">
          <ul>
            <li> <a href="#/">小米商城</a>    </li>
            <li><a href="#/">MUI</a> </li>
            <li><a href="#/">LoT</a> </li>
            <li class="li-last-border"><a href="#/">云服务</a> </li>
          </ul>
        </div>
        <div class="barlist-right">
          <ul>
            <li><a href="#/">登录</a></li>
            <li><a href="#/">注册</a></li>
            <li class="li-last-border"><a href="#/">消息通知</a></li>
            <a class="barlist-cartbtn">
              购物车
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="nav-header-logo">
          <a href="#/"></a>
        </div>
        <div class="nav-header-list">
          <ul>
            <li v-for="item in phonelist" :key="item.id">
              <a href="#/">{{item.name}}</a>
              <div class="item-child">
                <div class="container">
                   <ul>
                      <li  :class="[index == 0?'li-first-border':'']"  v-for="(items,index) in item.phonelist.slice(0,6)" :key="items.id">
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img :src="items.img" alt="">
                          </div>
                          <div class="item-product-model-title">{{items.phonename}}</div>
                          <div class="item-product-model-price">{{items.price | currency}}</div>
                        </a>
                      </li>
                    </ul>    
                </div>
              </div>   
            </li>
<!--  -->
            <!-- <li>
              <a href="#/">Redmi红米</a>
              <div class="item-child">
                <div class="container">
                    <ul>
                      <li class="li-first-border">
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                          </div>
                          <div class="item-product-model-title">
                             Redmi红米1
                          </div>
                          <div class="item-product-model-price">
                            1111元起
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                          </div>
                          <div class="item-product-model-title">
                             Redmi红米2
                          </div>
                          <div class="item-product-model-price">
                            12221元起
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                          </div>
                          <div class="item-product-model-title">
                             Redmi红米4
                          </div>
                          <div class="item-product-model-price">
                            1444元起
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                          </div>
                          <div class="item-product-model-title">
                             Redmi红米5
                          </div>
                          <div class="item-product-model-price">
                            1445元起
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                          </div>
                          <div class="item-product-model-title">
                             Redmi红米3
                          </div>
                          <div class="item-product-model-price">
                            1444元起
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#/">
                          <div class="item-product-model-img">
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                          </div>
                          <div class="item-product-model-title">
                             Redmi红米6
                          </div>
                          <div class="item-product-model-price">
                            1464元起
                          </div>
                        </a>
                      </li>
                    </ul>    
                </div>
              </div>   
            </li> -->
<!--  -->
            <li>
              <a href="#/">服务</a>
              <div class="item-child">
                <div class="container">
                </div>
              </div>   
            </li>
            <li>
              <a href="#/">社区</a>
              <div class="item-child">
                <div class="container">
                </div>
              </div>   
            </li>
          </ul>
        </div>
        <div class="nav-header-search">
          <div class="search-input">
            <input type="text" placeholder="小米10">
          </div>
          <div class="search-btn">
            
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavHeader',
  data(){
    return{
      username:'xiaohong',
      phonelist:[],
    }
  },
  mounted(){
    this.getHeaderMsg()
  },
  methods:{
    getHeaderMsg(){
      this.axios.get("/user/productList").then((res)=>{
            this.phonelist = res.data
        })
    }
  },
  filters:{
    currency(val){
      if(!val)return "0.00"
      return '￥'+val+'元起'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import url('./../assets/sass/base.scss');
  .header{
    li{
      display: inline-block;
    }
    .nav-topbar{
      // min-width: 1100px;
      height: 40px;
      line-height: 40px;
      background:  #333;
      color: #b0b0b0;
      .container{
        .barlist-left ul li{
          &:after{
            content: '';
            width: 1px;
            height: 12px;
            background-color: #424242;
            display: inline-block;
            margin: 0 8px;
          }
          &.li-last-border:after{
            display: none;
          }
          a{
            color: #b0b0b0;
            &:hover{
              color: #ffffff;
            }
          }
        }
        .barlist-right{
          li{
            &:after{
              content: '';
              width: 1px;
              height: 12px;
              background-color: #424242;
              display: inline-block;
              margin: 0 8px;
            }
            &.li-last-border:after{
              display: none;
            }
            a{
              color: #b0b0b0;
              &:hover{
                color: #ffffff;
              }
            }
          }
          .barlist-cartbtn{
            display: inline-block;
            width: 120px;
            color: #b0b0b0;
            background: #424242;
            margin: 0 0 0 25px;
            &:hover{
              color: #ff6700;
              background-color: #ffffff;
            }
          }
        }
      }
      
    }
    .nav-header{
      height: 100px;
      // overflow: hidden;
      .container{
        .nav-header-logo{
          height: 55px;
          width: 55px;
          display: inline-block;
          overflow: hidden;
          a{
            width: 110px;
            height: 55px;
            display: inline-block;
            background-color: #ff6700;
            
            &:before{
              content: '';
              display: inline-block;
              width: 55px;
              height: 55px;
              background-size: 55px;
              background: url('./../../public/images/mi-logo.png')  no-repeat center;
              transition: margin .2s;
            }
            &:after{
              content: '';
              display: inline-block;
              width: 55px;
              height: 55px;
              background-size: 55px;
              // transition: margin .2s;
              background: url('./../../public/images/mi-home.png')  no-repeat center;
            }
            &:hover:before{
              margin-left:-110px; 
              transition: margin .2s;
            }
          }
        }
        .nav-header-list{
          width: 850px;
          margin-left:-220px; 
          height: 100px;
          // background: red;
          display: inline-block;
          
          ul{
            line-height: 100px;
            li{
              &:hover{
                  a{
                    color: #ff6700;
                  }
                  .item-child {
                    display: block;
                    // transition: all .6s;
                  }
              }
              float: left;
              padding: 0 10px;
              a{
                color: #000000;
                font-size: 18px;
              }
              .item-child{
                display: none;
                position:absolute;
                transition: all .6s;
                // border-top:1px solid #e0e0e0;
                box-shadow:0px 7px 6px 0px rgba(0,0,0,0.11); 
                left: 0;
                right: 0;
                ul{
                  line-height: normal;
                  height: 230px;
                  width: 100%;
                  &:before{
                    display: inline-block;
                    content: '';
                    background: #e0e0e0;
                    width: 100%;
                    height: 1px;
                  }
                  li{
                    width: 180px;
                    text-align: center;
                    padding: 35px 12px 0;
                    // height: 200px;
                    a{
                      font-size: 12px;
                      &:hover{
                        color: #000000;
                      }
                      .item-product-model-img{
                        width: 160px;
                        height: 110px;
                        margin: 0 auto 16px;
                        text-align: center;
                      }
                      .item-product-model-title{
                        color:#333;
                      }
                      .item-product-model-price{
                        color: #ff6700;
                      }
                    }
                    &:before{
                      display: inline-block;
                      content: '';
                      width: 1px;
                      height: 100px;
                      background-color: #e0e0e0;
                      float: left;
                    }
                    &.li-first-border:before{
                      width: 0;
                      display: none;
                    }
                  }
                  
                }
              }
            }
          }
        }
        .nav-header-search{
          width: 295px;
          height: 100px;
          margin-top: 25px;
          .search-input{
            float: left;
            height: 48px;
            width: 233px;
            border: 1px solid #e0e0e0;
            input{
              width: 96%;
              height: 100%;
              border:none;
              padding: 0 2%;
            }
          }
          .search-btn{
            float: left;
            width: 52px;
            height: 48px;
            border: 1px solid #e0e0e0;
            border-left: none;
          }
        }
      }
    }
  }
</style>