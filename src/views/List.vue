<template>
    <div class="list">
        <CommonHeader2/>
        <div class="card">
             <el-card class="box-card">
               <!-- 列表页面 -->
                <div class="card-content" >
                    <div class="list-top">
                        <div class="list-top-left fl">
                            <div class="driver fl"></div>
                            <span class="news-dynamic fl">新闻动态</span>
                        </div>
                        <div class="list-top-right fr">
                            <router-link to="/home"><el-button>返回首页<img src="../assets/image/back.png" /></el-button></router-link>
                        </div>
                    </div>
                    <div class=" divider"></div>
                     <!-- list start -->
                     <div class="for" v-for="(item,key) in list" :key="key">
                     <div class="list-content">
                        <div class="title fl">{{item.title}}</div>
                        <div class="box-content fl" @click="top">
                            {{item.content}} <router-link to="/detail" class="detail-content fr">详情>></router-link>
                        </div>
                        <p class="release-time">发布时间：{{item.date}}</p>
                        <div class=" divider"></div>
                    </div>
                    </div>
                    <!-- list end -->
                    <!-- 分页 -->
                    <div class="pager">
                      <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout="prev, pager, next"
                        :total="total">
                    </el-pagination>
                  </div>
                    <!-- 分页结束 -->
                </div>
            </el-card>
        </div> 
    </div>
</template>

<style>
  .bgwhite{
    background-color: rgb(255, 255, 255)!important;
    box-shadow: 0px 0px 30px 0px rgba(16, 43, 77, 0.039)!important;
  }
  .for{
      text-align: left;
  }
    .card{
        width:1180px;
        height:auto;
        margin: 0 auto;
        margin-top: 120px!important;
        margin-bottom: 40px;
    }
    .card-content{
       padding:0px 10px;
       box-sizing: border-box;
       width: 1125px;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .list-top{
       height: 60px;
       box-sizing: border-box;
    }
    .driver{
        width:4px;
        height:18px;
        background-color:#EA543F;
        margin-right:10px;
    }
    .news-dynamic{
      font-size:16px;
      color:#333333;
      font-weight: bold;
    }
    .divider{
         border-bottom:.5px solid #eeeeee;
         height:0.5px;
         width:100%;
         margin: 0 auto;
    }
    .list-content{
        width: 100%;
        height: 172px;
        box-sizing: border-box;
    }
    .title{
        font-size: 16px!important;
        color: #333333!important;
        font-weight: bold;
        margin-top:28px;
        margin-bottom: 18px;
    }
    .box-content{
        width: 95%;
        height: 45px;
        clear: both;
        font-size: 14px;
        color: #666666;
        line-height: 24px;
        display: -webkit-box;    
        -webkit-box-orient: vertical;    
        -webkit-line-clamp: 2;    
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
    }
    .detail-content{
        width: 5%;
        box-sizing: border-box;
        color:#fd4331;
        position: absolute;
        top:24px;
        right:0;
    }
  .release-time{
      text-align: left;
      clear: both;
      padding-top:20px;
      padding-bottom: 20px;
      font-size: 14px;
      color:#c6c6c6;
  }
  .pager{
      box-sizing: border-box;
      padding-top: 40px;
      padding-bottom: 50px;
      text-align: center;
  }
</style>

<script>
import CommonHeader2 from '../components/Header2.vue';
    export default {
        name: 'list',
          components: {
            CommonHeader2,
            },
        data() {
            return {
                headbg:true,
                list: [{
                    title:'标题1',
                    content:'7月11日周六下午，融都众筹将分享我们打造开放型产品的思路，介绍我们所提供的API接口，的API接口，我们希望帮助融都我们希望帮助融都众筹的使用者们实现更多可能，也希望参与的朋友们可以一起探讨互动，我们希望帮助融都众筹的使用者们实现分享对融都众筹的宝贵建议， 介绍我们所提供的AP',
                    date:'2019-6-10'
                },{
                    title:'标题2',
                    content:'7月12日周六下午，融都众筹将分享我们打造开放型产品的思路，介绍我们所提供的API接口，我们希望帮助融都众筹的使用者们实现更多可能，也希望参与的朋友们可以一起探讨互动，我们希望帮助融都众筹的使用者们实现分享对融都众筹的宝贵建议， 介绍我们所提供的API接口，，介绍我们',
                    date:'2019-6-10'
                },{
                    title:'标题3',
                    content:'7月13日周六下午，融都众筹将分享我们打造开放型产品的思路，介绍我们所提供的API接口，我们希望帮助融都众筹的使用者们实现更多可能，也希望参与的朋友们可以一起探讨互动，我们希望帮助融都众筹的使用者们实现分享对融都众筹的宝贵建议， 介绍我们所提供的API接口，，介',
                    date:'2019-6-10'
                }],
                currentPage:1,
                pageSize:5,
                total:100,
                str:[],
            }
        },
        methods:{
            // 调用截取函数
            // dy_cutstr(){
            //   this.list.map(item=>{
            //        let slh=this.cutstr(item.content,200);
            //        this.str=slh;
            //         //  console.log(this.str);
            //   });
            // },
            top(){
              window.scrollTo( 0, 0 ); 
            },
            handleCurrentChange:function(val){ // 切换页数
                this.currentPage=val;
                let currentPage=this.currentPage;
                let pageSize=this.pageSize;
                 console.log('当前页：',currentPage,'每页条数：',pageSize);
            },
            // 截取字符串
        //  cutstr(str, len) {
        //       var str_length = 0;
        //       var str_len = 0;
        //       var str_cut = new String();
        //       var str_len = str.length;
        //     for (var i = 0; i < str_len; i++) {
        //       var a = str.charAt(i);
        //       str_length++;
        //         if (escape(a).length > 4) {
        //         //中文字符的长度经编码之后大于4
        //         str_length++;
        //       }
        //     str_cut = str_cut.concat(a);
        //     if (str_length >= len) {
        //       str_cut = str_cut.concat("...");
        //       return str_cut;
        //     }
        //     }
        //     //如果给定字符串小于指定长度，则返回源字符串；
        //     if (str_length < len) {
        //        return str;
        //     }
        //   } 
        }
    }
</script>