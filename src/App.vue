<template>
  <div id="app">
    <!-- <CommonHeader/> -->
    <router-view/>
    <CommonHFooter/>
    <up-component></up-component>
  </div>  
  
</template>

<script>
// import CommonHeader from './components/Header.vue';
import CommonHFooter from './components/Footer.vue';
import UpComponent from  "./components/Up.vue";
import "@/assets/css/common.css";

export default {
  name: 'app',
  components: {
    // CommonHeader,
    CommonHFooter,
    UpComponent,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-tabs{
  box-shadow: 0px 10px 30px 0px rgba(16, 43, 77, 0.039);

}
@media (max-width: 1180px) {
  body{
    min-width: 1180px;
  }

}



</style>
