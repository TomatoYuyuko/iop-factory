import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/styles/main.css'

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
