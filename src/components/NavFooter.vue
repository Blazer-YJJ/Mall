<template>
    <div class="footer">
        <div class="foot-logo">
            <img v-lazy="'/imgs/logo-footer.png'" alt="">
            <p>杨继钧的小米商城</p>
        </div>
        <div class="foot-link">
            <a href="javascript:;">小米商城</a><span>|</span>
            <a href="javascript:;">MIUI</a><span>|</span>
            <a href="javascript:;">米家</a><span>|</span>
            <a href="javascript:;">米聊</a><span>|</span>
            <a href="javascript:;">游戏</a><span>|</span>
            <a href="javascript:;">小米天猫店</a><span>|</span>
            <a href="javascript:;">小米集团隐私政策</a>
        </div>
        <div class="copyright">
            <span href="javascript">© mi.com 京ICP证xxxxxx号</span>
            <span href="javascript">京ICP备100xxxxxx号</span>
            <a href="https://www.ilove996and007.com">https://www.ilove996and007.com</a>
            <span href="javascript">京ICP备100xxxxxx号</span>
            <span href="javascript">（京）网械平台备字（2018）第xxxxx号</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavFooter"
}
</script>

<style lang="scss">
@import "../assets/scss/config";
@import "../assets/scss/base";
@import "../assets/scss/reset";

.footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    font-size: 16px;
    color: $colorD;
    text-align: center;

    .foot-logo {
        margin-top: 46px;
        margin-bottom: 31px;

        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }

    .foot-link {
        margin-bottom: 13px;

        a {
            font-size: 16px;
            color: $colorD;
            display: inline-block;
        }

        span {
            margin: 0 10px;
        }
    }

    .copyright {
        span {
            margin: 0 5px;
        }

        a {
            color: $colorA;
        }
    }
}
</style>