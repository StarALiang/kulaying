<template>
  <div class="swiper-container go">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="http://127.0.0.1:3000/huizu/index/d8b0ae2c-b2bb-46de-9b07-30028e14fb40.jpg" alt>
        <h5>日本夏日祭</h5>
        <p>推开窗，慢赏夏夜的绚烂花火</p>
        <span>穿浴衣，逛屋台，在河边吹晚风。在日本夏日祭的热闹中，等待花火绽放的夜空。</span>
      </div>
      <div class="swiper-slide">
        <img src="http://127.0.0.1:3000/huizu/index/1d2e6aae-5377-4f9c-8f67-0618e6ab4777.jpg" alt>
        <h5>东非自然之旅</h5>
        <p>去探险，见证东非动物大迁徙</p>
        <span>感受生命的自由壮阔，住进东非特色房源，全方位投入自然之中。</span>
      </div>
      <div class="swiper-slide">
        <img src="http://127.0.0.1:3000/huizu/index/76c6cb6b-80aa-4b07-a5b7-5962955232a8.jpg" alt>
        <h5>奇妙房源合集</h5>
        <p>住进童趣的家，让美梦成真</p>
        <span>船屋，帐篷，蘑菇屋和小木屋……住进童话里的房子，做个天马行空的梦。</span>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".go", {
      slidesPerView: 1.2,
      spaceBetween: 30,
      freeMode: true
    });
  }
};
</script>
<style>
.go {
  width: 100%;
  height: 304px;
}
.go .swiper-slide img {
  width: 100%;
}
.go .swiper-slide span {
  letter-spacing: 0.2px;
  font-size: 14px;
  line-height: 18px;
  color: #484848;
}
.go .swiper-slide p {
  font-size: 14px;
  color: #484848;
  font-weight: bolder;
  margin-bottom: 3px;
}
</style>
