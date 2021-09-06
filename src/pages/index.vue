<template>
    <div class="index">
        <div class="container">
            <!-- 大图轮播 -->
            <div class="swiper-box">
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    <!-- 分页器 -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <!-- 上下页 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <!-- 广告位 -->
            <div class="ads-box"></div>
            <div class="banner"></div>
            <!-- 商品列表 -->
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script src="dist/js/swiper-bundle.min.js"></script>
<script>
    import ServiceBar from "../components/ServiceBar"
    import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "index",
        components:{
            Swiper,
            SwiperSlide,
            ServiceBar
        },
        data(){
            return{
                //轮播图方块特效
                swiperOption:{
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
                slideList:[
                    {
                        id:'42',
                        img:'/imgs/slider/slide-1.jpg'
                    },
                    {
                        id:'45',
                        img:'/imgs/slider/slide-2.jpg'
                    },
                    {
                        id:'45',
                        img:'/imgs/slider/slide-3.png'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-4.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-5.jpg'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/config";
    @import "../assets/scss/mixin";
    .index{
        .container{
            .swiper-box{
                width: 1260px;
                img{
                    width: 100%;
                    height: 460px;
                }
            }
        }
    }
</style>