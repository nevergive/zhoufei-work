<!--
 * @Author: your name
 * @Date: 2020-09-17 15:39:16
 * @LastEditTime: 2020-09-21 09:34:43
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
                <li><a href="#/"><em></em>预约维修服务</a></li>
                <li><a href="#/"><em></em>7天无理由退货</a></li>
                <li><a href="#/"><em></em>15天免费换货</a></li>
                <li><a href="#/"><em></em>满99元包邮</a></li>
                <li><a href="#/"><em></em>520余家售后网点</a></li>
              </ul>
            </div>
            <div class="footer-listtext">
              <dl>
                <dt>帮助中心</dt>
                <dd>账户管理</dd>
                <dd>购物指南</dd>
                <dd>订单操作</dd>
              </dl>
              <dl>
                <dt>服务支持</dt>
                <dd>售后政策</dd>
                <dd>自助服务</dd>
                <dd>相关下载</dd>
              </dl>
              <dl>
                <dt>线下门店</dt>
                <dd>小米之家</dd>
                <dd>服务网站</dd>
                <dd>授权体验店</dd>
              </dl>
              <dl>
                <dt>关于小米</dt>
                <dd>了解小米</dd>
                <dd>加入小米</dd>
                <dd>投资者关系</dd>
                <dd>企业社会责任</dd>
                <dd>廉洁举报</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>新浪微博</dd>
                <dd>官方微信</dd>
                <dd>联系我们</dd>
                <dd>公益基金会</dd>
              </dl>
              <dl>
                <dt>特色服务</dt>
                <dd>F码通道</dd>
                <dd>礼物码</dd>
                <dd>防伪查询</dd>
              </dl>
              <div class="footer-phonenum">
                <h1>400-100-5678</h1>
                <p>8:00-18:00（仅收市话费）</p>
                <a class="footer-phonebtn"><em></em>人工客服</a>
                <div class="footer-share">
                  关注小米:
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="footer-down">
          <div class="container">
            <div class="footer-logo">
                <img src="./../../public/images/logo-footer.png" alt="">
            </div>
            <div class="footer-down-nav">
              <p>小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈 | Select Location</p>
              <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号<br/>
                （京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告<br/>
                增值电信业务许可证 网络食品经营备案 京食药网食备201810017   食品经营许可证<br/>
                违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
            </div>
            <div class="footer-down-links">
              <img src="./../../public/images/footer-truste.png" alt="">
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
      .container{
        justify-content: normal;
        display: block;
        .footer-nav{
          width: 100%;
          padding: 27px 0;
          border-bottom: 1px solid #e0e0e0;
          ul{
            clear: both;
            height: 25px;
            li{
              width: 19.8%;
              height: 25px;
              font-size: 16px;
              float: left;
              &:last-child{
                  &:after{
                  width: 0px;
                }
              }
              &:after{
                content: '';
                display: inline-block;
                width: 1px;
                height: 25px;
                background-color: #e0e0e0;
                float: right;
              }
              
              a{
                color: #000000;
              }
              em{
                display: inline-block;
                width: 25px;
                height: 25px;
                background: #000000;
                vertical-align: -6px;
                margin-right: 6px;
              }

            }
             
          }
        }
        .footer-listtext{
          width: 100%;
          padding: 40px 0;
          height: 180px;
          dl{
            float: left;
            width:160px;
            dt{
              color: #424242;
              font-size: 14px;
              margin: 0 0 26px 0;
            }
            dd{
              margin-inline-start: 0px;
              color: #757575;
              margin: 10px 0 0 0;
            }
          }
          .footer-phonenum{
            float: left;
            width: 251px;
            height: 111px;
            border-left: 1px solid #e0e0e0;
            margin: 0 0 0 10px;
            h1{
              color:#ff6700;
              font-size: 22px;
            }
            p{
              color:#616161;
              font-size: 12px;
            }
            .footer-phonebtn{
              display: inline-block;
              width: 120px;
              height: 30px;
              border: 1px solid #ff6700;
              color: #ff6700;
              font-size: 12px;
              line-height: 30px;
              transition: all 0.6s;
              margin: 10px 0;
              &:hover{
                background-color: #ff6700;
                color:#ffffff;
                transition: all 0.6s;
              }
            }
          }
        }
      }
    }
    .footer-down{
      padding: 30px 0 ;
      font-size: 12px;
      background: #fafafa;
      .footer-logo{
      }
      .footer-down-nav{
        text-align: left;
        margin: 0 0 0 -180px;
      }
      .footer-down-links{
        
      }
    }
  }
</style>