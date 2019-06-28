<template>
  <div class="search-content">
    <div class="search-input">
      <div>
        <svg
          viewBox="0 0 16 16"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style="height: 16px; width: 16px; display: block; fill: rgb(72, 72, 72);"
        >
          <path
            d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"
          ></path>
        </svg>
        <input type="text" placeholder="搜「北京」试试">
      </div>
      <button @click="searchShow">取消</button>
    </div>
    <div class="search-add">
      <button @click="btnPrevShow" class="active">国内热门目的地</button>
      <button @click="btnNextShow">海外及港澳台热门目的地</button>
    </div>
    <div class="search-btn">
      <div v-show="selected">
        <div>
          <button>北京</button>
          <button>上海</button>
          <button>成都</button>
          <button>厦门</button>
        </div>
        <div>
          <button>重庆</button>
          <button>杭州</button>
          <button>广州</button>
          <button>西安</button>
        </div>
      </div>
      <div v-show="!selected">
        <div>
          <button>大阪</button>
          <button>东京</button>
          <button>台北</button>
          <button>首尔</button>
        </div>
        <div>
          <button>香港</button>
          <button>京都</button>
          <button>曼谷</button>
          <button>清迈</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: true
    };
  },
  methods: {
    btnPrevShow(e) {
      e.target.nextElementSibling.className = "";
      e.target.className = "active"
      this.selected = true;
    },
    btnNextShow(e) {
      e.target.previousElementSibling.className = "";
      e.target.className = "active"
      this.selected = false;
    }
  },
  props: ["revealOn", "searchShow"]
};
</script>
<style lang="scss">
div.search-content {
  position: fixed;
  top: 0px;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 10000;
  div.search-input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 15px;
    position: relative;
    div {
      svg {
        position: absolute;
        top: 41%;
        left: 10%;
      }
      input {
        margin: 0;
        padding-left: 2.2rem;
        box-shadow: rgba(0, 0, 0, 0.01) 0px 1px 2px,
          rgba(0, 0, 0, 0.12) 0px 3px 18px;
      }
    }
    button {
      width: 72px;
      height: 40px;
      border: 0;
    }
  }
  div.search-add {
    padding-top: 5rem;
    button {
      height: 3.5rem;
      border: 0;
      border: 0;
      color: #484848;
    }
    button.active {
      color: rgb(0, 132, 137);
      border-bottom: 2px solid rgb(0, 132, 137);
    }
  }
  div.search-btn {
    padding-top: 0.5rem;
    div {
      padding-top: 0.5rem;
      padding-left: 0.5rem;
      button {
        width: 4.3rem;
        height: 4.3rem;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
