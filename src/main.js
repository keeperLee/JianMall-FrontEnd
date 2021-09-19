import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueLazyload from "vue-lazyload"
import VueCookie from 'vue-cookie'
import store from './store'


// import env from './env'
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//mock开关
const mock = false;
if (mock) {
    require('./mock/api')
}
//更具环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function (response) {
    let res = response.data;
    let path = location.hash;

    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login';
        }
    } else {
        alert(res.msg);
        return Promise.reject(res);
    }
})
Vue.prototype.$axios = axios;
Vue.use(VueCookie);
Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
