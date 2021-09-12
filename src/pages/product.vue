<template>
    <div class="product">
        <product-param>
            <template v-slot:bye>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="h">
            <div>aa</div>
            <div>bb</div>
            <div>cc</div>
            <div>dd</div>
        </div>
    </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
export default {
    name: "product",
    components: {ProductParam},
    comments:{
        ProductParam
    }
}
</script>

<style lang="scss">
    .product{
        .h{
            width: 100%;
            div{
                width: 100%;
                height: 200px;
            }
        }
    }
</style>