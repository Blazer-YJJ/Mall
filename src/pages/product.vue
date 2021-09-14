<template>
    <div class="product">
        <product-param v-bind:title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="bg">
            <div class="item-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide><img src="/imgs/product/swiper_1_1.jpeg"></swiper-slide>
                    <swiper-slide><img src="/imgs/product/swiper_1_2.jpeg"></swiper-slide>
                    <swiper-slide><img src="/imgs/product/swiper_1_3.jpeg"></swiper-slide>
                    <swiper-slide><img src="/imgs/product/swiper_1_4.jpeg"></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="video-bg" v-on:click="showSlide='slideDown'">
                <img src="./../../public/imgs/product/mix4video.png">
            </div>
            <div class="video-box" v-show="showSlide">
                <div class="overlay" ></div>
                <div class="video" v-bind:class="showSlide">
                    <span class="icon-close" v-on:click="closeVideo"></span>
                    <video src="imgs/product/Xiaomi%20MIX%204.mp4" muted autoplay controls="controls"></video>
                </div>
            </div>
            <div class="bg-2">
                <img src="./../../public/imgs/product/full_screen.jpeg" >
            </div>
        </div>
    </div>
</template>

<script>
    import ProductParam from "../components/ProductParam";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';

    export default {
        name: "product",
        comments:{
            ProductParam
        },
        components: {
            Swiper,
            SwiperSlide,
            ProductParam
        },
        data(){
            return{
                showSlide:'',       //控制视频展示动画效果
                product:{},         //商品信息
                swiperOption:{
                    autoplay:true,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    }
                }
            }
        },
        mounted(){
            this.getProductInfo();
        },
        methods:{
            getProductInfo(){
                let id = this.$route.params.id;
                this.axios.get(`/products/${id}`).then((res)=>{
                    this.product = res;
                })
            },
            closeVideo(){
                this.showSlide = 'slideUp';
                setTimeout(() =>{
                    this.showSlide = '';
                },600)
            },
            buy(){
                let id = this.$route.params.id;
                this.$router.push(`/detail/${id}`);
            }
        }
    }
</script>

<style lang="scss">
    @import "./../assets/scss/mixin";
    @import "./../assets/scss/config";
    .product{
        .bg{
            width: 100%;

            img{
                width: 100%;
            }
            .video-box{

                .overlay{
                    @include position(fixed);
                    background-color: $colorB;
                    opacity: 0;
                    z-index: 10;
                }
                //下拉效果
                @keyframes slideDown {
                    from{
                        top: -50%;
                        opacity: 0;
                    }
                    to{
                        top: 50%;
                        opacity: 1;
                    }
                }
                //上拉效果
                @keyframes slideUp {
                    from{
                        top: 50%;
                        opacity: 1;
                    }
                    to{
                        top: -50%;
                        opacity: 0;
                    }
                }
                .video{
                    position: fixed;
                    top: -50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    z-index: 10;
                    width: 80%;
                    height: 700px;
                    opacity: 1;

                    &.slideDown{
                        animation: slideDown .8s linear;
                        top: 50%;
                    }
                    &.slideUp{
                        animation: slideUp .8s linear;
                    }

                    .icon-close{
                        position:absolute;
                        top: 20px;
                        right: 20px;
                        @include bgImg(20px,20px,'/imgs/icon-close.png');
                        cursor: pointer;
                        z-index: 10;
                    }
                    video{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    }
                }
            }
            .item-swiper{

                margin: 36px auto 36px;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>