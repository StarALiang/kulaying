<template>
  <div class="banner">
    <swiper class="swiper" id="pa" :options="swiperOption"  ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of banner" :key="index">
        <img :src="`http://127.0.0.1:3000/huizu/index/${item.img}`" alt="">
        <div class="swiper-txt">
          <div>{{item.txt1}}</div>
          <div>{{item.txt2}}</div>
          <button class="swiper-btn">查看集合</button>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-scrollbar" slot="pagination"><span>1</span></div>
    </swiper>
    <div class="title-img">
        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:32px;width:32px;display:block;fill:#FFFFFF"><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
        <img @click="rightShow" src="http://127.0.0.1:3000/huizu/index/a9eb74b8-51a7-4059-a52a-f2a39d3b86fd.jpg" alt="">
    </div>
    <span class="banner-search"><svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height:16px;width:16px;display:block;fill:#484848"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>搜「北京」试试</span>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // spaceBetween: 30, //板块间距
          loop: true, //无缝轮播
          centeredSlides: true,
          autoplay: {  //自动轮播
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-scrollbar',
            clickable: true,
            paginationClickable: true,
            paginationType: 'custom',
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      banner(){
        return this.$store.getters.banner;
      }
    },
    mounted() {
      //鼠标覆盖停止自动切换
      this.swiper.el.onmouseover = function () {
        this.swiper.autoplay.stop();
      };
      //鼠标离开开始自动切换
      this.swiper.el.onmouseout = function () {
        this.swiper.autoplay.start();
      };
    },
    props:["rightShow"]
  }
</script>
<style scoped>
  .banner{
    position: relative;
  }
  .banner .banner-search{
    display: block;
    width: 90%;
    height: 14vw;
    position: absolute;
    z-index: 1000;
    color: #484848;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    background: #fff;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    bottom: -33px;
  }
  .banner .title-img{
    position: absolute;
    width: 80%;
    z-index: 1000;
    top: 20px;
    height: 32px;
    margin: 0 34px;
    display: flex;
    justify-content: space-between;
  }
  .banner .title-img img{
    height: 100%;
  }
  .swiper-pagination-bullet-active{
    height: 5px;
  }
  .swiper-txt{
    position: absolute;
    top: 30%;
    left: 10%;
    z-index: 10;
    color: #fff;
    font-size: 20px;
    font-weight: 1000;
  }
  .swiper-txt div{
    padding-bottom: 20px;
  }
  .swiper-txt button{
    width: 115px;
    height: 42px;
    background-color: rgba(0,0,0,0);
    color: #fff;
  }
  .swiper-slide img{
    width:100%;
    height: 100%;
  }
  .swiper {
    width: 100%;
    height: 73vw;
  }

  swiper-slide {
    width: 100%;
    height: 100%;
  }

  #pa /deep/ .swiper-pagination-bullet {
    width: 31%;
    height: 1px;
    /* line-height: -5px; */
    /* font-size: 12px; */
    color:#000;
    opacity:0.6;
    background:rgba(255, 255, 255, 0.3);
    border-radius: 0;
  }
   #pa /deep/ .swiper-pagination-bullet::after{
     content: "";
     display: block;
     height: 2px;
   }
    .swiper-container-horizontal > .swiper-scrollbar{
     bottom: 37px;
     opacity: 0.5;
   }
  #pa /deep/ .swiper-pagination-bullet-active::after {
    background: #ffffff;
    animation: width  4.1s;
  }
  @keyframes width {
    0% {width: 0%}
    100% {width: 100%}
  }
  .swiper-scrollbar{
    background: rgba(0,0,0,0);
  }
</style>