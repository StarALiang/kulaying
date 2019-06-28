<template>
  <div class="city-container">
    <mt-tabbar v-model="selected" v-swipeleft="swipeLeft" v-swiperight="swipeRight">
      <mt-tab-item v-for="(item,index) of city" :key="index" :id="item.id">{{item.city}}</mt-tab-item>
    </mt-tabbar>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item v-for="(item,index) of city" :key="index" :id="item.id">
        <cityList
          v-for="(val,i) of item.content.slice(0,4)"
          :key="i"
          :img="val.img"
          :title="val.title"
          :subtitle="val.subtitle"
          :price="val.price"
          :subprice="val.subprice"
          :expNum="val.expNum"
          :city="item.city"
        ></cityList>

        <div class="city-more">
          <router-link :to="`/product/${item.city}`">
            <span>显示更多{{item.city}}的房源</span>
          </router-link>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import cityList from "./cityList";
export default {
  data() {
    return {
      selected: "hangzhou",
      marginLeft: 0
    };
  },
  methods: {
    swipeLeft() {
      if (this.marginLeft >= -200) this.marginLeft -= 200;
      this.$el.firstElementChild.style.marginLeft = this.marginLeft + "px";
    },
    swipeRight() {
      this.marginLeft <= -200
        ? (this.marginLeft += 200)
        : (this.marginLeft = 20);
      this.$el.firstElementChild.style.marginLeft = this.marginLeft + "px";
    }
  },
  computed: {
    city() {
      return this.$store.getters.city;
    }
  },
  components: {
    cityList
  }
};
</script>
<style>
.city-more {
  width: 90%;
  height: 43px;
  margin-top: 20px;
  border: 1px solid #008489;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.city-more span {
  font-size: 14px;
  font-weight: 900;
  color: #00848f;
}
.city-container .mint-tabbar .is-selected .mint-tab-item-label {
  color: #fff !important;
}
.mint-tabbar .is-selected {
  background-color: #008489 !important;
  border-radius: 3px !important;
  box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15);
  border: 1px solid #008489;
}
.mint-tab-container-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 15px;
}
.mint-tab-container {
  height: 100%;
}
.city-container .mint-tabbar .mint-tab-item-label {
  font-size: 14px !important;
  font-family: Circular, "PingFang-SC";
  font-weight: bolder !important;
  color: #484848 !important;
}
.city-container {
  width: 100%;
  height: 162vw;
  position: relative;
  overflow: hidden;
}
.city-container .mint-tabbar {
  position: absolute;
  height: 48px;
  z-index: 100;
  top: 0;
  width: 200%;
  margin-left: 10px;
  background: rgba(0, 0, 0, 0);
  transition: all 0.5s;
}
.city-container .mint-tabbar a {
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
}
.city-container .mint-tabbar a + a {
  margin-left: 10px;
}
.city-container .mint-tab-container {
  position: absolute;
  top: 48px;
}
</style>

