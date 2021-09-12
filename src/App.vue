<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {

    },
    data(){
        return {

        }
    },
    mounted(){
        this.getUser();
        this.getCartCount();
    },
    methods:{
        // 获取用户信息
        getUser(){
            this.axios.get('/user').then((res)=>{
                this.$store.dispatch('saveUserName',res.username);
            })
        },
        // 获取商品数量
        getCartCount(){
            this.axios.get('/carts/products/sum').then((res)=>{
                this.$store.dispatch('saveCartCount',res);
            })
        }
    }
}
</script>

<style lang="scss">
    @import "assets/scss/config";
    @import "assets/scss/base";
    @import "assets/scss/button";
    @import "assets/scss/reset";
</style>
