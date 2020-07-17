import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css';

import {
  Button,
  InputNumber,
  Layout,
  Menu,
  Form,
  Radio,
  Input,
  Row,
  Col
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Radio);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
