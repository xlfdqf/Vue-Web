<template>
  <div class="home">
    <CommonHeader/>
    <div class="banner"></div>
    <div class="btn-list" ref="btnList" :style="btnListStyle">
      <p class="logo-text">
         <span class="logo-text1">用必赚</span><br>
         <span class="logo-text2">必赚钱</span>
      </p>
      <div>
        <el-popover placement="bottom" width="100" trigger="hover" popper-class="btn-poper">
          <img class=" btn btn-anroid" slot="reference" src="../assets/image/btn_android2.png" />
          <div class="erweima">
            <img src="../assets/image/android2.png" />
          </div>
        </el-popover>
      </div>
      <div>
         <img class=" btn bnt-ios" slot="reference" src="../assets/image/btn_ios2.png" />
       <!--  <el-popover placement="right" width="490"  trigger="hover" popper-class="btn-poper" offset="300">
          <div class="erweima1">
            <img src="../assets/image/ios-l.png" />
          </div>
        </el-popover> -->
      </div>
    </div>
    <div class="home-list-wrap">
      <div class="news">
        <div class="news-content">
          <div class="news-top">
            <div class="news-top-left fl">
              <div class="news-icon fl"></div>
               <div class="news-title fl">新闻动态</div>
            </div>
            <div class="news-top-right fr">
              <a href="#">
                <div class="news-more fl" @click="top"><router-link to="/List" style="font-size:18px;color:#999999;" @click="more">更多</router-link></div>
                <div class="more-icon fl"><img src="../assets/image/back.png" /></div>
              </a>
            </div>
          </div>
          <div class="news-bottom">
            <div class="for" v-for="(item,key) in list" :key="key">
              <div class="news-lists fl">
                <span class="news-date fl">{{item.date}}</span>
                <span class="news-driver fl"></span>
                <span class="news-list fl"  @click="up"><router-link to="/detail">{{item.title}}</router-link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-list">
        <div class="home-item-out">
           <div class="home-item-in">
          <div class="home-item">
            <img src="../assets/image/01.png" />
          </div>
          <div class="home-item">
            <div class="home-item-tit">
                零投入的赚钱方法
            </div>
            <div class="home-item-driver"></div>
            <p>看广告就能赚钱</p>
            <p>没有繁杂任务</p>
            <p>邀请好友赚更多</p>
          </div>
          </div>
        </div>
         <div class="home-item-out"  style="background-color:#FAFAFA">
           <div class="home-item-in">
        <div class="home-item">
          <div class="home-item-tit2">
            每份信息都有价值
          </div>
          <div class="home-item-driver2"></div>
          <p style="text-align:left">以红包未媒介传递信息</p>
          <p style="text-align:left">让每次的接收都是一次小收获</p>
        </div>
        <div class="home-item">
          <img src="../assets/image/02.png" />
        </div>
          </div>
          </div>
      <div class="home-item-out">
           <div class="home-item-in">
        <div class="home-item">
          <img src="../assets/image/03.png"  style="margin-top:0px;"/>
        </div>
        <div class="home-item">
          <div class="home-item-tit" style="margin-top:266px;">
              广泛传播  进准投放
          </div>
           <div class="home-item-driver"></div>
          <p>只要有信号的地方都能覆盖</p>
          <p>可根据大数据只能AI营销推送，每一份都不浪费</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
a{
  color:#333333;
}
 .fl{
   float: left;
 }
 .fr{
   float: right;
 }
  .home {
    background-color: #ffffff;
    overflow: hidden;
    width: 100%;
  }
  .banner {
    background: url("../assets/image/banner.png");
    background-repeat: no-repeat;
    margin: 0 auto;
    padding: 0;
    left: 50%;
    margin-left: -960px;
    position: relative;
    width: 1920px;
    height: 960px;
  }
  .logo-text1{
      font-size: 120px;
      font-family: "RTWS YueRoundedGothic Demo";
      color: rgb(255, 255, 255);
      text-shadow: 0px 10px 10px rgba(8, 23, 73, 0.078);
  }
 .logo-text2{
     font-size: 120px;
  font-family: "RTWS YueRoundedGothic Demo";
  color: rgb(255, 255, 255);
  text-shadow: 0px 15px 10px rgba(64, 14, 16, 0.157);
  }
  .home-list-wrap {
    position: relative;
    margin-top: -30px;
    z-index: 8;
  }
  .news{
    width:1180px;
    height:250px;
    background-color: #ffffff;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 15px;
    -moz-box-shadow:0px 0px 20px #dddddd;
     -webkit-box-shadow:0px 0px 20px #dddddd;
      box-shadow:0px 0px 20px #dddddd;
      padding-top:30px; 
  }
  .news-content{
    width:1120px;
    height:220px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .news-top{
   height: 50px;
   box-sizing: border-box;
  }
   .news-bottom{
   width: 100%;
   height: 169px;
   box-sizing: border-box;
    overflow:hidden;
  }
  .news-icon{
    width:5px;
    height:30px;
    margin-right:20px;
    background-color: #EA573C;
  }
  .news-title{
     font-size: 24px;
     color: #333333;
  }
  .news-more{
    font-size: 18px;
    color: #999999;
  }
  .more-icon{
    padding:4px;
  }
.news-lists{
  width: 50%;
  height:25px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.news-date{
  font-size: 18px;
  color: #999999;
  margin-right: 20px;
  font-family: '微软雅黑'!important;
}
.news-driver{
  width:2px;
  height:20px;
  margin: 2px;
  background-color: #eeeeee;
  margin-right: 20px;
}
.news-list{
  font-size: 18px;
   width:420px;
  height:25px;
  color:#333333;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
  .home-list {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
.home-item-out{
  width: 100%;
   margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
.home-item-in{
  width: 1180px;
   margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
  .home-item {
    box-sizing: border-box;
    float: left;
    width: 50%;
    height: 800px;
    position: relative;
    top:0;
    left:0;
    text-align: left
  }
  .home-item img{
    margin-top:109px;
  }
  .btn{
    box-shadow: 10px 10px 10px 10px rgba(16, 43, 77, 0.039);
  }
  .home-item-tit{
        margin-top:236px;
        text-align: right;
         font-size: 60px;
  }
    .home-item-tit2{
        margin-top:266px;
         font-size: 60px;
  }
  .home-item-driver{
    float: right;
    margin-top:40px;
    width: 40px;
    height:6px;
    background-color: #EA523E;
    margin-bottom: 40px;
  }
    .home-item-driver2{
    float: left;
    margin-top:40px;
    width: 40px;
    height:6px;
    background-color: #EA523E;
    margin-bottom: 40px;
  }
   .home-item p{
     clear: both;
     font-size: 26px;
     color: #C8C8C8;
     padding: 15px 0;
     text-align: right;
   }
  .btn-poper .popper__arrow {
    display: none;
  }
  .btn-list {
    position: absolute;
    top:245px;
    left: 363px;
    z-index: 9;
  }
  .btn-list>div {
    float: left;
  }
  .btn-list .btn-anroid {
    margin-right: 38px;
  }
  .btn-poper {
    margin-top: 0 !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  /*  @media (max-width: 768px) {
     .btn-list{
       width:100%;
       float: none;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
     }
    } */
</style>
<script>
import CommonHeader from '../components/Header.vue';
  export default {
    name: 'home',
     components: {
      CommonHeader,
    },
    data() {
      return {
        btnListStyle:{
          left:'363',
        },
        initLeft:363,
        list:[{
          date:'6-10',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          },{
          date:'6-11',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          },{
          date:'6-12',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          },{
          date:'6-13',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          },{
          date:'6-14',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          },{
          date:'6-15',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          },{
          date:'6-16',
          title:'关于不法分子冒用融都科技名义从的相关事相事名义从的相关事相事'
          }]
      };
    },
    methods:{
      more(){
        this.headbg=true;
      },
      top(){
          window.scrollTo( 0, 0 ); 
      },
       up(){
          window.scrollTo( 0, 0 ); 
      },
      changeButtonOffetLeft(w){
          if(w>=1920){
            return;
        }
        if( w<1180){
            this.btnListStyle={left:'0px'}
            return;
        }
         this.btnListStyle={left:`${this.initLeft-(1920-w)/2}px`}
      },
    },
    mounted(){
      const htmlEle =  document.documentElement;
      window.addEventListener("resize",()=>{
         this.changeButtonOffetLeft(htmlEle.clientWidth)
      })
      this.changeButtonOffetLeft(htmlEle.clientWidth)
    },
  }
</script>