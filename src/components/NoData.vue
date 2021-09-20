<template>
    <div class="no-data">
        <img src="/imgs/icon-no-data.png">
        <p>当前暂无提交记录</p>
    </div>
</template>

<script>
    export default {
        name: "NoData"
    }
</script>

<style lang="scss">
    @import "./../assets/scss/config";
    .no-data{
        text-align: center;
        font-size: 16px;
        color: $colorC;
        margin-bottom: 30px;

        img{
            width: 250px;
            height: 200px;
            margin: 0 auto;
        }

    }
</style>