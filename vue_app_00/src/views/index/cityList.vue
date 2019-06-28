<template>
  <div class="city-content">
    <router-link :to="`/product/${city}`">
      <div class="city-img">
        <img :src="`http://127.0.0.1:3000/huizu/index/${img}`" alt>
      </div>
      <div class="city-title">{{title}}</div>
      <div class="city-subtitle">{{subtitle}}</div>
      <div class="city-price">
        <span>{{price}}</span>
        <span>
          <s>{{subprice}}</s>
        </span>
        <span>每晚</span>
      </div>
      <div class="city-exp">
        <span class="exp-bg"></span>
        <span class="exp-num">{{expNum}}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    img: { default: "" },
    title: { default: "" },
    subtitle: { default: "" },
    price: { default: "" },
    subprice: { default: "" },
    expNum: { default: "" },
    city: { default: "" }
  }
};
</script>
<style>
.city-content {
  width: 48%;
  margin-top: 10px;
  background: #fff;
  box-shadow: 3px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.city-img img {
  width: 100%;
}
.city-title {
  color: #441a05;
  font-size: 10px;
}
.city-subtitle {
  width: 98%;
  height: 37px;
  overflow: hidden;
  font-weight: bold;
  color: #484848;
  font: 14px "Circular", "PingFang-SC";
  max-height: 38px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.exp-num {
  color: #484848;
  font-size: 12px;
  height: 24px;
}
.city-exp {
  display: flex;
  align-items: center;
}
.city-price span {
  font-size: 12px;
}
.exp-bg {
  display: inline-block;
  width: 76px;
  height: 20px;
  background: url("http://127.0.0.1:3000/huizu/index/xingxing.png") no-repeat;
  background-size: 200% 74%;
  margin-right: 6px;
}
</style>
