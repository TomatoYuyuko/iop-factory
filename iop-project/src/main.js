import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Mint from 'mint-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/styles/main.css'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(ElementUI);
Vue.use(Mint);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
