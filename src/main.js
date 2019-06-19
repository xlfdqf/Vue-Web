import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Popover,Col,Row,Tabs,TabPane,Card, Button, Pagination } from 'element-ui';
import VueScrollTo from "vue-scrollto";
/* import 'lib-flexible/flexible'; */
Vue.config.productionTip = false
Vue.use(Popover);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(VueScrollTo);
Vue.use(Card);
Vue.use(Button);
// Vue.use(Divider);
Vue.use(Pagination);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
