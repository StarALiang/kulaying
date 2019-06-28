<template>
  <div>
    <img :src="`http://127.0.0.1:3000/huizu/index/${img}`" alt="">
    <h6>{{title}}</h6>
    <h4>{{subtitle}}</h4>
    <p>每晚<span>{{price}}</span>·<span>免费取消</span></p>
    <div class="city-exp"><span class="exp-bg"></span><span class="exp-num">{{expNum}}</span></div>
  </div>
</template>
<script>
export default {
  props:{
    img:{default:""},
    title:{default:""},
    subtitle:{default:""},
    price:{default:""},
    expNum:{default:""}
  }
}
</script>
<style lang="scss" scoped>
  div{
    width: 45%;
    img{
      width: 100%;
    }
    h6{
      color:rgb(random(255),random(255),random(255));
    }
    h4{
      color:#484848;
      font-size: 14px;
      width: 100%;
      font-weight: 900;
      display: -webkit-box;
      overflow: hidden;
      max-height: 34px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
     word-break: break-all;
    }
    p{
      margin: 0;
    }
    div{
      span.exp-bg{
        background-size: 200% 65%;
      }
    }
  }
</style>
