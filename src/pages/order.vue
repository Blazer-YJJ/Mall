<template>
    <div>
        <order-header v-bind:title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import OrderHeader from "../components/OrderHeader";
    import ServiceBar from "../components/ServiceBar";
    import NavFooter from "../components/NavFooter";

    export default {
        name: "order",
        data(){
            return{
                title: '',
                tip: ''
            }


        },
        components: {
            ServiceBar,
            OrderHeader,
            NavFooter
        },
        mounted() {
            let path = this.$route.path;

            if (path == '/order/confirm'){
                this.title = '订单确认';
                this.tip = '请认真查看您的收货地址是否正确'
            } else if (path == '/order/list'){
                this.title = '订单列表';
                this.tip = '请认真查看您的商品以及数量是否选购正确'
            } else if (path == '/order/pay'){
                this.title = '支付确认';
                this.tip = '请您在三十分钟内进行付款，逾期则自动取消订单'
            }
        }
    }
</script>

<style lang="scss">

</style>