<template>
    <!-- 动画效果 -->
    <transition name="slid">
        <div class="modal" v-show="showModal">
            <!-- 弹框 -->
            <div class="mask"></div>
            <!-- 遮罩 -->
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{ title }}</span>
                    <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;"
                       class="btn"
                       v-if="btnType==1"
                       @click="$emit('submit')"
                    >
                        {{ sureText }}
                    </a>
                    <a href="javascript:;"
                       class="btn"
                       v-if="btnType==2"
                       @click="$emit('cancel')"
                    >
                        {{ cancelText }}
                    </a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;"
                           class="btn"
                           @click="$emit('submit')"
                        >
                            {{ sureText }}
                        </a>
                        <a href="javascript:;"
                           class="btn btn-default"
                           @click="$emit('cancel')"
                        >
                            {{ cancelText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        //弹框类型（大large 中middle 小small 表单from）
        modalType: {
            type: String,
            default: 'from'
        },
        //弹框标题
        title: String,
        //按钮类型  确实  取消  确定取消
        btnType: String,
        sureText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        showModal: Boolean
    }
}
</script>

<style lang="scss">
@import "./../assets/scss/base";
@import "./../assets/scss/mixin";
@import "./../assets/scss/config";
@import "./../assets/scss/modal";

</style>