<template>
  <div>
    <div class="fill_top"></div>
    <div class="container">
      <div style="height:40px;"></div>
      <!-- 卖家列表 -->
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div class="pro_list" v-for="(item,i) of list" :key="i">
          <a href class="list_a">
            <div class="list_img">
              <div class="swipe_img">
                <mt-swipe :auto="0">
                  <mt-swipe-item>
                    <img src="../../assets/img/5846428f-6c8a-4713-a68b-58f535a70e35.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/40a1e397-ac54-4140-9b2e-74ed75fa9c54.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/a3e325e0-8354-409e-8f12-eed083de24d7.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/cede9f15-55df-462c-ade2-47a563e07d19.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/bb42a1d7-a926-4635-96b1-6cfdb2564e0c.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/40a1e397-ac54-4140-9b2e-74ed75fa9c54.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/5846428f-6c8a-4713-a68b-58f535a70e35.jpg" alt>
                  </mt-swipe-item>
                  <mt-swipe-item>
                    <img src="../../assets/img/a3e325e0-8354-409e-8f12-eed083de24d7.jpg" alt>
                  </mt-swipe-item>
                </mt-swipe>
              </div>
              <div class="seller">
                <img :src="item.seller_img" alt>
                <div class="seller_icon">
                  <svg viewBox="0 0 14 24">
                    <path
                      d="m10.5 20.0005 c 0 1.93268 -1.56704 3.49949 -3.5 3.49949 s -3.5 -1.56682 -3.5 -3.49949 c 0 -1.93268 1.56704 -3.50051 3.5 -3.50051 s 3.5 1.56783 3.5 3.50051 m -9.99486 -18.5876 l -0.00513752 8.13836 c 0 0.457964 0.216821 0.889929 0.588807 1.17091 l 5.07731 3.8317 c 0.487076 0.367971 1.16837 0.367971 1.65647 0.0009994 l 5.08142 -3.8267 c 0.371986 -0.278978 0.589834 -0.710944 0.590861 -1.16791 c 0.0010271 -1.75186 0.0041101 -6.21051 0.0051391 -8.14036 c 0 -0.50396 -0.420283 -0.912928 -0.939216 -0.912928 l -11.1164 -0.00699945 c -0.517904 -0.00099942 -0.938187 0.407969 -0.939215 0.912928"
                      fill="#fff"
                    ></path>
                    <path
                      d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                      fill="#ffb400"
                    ></path>
                    <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f"></path>
                    <path
                      d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                      fill="#484848"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="list_info fixclear">
              <div class="info_room">
                <div class="info_top">
                  <span>{{item.title}}</span>
                </div>
              </div>
              <div class="info_area">{{item.subtitle}}</div>
              <div class="info_appraise fixclear">
                <span class="user_appraise">{{item.room_appraise}}</span>
                <span class="seller_appraise">{{item.landlord_appraise}}</span>
                <span class="room_appraise">{{item.room_facility}}</span>
              </div>
            </div>
            <div class="list_price">
              <span class="room_price">￥{{item.price}}</span>
              <span class="room_data">每晚</span>
              <div class="room_promise">
                <div class="promise_logo">
                  <svg viewBox="0 0 32 32" style="height:12px;width:12px;fill:#bbbbbb;">
                    <path
                      d="m13.2651857 19.4498225-5.07154933-5.0715493-2.17401154 2.1740115 7.24670517 7.2467052 2.1740115-2.1740116-.0011443-.0011443 10.649855-10.649855-2.1740115-2.17401155zm2.7348143 12.5501775c-8.836556 0-16-7.163444-16-16s7.163444-16 16-16 16 7.163444 16 16-7.163444 16-16 16z"
                    ></path>
                  </svg>
                </div>
                <span>{{item.promise}}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      page: 1,
      loading: false,
      bRequest: true
    };
  },
  // props:['list'],
   methods: {
    loadMore () {
      if (this.bRequest) {
        this.loadList(this.page);
      }
    },
    loadList (page) {
      console.log(page);
      this.axios.get('http://127.0.0.1:3000/product/list?pno=' + page).then(res => {
        console.log(res);
        if (res.data.length === 0) {
          this.bRequest = false;
        }
        this.list = this.list.concat(res.data);
        this.page++;
      }).catch(err => {
        console.log(err);
      });
    }
  }/*, 
  created(){
    //this->当前组件对象
    //Vue.prototype.axios=axios
    this.axios.get(
      "http://127.0.0.1:3000/product/list?pno="+this.page
    ).then(res=>{//必须用箭头函数
      //this->当前组件对象
      this.list=res.data;
    })
  }*/
};
</script>

<style scoped lang="scss">
body {
  background-color: #fff;
  color: #484848;
  font-family: Circular, "PingFang-SC";
  font-size: 14px;
  line-height: 1.43;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(196, 196, 196, 0.2);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
.fixclear:after {
  content: "";
  display: block;
  clear: both;
}
.fill_top {
  width: 100%;
  height: 136px;
}
.container {
  .pro_list {
    padding: 0 24px;
    .list_a {
      display: block;
      width: 100%;
      border: 0.5px solid #fff;
      border-radius: 16px;
      box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
      margin-bottom: 16px;
      padding: 4px;
      // 图片
      .list_img {
        position: relative;
        width: 100%;
        height: 212px;
        .swipe_img {
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .seller {
          position: absolute;
          right: 16px;
          bottom: -24px;
          width: 48px;
          height: 48px;
          background-color: #fff;
          border-radius: 50%;
          img {
            width: 44px;
            height: 44px;
            margin: 2px;
            border-radius: 50%;
          }
          .seller_icon {
            position: absolute;
            bottom: 2px;
            right: -8px;
            svg {
              height: 24px;
              width: 24px;
              display: block;
            }
          }
        }
      }
      // 基本信息
      .list_info {
        padding: 12px;
        font-family: Circular, "PingFang-SC";
        font-size: 12px;
        font-weight: bold;
        color: #484848;
        .info_room {
          margin-bottom: 4px;
          .info_top span {
            color: #767676;
          }
        }
        .info_area {
          font-size: 14px;
          color: #484848;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .info_appraise {
          margin: 4px 0;
          span {
            float: left;
            height: 24px;
            padding: 4px 10px;
            line-height: 16px;
            border-radius: 12px;
            margin-right: 6px;
          }
          .user_appraise {
            color: #296e00;
            background-color: #eaf7ea;
          }
          .seller_appraise {
            background-color: #f7f3ea;
            color: #8a2400;
          }
          .room_appraise {
            background-color: #f2f2f2;
            color: #484848;
          }
        }
      }
      // 价钱
      .list_price {
        color: #484848;
        padding: 14px 12px 20px;
        border-top: 1px solid #ebebeb;
        font-size: 12px;
        .room_price,
        .room_data {
          line-height: 100%;
        }
        .room_price {
          font-size: 16px;
          font-weight: bold;
          margin-right: 6px;
        }
        .room_promise {
          position: relative;
          float: right;
          .promise_logo {
            position: absolute;
            left: -14px;
            top: 2px;
            width: 12px;
          }
        }
      }
    }
  }
}
</style>
