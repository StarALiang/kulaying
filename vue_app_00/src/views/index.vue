<template>
  <div class="container">
    <section v-show="!revealOn">
      <banner :rightShow="rightShow"></banner>
      <div class="title" style="margin-top:37px">
        <h2>夏季特惠房源</h2>
        <p>低至 7 折，可叠加使用礼券</p>
      </div>
      <city></city>
      <div class="title">
        <h2>夏日出行精选</h2>
      </div>
      <go-out></go-out>
      <div class="title">
        <h2>国内热门目的地</h2>
      </div>
      <source-item></source-item>
      <div class="title">
        <h2>全方位安全保障</h2>
        <div class="title-content">
          <div>
            <img
              src="http://127.0.0.1:3000/huizu/index/4c34c842-1694-4f4d-856f-c54f5cf7e650.jpg"
              alt
            >
            <span class="title-txt">
              <span>房源保障</span>
              <span>人工审核房源</span>
            </span>
          </div>
          <div>
            <img
              src="http://127.0.0.1:3000/huizu/index/87dd770b-b6d9-4599-a74f-02898b949367.jpg"
              alt
            >
            <span class="title-txt">
              <span>实名认证</span>
              <span>真实身份保障</span>
            </span>
          </div>
          <div>
            <img
              src="http://127.0.0.1:3000/huizu/index/7e28c0be-79fd-4849-a90a-759b6ffb1f2b.jpg"
              alt
            >
            <span class="title-txt">
              <span>中文客服</span>
              <span>400-841-8888</span>
            </span>
          </div>
        </div>
        <h2>全球热门房源精选</h2>
        <p>精选舒适房源供你挑选</p>
      </div>
      <world></world>
      <div class="title">
        <h2>精选旅行故事</h2>
      </div>
      <tour></tour>
      <div class="title">
        <h2>高分体验</h2>
        <p>在下趟旅程中，不妨预订由本地达人组织的体验活动</p>
      </div>
      <experience></experience>
      <footer-content></footer-content>
      <div v-show="!rightOn">
        <mt-popup class="popup-top" v-model="top" position="top">
          <div @click="searchShow">
            <span>
              <svg
                viewBox="0 0 16 16"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style="height:16px;width:16px;display:block;fill:#484848"
              >
                <path
                  d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"
                ></path>
              </svg>
            </span>
            <span>搜「北京」试试</span>
          </div>
        </mt-popup>
      </div>
      <mt-popup v-model="right" class="popup-right" position="right">
        <div class="popup-bg" @click="rightShow"></div>
        <div class="popup-content">
          <div class="popup-login">
            <span>登录/注册</span>
            <img
              src="http://127.0.0.1:3000/huizu/index/43281686-0c5c-4e81-8de2-3fa20c2349df.jpg"
              alt
            >
          </div>
          <div>
            <img
              src="http://127.0.0.1:3000/huizu/index/c8008cbd-3c25-4d68-b124-7711f2341ff0.jpg"
              alt
            >下载爱彼迎APP
          </div>
          <div>
            <img
              src="http://127.0.0.1:3000/huizu/index/ca1d518e-4d50-4fd5-9205-48ab3a5f26a8.jpg"
              alt
            >语言与货币
          </div>
          <div>
            <img
              src="http://127.0.0.1:3000/huizu/index/f521016a-3cb8-416c-ae8d-41189a386501.jpg"
              alt
            >帮助
          </div>
        </div>
      </mt-popup>
    </section>

    <search :revealOn="revealOn" v-show="revealOn" :searchShow="searchShow"></search>
  </div>
</template>
<script>
import banner from "./index/banner";
import city from "./index/city";
import goOut from "./index/goOut";
import sourceItem from "./index/sourceItem";
import world from "./index/world";
import tour from "./index/tour";
import experience from "./index/experience";
import footerContent from "./index/footerContent";
import search from "./index/search";
export default {
  data() {
    return {
      top: false,
      right: false,
      revealOn: false,
      rightOn: false
    };
  },
  components: {
    banner,
    city,
    goOut,
    sourceItem,
    world,
    tour,
    experience,
    footerContent,
    search
  },
  methods: {
    showIcon() {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 200
      ) {
        this.top = true;
        // console.log(this.top)
      } else {
        this.top = false;
        // console.log(this.top)
      }
    },
    searchShow() {
      this.revealOn = !this.revealOn;
    },
    rightShow() {
      this.right = !this.right;
      this.rightOn = !this.rightOn;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showIcon);
  }
};
</script>
style.<style lang="scss">
.container {
  background: #fff;
  div.title {
    position: relative;
    color: #484848;
    padding: 40px 0px 20px 5px;
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
    div.title-content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0 2.5rem 0;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 21px;
          height: 23px;
          margin-right: 10px;
        }
        span {
          display: block;
          span:first-child {
            font-size: 12px;
            font-weight: bold;
          }
          span:last-child {
            font-size: 8px;
            width: 88%;
          }
        }
      }
    }
  }
  .popup-top {
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      height: 48px;
      width: 327px;
      display: flex;
      justify-content: left;
      align-items: center;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01),
        0px 3px 18px rgba(0, 0, 0, 0.12);
      span {
        color: #bcbcbc;
        font-size: 18px;
        padding-left: 20px;
      }
    }
  }
  div.v-modal {
    display: none !important;
  }
  div.popup-right {
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0);
    display: flex;
    div.popup-bg{
      width: 28%;
      height: 100%;
      background: rgba(0,0,0,0.4);
    }
    div.popup-content{
      background: #fff;
      width: 72%;
      height: 100%;
      div.popup-login{
        width:100%;
        height:30vw;
        display:flex;
        justify-content: space-around;
        align-items: center;
        padding: 20% 5%;
        span{
          color:#008489;
          font-size: 12px;
          font-weight: 100;
        }
        img{
          width: 48px;
          height: 48px;
        }
      }
      div{
        width: 100%;
        height: 13vw;
        padding-left: 20px;
        font:14px "微软雅黑";
        color: #484848;
        font-weight: inherit;
        display: flex;
        align-items: center;
        img{
          width: 20px;
          height: 20px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>


