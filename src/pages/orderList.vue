<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>您所有的订单都在这里</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <loading v-if="loading"></loading>
                    <div class="order" v-for="(order,index) in list" :key="index">
                        <div class="order-title">
                            <div class="item-info fl">
                                {{ order.createTime }}
                                <span>|</span>
                                {{ order.receiverName }}
                                <span>|</span>
                                订单号：{{ order.orderNo }}
                                <span>|</span>
                                {{ order.paymentTypeDesc }}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{ order.payment }}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                                    <div class="good-img">
                                        <img v-lazy="item.productImage">
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{ item.productName }}</div>
                                        <div class="p-money">{{ item.totalPrice + 'X' + item.quantity }}元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status == 20">
                                <a href="javascript:;">{{ order.statusDesc }}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
                            </div>
                        </div>
                    </div>
                    <el-pagination
                        class="pagination"
                        background
                        layout="prev, pager, next"
                        :pageSize="pageSize"
                        :total="total"
                        @current-change="handleChange"
                    >
                    </el-pagination>
                    <no-data v-if="!loading && list.length == 0"></no-data>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import {Pagination, Button} from "element-ui";
import infiniteScroll from 'vue-infinite-scroll';

export default {
    name: 'order-list',
    data() {
        return {
            loading: false,
            list: [],
            pageSize: 10,
            pageNum: 1,
            total: 0
        }
    },
    components: {
        Loading,
        NoData,
        OrderHeader,
        [Pagination.name]: Pagination,
        [Button.name]: Button
    },
    directives: {
        infiniteScroll
    },
    mounted() {
        this.getOrderList();
    },
    methods: {
        getOrderList() {
            this.loading = true;
            this.axios.get('/orders', {
                params: {
                    pageSize: 5,
                    pageNum: this.pageNum
                }
            }).then((res) => {
                this.loading = false;
                this.list = this.list.concat(res.list);
                this.total = res.total;
            }).catch(() => {
                this.loading = false;
            });
        },
        goPay(orderNo) {
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo
                }
            });
        },
        handleChange(pageNum) {
            this.pageNum = pageNum;
            this.getOrderList();
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.order-box {
    width: 1226px;

    .order {
        width: 100%;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }

        .order-title {
            height: 78px;
            line-height: 78px;
            font-size: 18px;
            padding: 0 40px;
            background-color: $colorH;
            border: 1px solid $colorE;

            .item-money {
                .money {
                    font-size: 25px;
                    color: red;
                }
            }
        }

        .order-content {
            display: flex;
            width: 100%;
            background-color: $colorG;
            border: 1px solid $colorE;

            .good-box {
                width: 88%;

                .good-list {
                    display: flex;
                    height: 120px;
                    padding-left: 40px;

                    .good-img {
                        width: 124px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .good-name {
                        margin: 0 auto;
                        font-size: $fontH;

                        .p-name, .p-money {
                            float: left;
                            line-height: 120px;
                            margin-right: 30px;
                        }

                        .p-money {
                            float: left;
                            line-height: 120px;
                        }
                    }
                }
            }

            .good-state {
                margin: 0 auto;
                line-height: 120px;

                a {
                    text-align: center;
                    font-size: 20px;
                    color: $colorA;
                }
            }
        }
    }

    .pagination {
        text-align: center;

    }

    .load-more {
        text-align: center;
    }
}

</style>