<template>
  <div class="tour-content">
    <div v-for="(val,i) of tour" :key="i" class="tour-list">
      <div class="tour-img">
        <img :src="`http://127.0.0.1:3000/huizu/index/${val.img}`" alt>
        <span>房源</span>
      </div>
      <p>
        <strong>{{val.city}}</strong>
        {{val.txt}}
      </p>
      <div class="tour-interact">
        <span class="praise">
          <svg viewBox="0 0 16 16" focusable="false" style="height:1em;width:1em;fill:#767676">
            <path
              d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11"
            ></path>
          </svg>
        </span>
        <span>{{val.praise}}</span>
        <span class="discuss">
          <svg
            viewBox="0 0 16 16"
            role="img"
            aria-label="评论数量"
            focusable="false"
            style="height:1em;width:1em;fill:#767676"
          >
            <path
              d="m4.5 7h4c .28 0 .5.23.5.5s-.22.5-.5.5h-4c-.28 0-.5-.23-.5-.5s.22-.5.5-.5m-.5-2.5c0-.28.22-.5.5-.5h7c .28 0 .5.23.5.5s-.23.5-.5.5h-7c-.28 0-.5-.23-.5-.5m8.5-3.5h-9c-1.38 0-2.5 1.12-2.5 2.5v12c0 .25.18.45.42.49.03.01.05.01.08.01.21 0 .41-.14.47-.34.56-1.69 2.74-3.66 7.03-3.66h3.5c1.38 0 2.5-1.12 2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5"
            ></path>
          </svg>
        </span>
        <span>{{val.discuss}}</span>
      </div>
    </div>
    <div class="city-more">
      <span>查看更多故事</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    tour() {
      return this.$store.getters.tour;
    }
  }
};
</script>
<style lang="scss" scoped>
div.tour-content {
  width: 96%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  div.tour-list {
    width: 48%;
    div.tour-img {
      width: 100%;
      height: 43.3vw;
      border-radius: 3px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 43.4vw;
      }
      span {
        position: absolute;
        display: block;
        width: 40px;
        height: 26px;
        background: #ffffff;
        bottom: 2%;
        right: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #484848;
        font-weight: bold;
        border-radius: 5px;
      }
    }
    p {
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      font-size: 14px;
      font-weight: 400;
      -webkit-column-break-before: #008489;
      strong {
        color: #484848;
      }
    }
    div.tour-interact {
      svg {
        width: 14px !important;
        height: 14px !important;
      }
      span {
        font-size: 12px;
        margin: 0 3px;
      }
    }
  }
}
</style>
