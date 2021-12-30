<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index/"></a>
            </div>
            <div class="title">
                <h2>{{ title }}<slot name="tip"></slot></h2>
            </div>
            <div class="username"><a href="javascript:;">{{ username }}</a></div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "OrderHeader",
    props: {
        title: String
    },
    computed: {
        ...mapState(['username'])
    }
}
</script>

<style lang="scss">
@import "./../assets/scss/config";

.order-header {
    padding: 30px 0;

    .title, .username {
        display: inline-block;
        height: 55px;
        line-height: 55px;
    }

    .title {

        h2 {
            font-size: $fontF;
            color: $colorB;
        }

        span {
            font-size: $fontJ;
            color: $colorD;
            margin-left: 17px;
            //font-weight: bold;
        }
    }

    .username {
        float: right;

        a {
            font-size: $fontI;
            color: $colorC;

            &:hover {
                color: $colorA;
            }
        }
    }
}
</style>