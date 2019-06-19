<template>
    <div class="join">
        <CommonHeader/>
        <div class="join-banner img"></div>
        <div class="join-content-wrap">
            <div class="join-content">
                <div class="join-book"></div>
                <el-tabs tab-position="left">
                    <el-tab-pane :label="item.name" v-for="(item,key) in list" :key="key">
                        <div class="join-duties">
                            <h5>
                                岗位职责
                            </h5>
                            <div class="duties-content" v-html="item.responsibilities">
                               
                            </div>
                        </div>
                        <div class="join-claim" >
                            <h5>
                                岗位要求
                            </h5>
                            <div  class="duties-content" v-html="item.skills"></div>
                        </div>
                        <div class="duties-bottom" >简历投递，关注微信公众号</div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<style>
    .join-banner {
        font-size: 0;
        background: url("../assets/image/join_banner.png");
        max-width: 1920px;
        background-repeat: no-repeat;
        height: 400px;
        position: relative;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .join-content-wrap {
        width: 100%;
        height: 710px;
        background-color: transparent;
     /*    margin-top: 348px; */
        margin-bottom: 59px;
    }

    .join-content {
        background-color: #ffffff;
        width: 1180px;
        position: relative;
        margin: 0 auto;
        margin-top: -47px;
    }



    .join-content .el-tabs .el-tabs__item {
        padding: 0 50.5px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: #333333;
    }

    .join-content .el-tabs .el-tabs__item:hover {
            color: rgb(48, 89, 255);
    }

    .join-content .el-tabs .el-tabs__item.is-active {
        color: rgb(48, 89, 255);
    }

    .el-tabs__active-bar {
        background-color: rgb(48, 89, 255);
    }

    .about-content .el-tab-pane {
        text-align: left;
    }

    .join-duties h5,
    .join-claim h5 {
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: rgb(51, 51, 51);
        font-weight: bold;
        text-align: left;
    }

    .duties-content{
        text-align: left;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb(81, 89, 97);
    }
    .duties-content p{
        padding: 11px 0;
    }
    .text {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb(81, 89, 97);
        line-height: 2.143;
        text-align: left;
    }

    .join-content .el-tabs__content {
        padding: 40px;
    }

    .join-book {
        box-sizing: border-box;
        background-image: url("../assets/image/join_book.png");
        background-repeat: no-repeat;
        width: 302px;
        height: 258px;
        position: absolute;
        top: -221px;
        right: 85px;

    }

    .join-content .el-tabs__header {
        background-color: rgb(255, 255, 255);
       /*  box-shadow: 0px 0px 30px 0px rgba(16, 43, 77, 0.039); */
    }
   .join-content .el-tabs__content {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 30px 0px rgba(16, 43, 77, 0.039);
  }
    .join-content .el-tabs__nav-wrap::after {
        background-color: transparent;
    }
    .duties-bottom{
        text-align: left;
        color: rgb(81, 89, 97);
        line-height: 2.143;
        font-size: 14px;
    }
</style>

<script>
import CommonHeader from '../components/Header.vue';
    export default {
        name: 'join',
          components: {
            CommonHeader,
            },
        data() {
            return {
                list: [
                    {
                        name: "ios开发工程师",
                        responsibilities:"<p>1、负责公司iOS App产品的代码架构设计、开发管理、开发文档整理；</p><p>2、与产品经理对接App的开发需求和文档需求。</p><p>3、带领iOS开发团队进行知识学习、任务分配、开发协作。</p><p>4、针对用户体验反馈，数据统计反馈等信息提出优化产品的建议。</p><p>5、能独立完成 iOS 软件开发，并且能解决项目中遇到的疑难杂症，这一点很重要。</p>",
                        skills:"<p>1、至少2年以上的iOS（iPhone/iPad）程序开发经验；</p><p>2、具有良好的Objective-C编码风格，熟悉MacOS，XCode及iPhoneSDK开发环境；</p><p>3、能够独立开发应用程序，有独立在iTunes应用商店上递交作品者优先；</p><p>4、熟悉常用算法、数据结构及设计模式，软件开发流程及面向对象软件设计方法；</p><p>5、熟悉视频、图片、即时聊天开发经验者优先；</p><p>6、有良好的团队合作意识,善于分析和解决问题；</p>",
                    },{
                         name: "APP运营专员",
                         responsibilities:"<p>1、 通过线上和线下手段进行APP推广，提升下载量、安装量、活跃度目标、曝光度；</p><p> 2、 对推广运营数据、用户行为数据等进行分析和挖掘，提升推广方式和运营质量；</p><p>3、 跟进及维护市场资源合作关系，负责与应用商店、应用市场、专业论坛、移动浏览器、热门应用、版主、设备植入等各类营销合作；</p> <p>  4、 积极寻求移动市场推广资源，负责对外与市场资源合作，寻找合作切入点，拓展合作渠道；</p><p>5、 对移动端营销推广工具、方法熟练使用，并根据数据结论反推产品和服务的优化</p>",
                         skills:"<p>1、至少2年APP推广运营经验；</p><p> 2、移动互联网行业，熟悉各种软件商店、论坛和渠道商；</p><p>3、熟悉IOS和Android平台及App产品，对App的推广和运营有自己的认识；</p><p>4、对移动市场数据敏感度高，密切跟踪移动互联网市场资源，有较好的数据处理能力和缜密的逻辑分析能力；</p><p> 5、对互联网事物，网络营销事件高度敏感，熟悉线上营销操作手法与互联网语言；</p><p>6、沟通能力强，能够跨部门沟通协调，保障工作进度的正常完成</p>",
                    },
                    {
                        name:"营销策划",
                        responsibilities:"<p>1、负责产品营销和市场活动类项目创意及策划工作，准确人群需求，具备制订、组织、执行、协调以及在执行过程中的监控和调优的能力，良好的客户沟通、引导及协调能力；</p><p>2、充分结合公司的客户资源和各类资源进行设计和撰写相应的活动方案；</p><p>3、对运营与活动的数据分析与机制完善，前后的相关数据、业绩目标等做出准确分析，对效果进行反馈总结，不断改进方案和活动</p><p>4、构建社群矩阵，策划、组织和执行社群活动，构建社群文化，提高社群影响力;</p>",
                        skills:"<p>1、一年以上营销活动策划经验，有手机APP营销活动策划工作经验为佳；</p><p>2、对线上线下各类型活动流程有较深入系统的了解；</p><p>3、需有一定运营分析能力，了解用户需求及偏好，针对不同用户进行不同的内容推荐；</p><p>4、具有良好的团队协作意识，富有激情，勇于挑战，抗压能力强。</p>"

                    }
                ],
            }
        }
    }
</script>