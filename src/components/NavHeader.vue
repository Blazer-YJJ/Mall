<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="">小米商城</a>
          <a href="">MIUI</a>
          <a href="">云服务</a>
          <a href="">天星科技</a>
          <a href="">有品</a>
          <a href="">小爱开放平台</a>
          <a href="">企业团购</a>
          <a href="">资质证照</a>
          <a href="">协议规则</a>
          <a href="">下载app</a>
          <a href="">智能生活</a>
          <a href="">Select &nbsp; Location</a>
        </div>
        <div class="topbar-user">
          <a href="" v-if="username" v-on:click="login">登录</a>
          <a href="" v-if="!username">{{ username }}</a>
          <a href="" v-if="username">我的订单</a>
          <a href="">消息通知</a>
          <a href="" class="my-cart" v-on:click="goToCart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index/"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>平板</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="children" style="display: block">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-bind:src="item.mainImage" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.prime | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <a class="clj" href="javascript:;">服务</a>
          </div>
          <div class="item-menu">
            <a class="clj" href="javascript:;">社区</a>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      username: "jack",
      phoneList: [],
    };
  },
  //过滤器
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
          },
        })
        .then((res) => {
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.nav-topbar {
  height: 39px;
  line-height: 39px;
  background-color: $colorB;
  color: #b0b0b0;

  .container {
    @include flex();
    a {
      display: inline-block;
      color: #b0b0b0;
      margin-right: 17px;
    }
    .my-cart {
      margin-right: 0px;
      width: 110px;
      background-color: $colorA;
      text-align: center;
      color: $colorG;
      .icon-cart {
        @include bgImg(16px, 12px, "./../../public/imgs/icon-cart-checked.png");
        margin-right: 4px;
      }
    }
  }
}
.nav-header {
  position: relative;
  .container {
    height: 112px;
    @include flex();
    .header-logo {
      //@include bgImg(55px,55px);
      display: inline-block;
      width: 55px;
      height: 55px;
      background: $colorA;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          content: " ";
          @include bgImg(55px, 55px, "./../../public/imgs/mi-logo.png", 55px);
          transition: margin 0.5s;
        }
        &:after {
          content: " ";
          @include bgImg(55px, 55px, "./../../public/imgs/mi-home.png", 55px);
        }
        &:hover:before {
          margin-left: -60px;
          transition: margin 0.5s;
        }
      }
    }
    .header-menu {
      display: inline-block;
      .item-menu {
        display: inline-block;
        color: $colorB;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-right: 20px;
        .clj {
          color: $colorB;
        }
        span {
          cursor: pointer;
        }
        &:hover {
          color: $colorA;
          .children {
            height: 220px;
            opacity: 1;
          }
        }
        .children {
          height: 220px;
          position: absolute;
          top: 112px;
          left: 0;
          width: 100%;
          z-index: 10;
          opacity: 0;
          height: 0;
          overflow: hidden;
          transition: height 0.5s;
          //background: $colorG;
          border-top: 1px solid $colorH;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          .product {
            position: relative;
            float: left;
            width: 16.6%;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            img {
              height: 111px;
              width: auto;
              margin-top: 20px;
            }
            a {
              display: inline-block;
            }
            .pro-img {
              height: 137px;
            }
            .pro-name {
              font-weight: bolder;
              margin-top: 19px;
              margin-bottom: 8px;
              color: $colorB;
            }
            .pro-price {
              color: $colorA;
            }
            &:before {
              content: " ";
              position: absolute;
              top: 28px;
              right: 0;
              border-left: 1px solid $colorF;
              height: 100px;
              width: 1px;
            }
            &:last-child:before {
              display: none;
            }
          }
        }
      }
    }
    .header-search {
      width: 319px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          //display: none;
          box-sizing: border-box;
          width: 264px;
          height: 50px;
          border: none;
          padding-left: 14px;
          border-right: 1px solid #d3d3d3;
        }
        a {
          @include bgImg(50px, 18px, "./../../public/imgs/icon-search.png");
        }
      }
    }
  }
}
</style>
