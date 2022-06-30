<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：下单后请在三十分钟进行付款，超时会取消订单</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="ShoppingCart">
        <div class="container">
          <div class="cart-box">
            <ul class="cart-item-head">
              <li class="col-1">
                                <span class="checkbox"
                                      :class="{'checked':allChecked}"
                                      @click="toggleAll">
                                </span>
                全选
              </li>
              <li class="col-3">商品名称</li>
              <li class="col-1">单价</li>
              <li class="col-2">数量</li>
              <li class="col-1">小计</li>
              <li class="col-1">操作</li>
            </ul>
            <ul class="cart-item-list">
              <li class="cart-item" v-for="(item,index) in list" :key="index">
                <div class="item-check">
                                    <span class="checkbox"
                                          :class="{'checked':item.productSelected}"
                                          @click="updateCart(item)">
                                    </span>
                </div>
                <div class="item-name">
                  <img v-lazy="item.productMainImage" alt="">
                  <span>{{ item.productName + ' , ' + item.productSubtitle }}</span>
                </div>
                <div class="item-price">{{ item.productPrice }}</div>
                <div class="item-num">
                  <div class="num-box">
                    <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                    <span>{{ item.quantity }}</span>
                    <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                  </div>
                </div>
                <div class="item-total">{{ item.productTotalPrice }}</div>
                <div class="item-del" @click="delProduct(item)"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
            共<span>{{ list.length }}</span>件商品，已选择<span>{{ checkedNum }}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{ cartTotalPrice }}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader';
import ServiceBar from './../components/ServiceBar';
import NavFooter from './../components/NavFooter';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'index',
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter
  },
  data() {
    return {
      list: [],                           // 商品列表
      allChecked: false,                  // 是否将商品全选
      cartTotalPrice: 0,                  // 所选商品总金额
      checkedNum: 0                       // 所选商品数量
    }
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    //购物车列表
    getCartList() {
      this.axios.get('/carts').then((res) => {
        this.renderData(res);
      })
    },

    //购物车全选功能控制
    toggleAll() {
      let url = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll';
      this.axios.put(url).then((res) => {
        //重新渲染购物车
        this.renderData(res);
      })
    },

    //购物车商品内容更新（商品增加/减少、商品单选）
    updateCart(item, type) {
      let quantity = item.quantity;                   //商品
      let selected = item.productSelected;            //库存

      if (type == '-') {
        if (quantity == 1) {
          this.$message.error('商品至少保留一件');
          return;
        }
        --quantity;
      } else if (type == '+') {
        if (quantity > item.productStock) {
          this.$message.warning('心仪的商品库存不足');
          return;
        }
        ++quantity;
      } else {
        selected = !item.productSelected;
      }
      this.axios.put(`/carts/${item.productId}`, {
        quantity,
        selected
      }).then((res) => {
        this.renderData(res);
      })
    },

    //购物车商品删除
    delProduct(item) {
      this.axios.delete(`/carts/${item.productId}`).then((res) => {
        this.renderData(res);
        this.$message.success('商品删除成功！');
      })
    },

    //购物车商品下单
    order() {
      let isCheck = this.list.every(item => !item.productSelected);               //判断商品勾选是否为空 !item.productSelected:不是全选
      if (isCheck) {
        this.$message.warning('请选择至少一件商品再下单！');
      } else {
        this.$router.push('/order/confirm');
      }
    },

    //公共购物车商品信息
    renderData(res) {
      this.list = res.cartProductVoList || [];                                    //购物车商品列表
      this.allChecked = res.selectedAll;                                          //购物车全选
      this.cartTotalPrice = res.cartTotalPrice;                                   //购物车总金额
      this.checkedNum = this.list.filter(item => item.productSelected).length;    //购物车总数量
    }
  }
}
</script>
<style lang="scss">
.cart {
  .wrapper {
    margin: 0 auto;
    background-color: #F5F5F5;
    padding-top: 30px;
    padding-bottom: 114px;

    .ShoppingCart {
      width: 1226px;
      margin: 0 auto;

      .cart-box {
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        color: #999999;
        text-align: center;

        .checkbox {
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor: pointer;

          &.checked {
            background: url('./../../public/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size: 16px 12px;
            border: none;
          }
        }

        .cart-item-head {
          display: flex;
          height: 79px;
          line-height: 79px;

          .col-1 {
            flex: 1;
          }

          .col-2 {
            flex: 2;
          }

          .col-3 {
            flex: 3;
          }
        }

        .cart-item-list {
          .cart-item {
            display: flex;
            align-items: center;
            height: 125px;
            border-top: 1px solid #E5E5E5;
            font-size: 16px;

            .item-check {
              flex: 1;
            }

            .item-name {
              flex: 3;
              font-size: 18px;
              color: #333333;
              display: flex;
              align-items: center;

              img {
                width: 80px;
                height: 80px;
                vertical-align: middle;
              }

              span {
                margin-left: 30px;
              }
            }

            .item-price {
              flex: 1;
              color: #333333;
            }

            .item-num {
              flex: 2;

              .num-box {
                display: inline-block;
                width: 150px;
                height: 40px;
                line-height: 40px;
                border: 1px solid #E5E5E5;
                font-size: 14px;

                a {
                  display: inline-block;
                  width: 50px;
                  color: #333333;
                }

                span {
                  display: inline-block;
                  width: 50px;
                  color: #333333;
                }
              }
            }

            .item-total {
              flex: 1;
              color: #FF6600;
            }

            .item-del {
              flex: 1;
              width: 14px;
              height: 12px;
              background: url('/imgs/icon-close.png') no-repeat center;
              background-size: contain;
              cursor: pointer;
            }
          }
        }
      }

      .order-wrap {
        font-size: 14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;

        .cart-tip {
          margin-left: 29px;

          a {
            color: #666666;
            margin-right: 37px;
          }

          span {
            color: #FF6600;
            margin: 0 5px;
          }
        }

        .total {
          font-size: 14px;
          color: #FF6600;

          span {
            font-size: 24px;
          }

          a {
            width: 202px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            margin-left: 37px;
          }
        }
      }
    }
  }
}
</style>
