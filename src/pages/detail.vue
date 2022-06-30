<template>
    <div class="detail">
        <product-param :title="product.name"></product-param>
        <div class="wrapper">
            <div class="container clearfix">
                <div class="swiper">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="content">
                    <h2 class="item-title">{{ product.name }}</h2>
                    <p class="item-info">
                        一亿像素 / 手持超级夜景 / 屏下摄像头新技术/ 骁龙888plus处理器 / 黑<br/>
                        N代屏下指纹 / 多个专业级摄像头 / 1080P屏幕
                    </p>
                    <div class="delivery">小米自营</div>
                    <div class="item-price">{{ product.price }}元<span class="del">5999元</span></div>
                    <div class="line"></div>
                    <div class="item-addr">
                        <i class="icon-loc"></i>
                        <div class="addr">广西 柳州市 城中区 xx路</div>
                        <div class="stock">有现货</div>
                    </div>
                    <div class="item-version clearfix">
                        <h2>选择版本</h2>
                        <div class="phone fl" :class="{'checked':version==1}" @click="version=1">8GB+256GB 全网通
                        </div>
                        <div class="phone fl" :class="{'checked':version==2}" @click="version=2">8GB+512GB 全网通
                        </div>
                        <div class="phone fl" :class="{'checked':version==3}" @click="version=3">12GB+256GB 全网通
                        </div>
                        <div class="phone fr" :class="{'checked':version==4}" @click="version=4">12GB+512GB 全网通
                        </div>
                    </div>
                    <div class="item-color clearfix">
                        <h2>选择颜色</h2>
                        <div class="phone checked disposition">
                            <span class="color_1"></span>
                            陶瓷黑
                        </div>
                    </div>
                    <div class="btn-group">
                        <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="container">
                <h2>价格说明</h2>
                <div class="desc">
                    <img src="/imgs/detail/item-price.jpeg" alt="">
                </div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import ProductParam from './../components/ProductParam'
import ServiceBar from './../components/ServiceBar';

export default {
    name: 'detail',
    data() {
        return {
            id: this.$route.params.id,       //获取商品ID
            err: '',
            version: 1,                      //商品版本切换
            product: {},                     //商品信息
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ProductParam,
        ServiceBar
    },
    mounted() {
        this.getProductInfo();
    },
    methods: {
        //获取商品信息
        getProductInfo() {
            this.axios.get(`/products/${this.id}`).then((res) => {
                this.product = res;
            })
        },
        addCart() {
            this.axios.post('/carts', {
                productId: this.id,
                selected: true
            }).then((res = {cartProductVoList: 0}) => {
                this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
                this.$router.push('/cart');
            });
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

.detail {
    .wrapper {
        .swiper {
            float: left;
            width: 642px;
            height: 617px;
            margin-top: 5px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .content {
            float: right;
            width: 584px;
            height: 870px;

            .item-title {
                font-size: 28px;
                padding-top: 30px;
                padding-bottom: 16px;
                height: 26px;
            }

            .item-info {
                font-size: 14px;
                height: 36px;
            }

            .delivery {
                font-size: 16px;
                color: $colorA;
                margin-top: 26px;
                margin-bottom: 14px;
                height: 15px;
            }

            .item-price {
                font-size: 20px;
                color: $colorA;
                height: 19px;

                .del {
                    font-size: 16px;
                    color: $colorD;
                    margin-left: 10px;
                    text-decoration: line-through;
                }
            }

            .line {
                height: 0;
                margin-top: 25px;
                margin-bottom: 28px;
                border-top: 1px solid $colorH;
            }

            .item-addr {
                height: 108px;
                background-color: #FAFAFA;
                border: 1px solid $colorH;
                box-sizing: border-box;
                padding-top: 31px;
                padding-left: 64px;
                font-size: 14px;
                line-height: 14px;
                position: relative;

                .icon-loc {
                    position: absolute;
                    top: 27px;
                    left: 34px;
                    @include bgImg(20px, 20px, '/imgs/detail/icon-loc.png');
                }

                .addr {
                    color: #666666;
                }

                .stock {
                    margin-top: 15px;
                    color: $colorA;
                }
            }

            .item-version, .item-color {
                .phone {
                    float: left;
                    margin: 2px 2px 2px 2px;
                    width: 287px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                    color: #333333;
                    border: 1px solid $colorH;
                    box-sizing: border-box;
                    text-align: center;
                    cursor: pointer;

                    span {
                        color: $colorC;
                        margin-left: 15px;
                    }

                    .color_1 {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        background-color: $colorC;
                    }

                    .color_2 {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        background-color: $colorC;
                    }

                    &.checked {
                        border: 1px solid $colorA;
                        color: $colorA;
                    }
                }

                .disposition {
                    margin-bottom: 40px;
                }
            }

            .item-total {
                height: 108px;
                background: #FAFAFA;
                padding: 24px 33px 29px 30px;
                font-size: 14px;
                margin-top: 50px;
                margin-bottom: 30px;
                box-sizing: border-box;

                .phone-total {
                    font-size: 24px;
                    color: $colorA;
                    margin-top: 18px;
                }
            }
        }
    }

    .price-info {
        h2 {
            font-size: 24px;
            color: #333333;
            padding-top: 38px;
            margin-bottom: 30px;
        }
    }
}
</style>