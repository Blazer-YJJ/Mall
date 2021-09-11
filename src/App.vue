<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                res:{}
            };
        },
        mounted() {
            this.getUser();
            this.getCartCount();
        },
        methods: {
            //用户信息
            getUser(){
                this.axios.get('/user').then(() => {
                    //to-do  存储到Vuex
                })
            },
            //购物车商品数量
            getCartCount(){
                this.axios.get('carts/products/sum').then(() => {

                })
            }
        }
    };
</script>

<style lang="scss">
    @import "assets/scss/config";
    @import "assets/scss/base";
    @import "assets/scss/button";
    @import "assets/scss/reset";
</style>
