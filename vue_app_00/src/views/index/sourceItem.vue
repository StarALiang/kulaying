<template>
  <div class="container">
    <mt-tabbar v-model="source">
      <div class="swiper-container source">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) of city" :key="index">
            <mt-tab-item :id="item.id">
              <h5>{{item.city}}</h5>
              <p>{{item.housingSource}}</p>
            </mt-tab-item>
          </div>
        </div>
      </div>
    </mt-tabbar>
    <mt-tab-container class="page-tabbar-container" v-model="source">
      <mt-tab-container-item v-for="(item,index) of city" :key="index" :id="item.id">
        <div class="swiper-container source-content">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) of item.content" :key="index">
              <div class="city-img">
                <img :src="`http://127.0.0.1:3000/huizu/index/${item.img}`" alt>
              </div>
              <div class="city-title">{{item.title}}</div>
              <div class="city-subtitle">{{item.subtitle}}</div>
              <div class="city-price">
                <span>{{item.price}}</span>
                <span>· 每晚</span>
              </div>
              <div class="city-exp">
                <span class="exp-bg"></span>
                <span class="exp-num">{{item.expNum}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="city-more">
          <span>查看更多{{item.city}}的房源</span>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  data() {
    return {
      source: "hangzhou"
    };
  },
  mounted() {
    new Swiper(".container .source", {
      slidesPerView: 3.8,
      spaceBetween: 30,
      freeMode: true
    });
    new Swiper(".source-content", {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
      observer: true,
      observeParents: true,
      bindanimationfinish:200,
    });
  },
  computed: {
    city() {
      return this.$store.getters.city;
    }
  }
};
</script>
<style>
.mint-tabbar {
  position: relative !important;
}
.mint-tabbar .mint-tab-item .mint-tab-item-label h5 {
  color: #484848;
}
.mint-tabbar .is-selected .mint-tab-item-label h5,
.mint-tabbar .is-selected .mint-tab-item-label p {
  color: #fff !important;
  width: 100%;
}
.source .mint-tab-item {
  width: 100px;
}
</style>