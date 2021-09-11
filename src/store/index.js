import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutaions"
import actions from "./action"

Vue.use(Vuex);

const state = {
	username: '',       //登陆用户名
	cartCount: 0        //购物车数量
}

export default new Vuex.Store({
	state,
	mutations,
	actions
});