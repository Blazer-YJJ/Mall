import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router';
//mock开关
const mock = false;
if (mock){
	require('./mock/api');
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = 'https://mobile-ms.uat.homecreditcfc.cn/mock/613085d00aa6f20027717bfa/api';
//超时设置
axios.defaults.timeout = 8000;
//根据环境变量进行获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//错误拦截
axios.interceptors.response.use(function (response){
	//获取返回值
	let res = response.data;
	if (res.status == 0){
		return res.data;
	} else if (res.status == 10){
		window.location.href = '/#/login';
	} else {
		alert(res.msg);
	}
});

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')
