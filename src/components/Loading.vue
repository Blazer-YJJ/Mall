<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style lang="scss">
.loading {
  height: 100px;
  width: 100px;
  text-align: center;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
