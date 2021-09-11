import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";                           //图片懒加载
import VueLazyload from "vue-lazyload";
import VueCookie from "vue-cookie";

//mock开关
const mock = false;
if (mock){
	require('./mock/api');
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
//超时设置
axios.defaults.timeout = 8000;
//根据环境变量进行获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//错误拦截
axios.interceptors.response.use(function (response){
	//获取返回值
	let res = response.data;
	let path = location.hash;           //获取路径 
	if (res.status == 0){
		return res.data;
	} else if (res.status == 10){
		if (path != '#/index'){
			window.location.href = '/#/login';
		}
	} else {
		alert(res.msg);
		return Promise.reject(res);         //抛出异常
	}
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
//图片懒加载
Vue.use(VueLazyload,{
	loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
	store,
	router,
    render: h => h(App),
}).$mount('#app')
