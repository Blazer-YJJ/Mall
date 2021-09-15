import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";                           //图片懒加载
import VueLazyload from "vue-lazyload";
import VueCookie from "vue-cookie";
import store from "./store";
import {Message} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";

//mock开关
const mock = false;
if (mock){
	require('./mock/api');
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
//超时设置
axios.defaults.timeout = 8000;
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
		return Promise.reject(res);
	} else {
		this.$message.warning(res.msg);
		return Promise.reject(res);         //抛出异常
	}
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(Message.success('页面刷新成功！'));
//图片懒加载
Vue.use(VueLazyload,{
	loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
	store,
	router,
    render: h => h(App),
}).$mount('#app')
