<template>
    <div class="nav-bar" v-bind:class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                <!-- xiaomi&nbsp;&nbsp;MIX4-->
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数配置</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductParam",
    props:{
        title:String
    },
    data(){
        return{
            isFixed: false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight)
    },
    methods:{
        //吸顶判断
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    },
    destroyed(){
        window.addEventListener('scroll',this.initHeight,false)
    }
}
</script>

<style lang="scss">
    @import "./../assets/scss/config";
    @import "./../assets/scss/mixin";
    .nav-bar{
        width: 100%;
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG;
        z-index: 15;

        &.is_fixed{
            position: fixed;
            top: 0;
            box-shadow:0 5px 5px $colorE;
        }
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color: $colorB;
                font-weight: bolder;
            }
            .pro-param{
                font-size: $fontJ;

                a{
                    margin: 0 10px;
                    color: $colorC;

                    &:last-child{
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>