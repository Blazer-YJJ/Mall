<template>
    <div class="index">
        <div class="container">
            <!-- 商品菜单 -->
            <div class="nav-menu">
                <ul class="menu-wrap">
                    <li class="menu-item">
                        <a href="javascript:;">手机</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-1.png'">
                                        {{ sub ? sub.name : '小米mix4' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电视</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-2.png'">
                                        {{ sub ? sub.name : '小米11' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">笔记本&nbsp;平板</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-3.jpg'">
                                        {{ sub ? sub.name : 'Redmi k40' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">家电</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-4.jpg'">
                                        {{ sub ? sub.name : '小米10' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">出行&nbsp;穿戴</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-1.png'">
                                        {{ sub ? sub.name : '小米mix4' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">智能&nbsp;路由器</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-2.png'">
                                        {{ sub ? sub.name : '小米11' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电源&nbsp;配件</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-3.jpg'">
                                        {{ sub ? sub.name : 'Redmi k40' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">健康&nbsp;儿童</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-4.jpg'">
                                        {{ sub ? sub.name : '小米10' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">耳机&nbsp;音箱</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-2.png'">
                                        {{ sub ? sub.name : '小米11' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">生活&nbsp;箱包</a>
                        <div class="children">
                            <ul v-for="(item,i) in menuList" :key="i">
                                <li v-for="(sub,j) in item" :key="j">
                                    <a :href="sub ? '/#/porduct/' + sub.id:''">
                                        <img v-lazy="sub ? sub.img:'/imgs/item-box-3.jpg'">
                                        {{ sub ? sub.name : 'Redmi k40' }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 大图轮播 -->
            <div class="swiper-box">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/' + item.id">
                            <img v-lazy="item.img">
                        </a>
                    </swiper-slide>
                    <!-- 分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 上下页 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <!-- 广告位 -->
        <div class="ads-box">
            <a :href="'/#/product/' + item.id" v-for="(item,index) in adsList" :key="index">
                <img v-lazy="item.img" alt="">
            </a>
        </div>
        <div class="banner">
            <a href="/#/product/30">
                <img v-lazy="'/imgs/banner-1.png'" alt=""/>
            </a>
        </div>
        <!-- 商品列表 -->
        <div class="product-box">
            <div class="container">
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr" :key="j">
                                <span :class="{'new-pro':j%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="item.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{ item.name }}</h3>
                                    <p>{{ item.subtitle }}</p>
                                    <p class="price" @click="addCart(item.id)">{{ item.price }}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal
            title="提示"
            sureText="查看购物车"
            btnType="1"
            modalType="middle"
            :showModal="showModal"
            @:submit="goToCart"
            @:cancel="showModal=false"
        >
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
import ServiceBar from "../components/ServiceBar"
import Modal from "../components/Modal";
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: "index",
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar,
        Modal
    },
    data() {
        return {
            //轮播图方块特效
            swiperOption: {
                autoplay: true,
                loop: true,
                effect: "cube",
                slidesPerView: 1,
                centeredSlides: true,
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                showModal: false,
                //分页器及上下页
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            //轮播图片
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.png'
                },
                {
                    id: '47',
                    img: '/imgs/slider/slide-4.jpg'
                },
                {
                    id: '48',
                    img: '/imgs/slider/slide-5.jpg'
                }
            ],
            //商品菜单内容
            menuList: [
                [
                    {
                        id: '30',
                        img: '/imgs/item-box-1.png',
                        name: '小米mix4'
                    },
                    {
                        id: '31',
                        img: '/imgs/item-box-2.png',
                        name: '小米11'
                    },
                    {
                        id: '32',
                        img: '/imgs/item-box-3.jpg',
                        name: 'Redmi k40'
                    },
                    {
                        id: '33',
                        img: '/imgs/item-box-2.png',
                        name: '小米10'
                    }
                ],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            //广告位
            adsList: [
                {
                    id: '33',
                    img: '/imgs/ads/ads-1.png',
                },
                {
                    id: '48',
                    img: '/imgs/ads/ads-2.jpg',
                },
                {
                    id: '45',
                    img: '/imgs/ads/ads-3.png',
                },
                {
                    id: '47',
                    img: '/imgs/ads/ads-4.jpg',
                }
            ],
            //主页商品信息
            phoneList: [],
            showModal: false
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        //发送请求
        init() {
            this.axios.get('/products', {
                params: {
                    categoryId: 100012,
                    pageSize: 14
                }
            }).then((res) => {
                res.list = res.list.slice(6, 14);
                this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
            })
        },
        addCart(id) {
            this.axios.post('/carts', {
                productId: id,
                selected: true
            }).then((res) => {
                this.showModal = true;
                this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
            }).catch(() => {
                this.showModal = true;
            })
        },
        goToCart() {
            this.$router.push('/cart');
        }
    }
}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";

.index {
    margin: 0 auto;

    .container {
        width: 1226px;
        margin: 0 auto;

        .nav-menu {
            position: absolute;
            width: 264px;
            height: 449px;
            background-color: #55585a42;
            z-index: 5;
            box-sizing: border-box;

            .menu-wrap {
                .menu-item {
                    height: 45px;
                    line-height: 45px;

                    a {
                        position: relative;
                        color: $colorG;
                        font-size: $fontI;
                        padding-left: 35px;
                        display: block;

                        &:after {
                            position: absolute;
                            right: 30px;
                            top: 15px;
                            content: ' ';
                            @include bgImg(10px, 15px, './../../public/imgs/icon-arrow.png')
                        }
                    }

                    &:hover {
                        background-color: $colorA;

                        .children {
                            display: block;
                        }
                    }

                    .children {
                        display: none;
                        width: 962px;
                        height: 451px;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        border: 1px solid $colorH;
                        background: $colorG;

                        ul {
                            display: flex;
                            //两边对齐
                            justify-content: space-between;
                            height: 75px;

                            li {
                                height: 75px;
                                line-height: 75px;
                                width: 24.9%;
                                padding-left: 23px;
                                z-index: 5;

                                a {
                                    color: $colorB;
                                    font-size: 14px;
                                }

                                img {
                                    width: 35px;
                                    height: 42px;
                                    margin: 0 auto;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }

        .swiper-box {
            .swiper-container {
                width: 1226px;
                height: 451px;

                .swiper-button-prev {
                    left: 274px;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .ads-box {
        width: 1226px;
        margin: 0 auto;
        @include flex();

        a {
            width: 24%;
            height: 160px;
            margin: 45px 0 30px 0;
        }
    }

    .banner {
        width: 1226px;
        margin: 0 auto;
    }

    .product-box {
        background-color: $colorJ;
        padding: 30px 0 50px;

        .wrapper {
            display: flex;

            .banner-left {
                margin-right: 16px;

                img {
                    width: 224px;
                    height: 619px;
                }
            }

            .list-box {
                .list {
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    .item {
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;

                        span {
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size: 14px;
                            line-height: 24px;
                            color: $colorG;

                            &.new-pro {
                                background-color: #7ECF68;
                            }

                            &.kill-pro {
                                background-color: #E82626;
                            }
                        }

                        .item-img {

                            img {
                                width: 100%;
                                height: 195px;
                            }
                        }

                        .item-info {
                            h3 {
                                font-size: $fontJ;
                                color: $colorB;
                                line-height: $fontJ;
                                font-weight: bold;
                            }

                            p {
                                color: $colorD;
                                line-height: 13px;
                                margin: 6px auto 13px;
                            }

                            .price {
                                color: #F20A0A;
                                font-size: $fontJ;
                                font-weight: bold;
                                cursor: pointer;

                                &:after {
                                    @include bgImg(22px, 22px, '/imgs/icon-cart.png');
                                    content: ' ';
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
</style>