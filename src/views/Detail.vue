<template>
    <div class="detail">
         <CommonHeader2/>
       <div class="card">
             <el-card class="box-card">
               <div class="card-content">
                  <div class="list-top2">
                        <div class="list-top-left fl">
                            <div class="driver fl"></div>
                            <span class="news-dynamic fl">新闻动态</span>
                        </div>
                  </div>
                  <div class="divider"></div>
                  <div class="detail-tit">
                      <p class="tit-text">{{list.title}}</p>
                      <p class="tit-text2">发布时间：{{list.date}}</p>
                      <div class="pre" v-html="list.content"></div>
                  </div>
                   <div class="divider" style="margin-top:10px;"></div>
                   <div class="detail-footer">
                       <div class=" footer-left fl">
                           <a href="#"  @click="pre"><p class="first" style="padding-bottom:5px;">上一篇：{{list.pre}}</p></a>
                           <a href="#"  @click="next"><p class="last">下一篇：{{list.next}}</p></a>
                       </div>
                       <div class=" footer-right fr">
                          <router-link to="/list"><el-button type="danger" plain @click="up">返回列表</el-button></router-link>
                       </div>
                   </div>
               </div>
             </el-card>
       </div>
    </div>
</template>

<style>
    .card{
        width:1180px;
        height:auto;
        margin: 0 auto;
        margin-top: 120px!important;
        margin-bottom: 40px;
        text-align: left;
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
    .list-top2{
       height:20px;
       box-sizing: border-box;
       margin-bottom: 15px;
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
    .tit-text{
        text-align: center;
        color: #333333;
        font-size: 24px;
        font-weight: bold;
        padding-top:40px;
        padding-bottom: 20px;
    }
    .tit-text2{
      text-align: center;
      color: #999;
      font-size: 14px;
      padding-bottom: 40px;
    }
    .pre{
        width:1120px;
        margin: 0 auto;
    }
    .pre p{
        color: #333333;
        font-size: 14px;
        margin-bottom: 30px;
    }

    .detail-footer{
        width: 100%;
        height: 145px;
        box-sizing: border-box;
         margin-top: 50px;
        margin-bottom: 35px;
    }
    .detail-footer p{
        color: #999;
        font-size: 14px;
    }
</style>

<script>
import CommonHeader2 from '../components/Header2.vue';
    export default {
        name: 'detail',
        components: {
            CommonHeader2,
            },
        data() {
            return {
               list:{
                   title:'标题11',
                   date:'2019-6-10',
                   content:'<p>近来，证监会发布《关于对通过互联网开展股权融资活动的机构进行专项检查的通知》，让所有现行的股权众筹平台都为之一震让所有现行的股权众筹平台都为之一震让所有现行的股权众筹平台都为之一震让所有现行的股权众筹平台都为之一震。</p><p>有解读说，目前大多数股权众筹平台都只是冠以股权众筹的名义而已。</p><p>除了拥有公募股权众筹牌照的京东、平安、阿里外，其他的都将被毙命。</p><p>这一解读立马得到了业界人士的佐证：检查不是消灭，是为了避免社交众筹、私募性质的众筹、基金众筹、集资众筹、</p><p>传销众筹等“伪众筹”混淆“股权众筹”概念，给引导股权众筹今后的正规化发展扫清障碍。</p><p>融都网贷系统CEO宗建成认为，股权众筹作为解决小微企业融资需求的新兴渠道，国家鼓励和支持的态度已经多次明确，未来可有广阔的发展空间</p><p>不过，不得不承认的是，目前的股权众筹领域还在初步阶段，与现有法规冲突，也有自相矛盾之处，这些都需要进一步改进和规范。</p><p>股权众筹的平台定性<p>中介呢还是非中介。不管是央行的互联网金融指导意见，还是证监会的专项检查通知，定义的“股权众筹”都是“中介机构平台</p><p>(互联网网站或其他类似的电子媒介)”。而所谓“中介”，即如P2P定义类似，是撮合投融资双方的交易，交易完成则职责完成。</p><p>但是，现实的股权众筹并没有如此纯粹，一来平台盈利可能通过抽取融资者一定股权来实现，二来筹资成功后平台仍需进行跟踪式的投后管理，</p><p>这些都是与“中介机构平台”相悖的。</p><p>非法融资与股权“众”筹</p><p>股权众筹本身具有“公开，小额，大众”的特征，本次专项检查通知中也有明确指出。但在《证券法》放开公募之前，股权众筹都极易踏入非法融资一列。</p><p>目前，《私募股权众筹融资管理办法》仍处意见征求阶段，最初定位的私募性质仍未改变，除了有公募牌照的三家机构，其余平台都在私募范围。</p><p>根据《证券法》现有规定，公开发行证券须符合法律法规的条件，并经国务院证券监督管理机构或国务院授权的部门核准，</p><p>否则任何单位和个人都不得向不特定对象发行证券、向特定对象发行证券累计不得超过200人。</p><p>为了避开“非法集资”的红线，一些“股权众筹”平台采用合格投资人制度，设置投资门槛和金额限制，这也许会变得合规，但却偏离了股权众筹的本意。</p>',
                   pre:'11111通过“观数”实现“观人”，观数科技深挖社交数据实现用户精准画像', //上一篇
                   next:'22222通过“观数”实现“观人”，观数科技深挖社交数据实现用户精准画像',//下一篇
                 }
            }
        },
        methods:{
           up:function(){
                window.scrollTo( 0, 0 ); 
           },
           pre(){
               alert('上一篇')
           },
            next(){
               alert('下一篇')
           },
        }
    }
</script>