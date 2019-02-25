import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import M_Index from './views/mobile/M_Index.vue'

Vue.use(Router);
let routes = [];
let routesForPC = [{
    path: '/',
    name: 'index',
    component: Index
}];
let routesForM = [{
    path: '/',
    name: 'index',
    component: M_Index
}];
//平台、设备和操作系统
let system = {
    win: false,
    mac: false,
    xll: false
};
//检测平台
let p = navigator.platform;
system.win = p.indexOf("Win") === 0;
system.mac = p.indexOf("Mac") === 0;
system.x11 = (p === "X11") || (p.indexOf("Linux") === 0);
//切换路由
if (system.win || system.mac || system.xll) {
    routes = routesForPC
    //routes = routesForM
} else {
    routes = routesForM
}
export default new Router({
    routes
})
