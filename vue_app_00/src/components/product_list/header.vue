<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="top_search">
        <!-- 搜索框 -->
        <div class="search_frame">
          <div class="frame_one">
            <router-link to="/index">
              <div class="back_icon">
                <svg>
                  <path
                    d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"
                  ></path>
                </svg>
              </div>
            </router-link>
            <span class="search_text">{{city}} · 房源</span>
          </div>
          <div class="frame_two"></div>
        </div>
        <!-- 用户状态 -->
        <div class="user_status">
          <div class="user_logo">
            <div class="logo_center">
              <img src="require(../../public/img/43281686-0c5c-4e81-8de2-3fa20c2349df.jpg)" alt>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="top_nav" :style="`height:${height}px;transition: height 0.5s;`">
        <div class="nav_filtrate">
          <ul>
            <li>
              <span class="data_filtrate">
                日期
                <span>▼</span>
              </span>
            </li>
            <li>
              <span class="data_filtrate">
                人数
                <span>▼</span>
              </span>
            </li>
            <li>
              <span class="data_filtrate">
                位置区域
                <span>▼</span>
              </span>
            </li>
            <li>
              <span class="data_filtrate">
                筛选
                <span>▼</span>
              </span>
            </li>
          </ul>
        </div>
        <div class="quick_filtrate">
          <ul>
            <li>
              <span>整个房源</span>
            </li>
            <li>
              <span>可以做饭</span>
            </li>
            <li>
              <span>超赞房东</span>
            </li>
            <li>
              <span>闪订</span>
            </li>
            <li>
              <span>家庭出游</span>
            </li>
            <li>
              <span>爱彼迎Plus</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 88
    };
  },
  methods: {
    showHeight() {
      window.pageYOffset == 0 ? (this.height = 88) : (this.height = 0);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showHeight);
  },
  props: ["city"]
};
</script>

<style scoped lang="scss">
body {
  background-color: #fff;
  color: #484848;
  font-family: Circular, "PingFang-SC";
  font-size: 14px;
  line-height: 1.43;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(196, 196, 196, 0.2);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
body,
div,
p,
form,
input,
button,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
span {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  text-decoration: none;
  color: #ff4040;
}
img {
  border: 0 none;
  vertical-align: top;
}
button {
  outline: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 16;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.1);
  // 页头搜索
  .top_search {
    position: relative;
    background: #fff;
    padding: 16px 80px 12px 24px;
    // 搜索款
    .search_frame {
      .frame_one {
        position: relative;
        width: 100%;
        height: 48px;
        background: #fff;
        padding: 0 24px 0 48px;
        line-height: 48px;
        font-weight: bold;
        font-size: 14px;
        color: #484848;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01),
          0px 3px 18px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        .back_icon {
          position: absolute;
          left: 16px;
          top: 16px;
          display: inline-block;
          width: 16px;
          height: 16px;
          svg {
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            width: 16px;
            height: 16px;
          }
        }
      }
    }
    // 用户状态
    .user_status {
      .user_logo {
        position: absolute;
        right: 0;
        top: 0;
        width: 80px;
        height: 80px;
        .logo_center {
          width: 32px;
          height: 32px;
          margin: 24px auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  // 导航
  .top_nav {
    overflow: hidden;
    .nav_filtrate {
      ul {
        width: 100%;
        border-bottom: 1px solid #e3e3e3;
        display: flex;
        justify-content: space-around;
        li {
          color: #484848;
          padding: 0 8px;
          font-size: 12px;
          font-weight: bold;
          height: 36px;
          line-height: 36px;
          .data_filtrate span {
            display: inline-block;
            transform: scale(0.7);
          }
        }
      }
    }
    .quick_filtrate {
      ul {
        white-space: nowrap;
        width: 200%;
        height: 57px;
        padding: 16px 24px;
        li {
          font-size: 12px;
          border: 0.5px solid rgb(118, 118, 118);
          color: rgb(118, 118, 118);
          padding: 4px 8px;
          margin-right: 16px;
          line-height: 16px;
          border-radius: 30px;
          float: left;
        }
      }
    }
  }
}
</style>
