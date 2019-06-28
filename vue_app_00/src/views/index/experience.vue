<template>
  <div class="experience-item">
    <div class="experience-list" v-for="(val,i) of expreience" :key="i">
      <img :src="`http://127.0.0.1:3000/huizu/index/${val.img}`" alt="">
      <h6>{{val.title}}</h6>
      <h4>{{val.subtitle}}</h4>
      <p>{{val.price}}</p>
      <div>{{val.num}}<span class="exp-bg"></span>({{val.expNum}})</div>
    </div>
    <div class="city-more">
      <span>查看更多体验</span>
    </div>
  </div>
</template>
<script>
export default {
 computed: {
   expreience(){
     return this.$store.getters.expreience;
   }
 }, 
}
</script>
<style lang="scss" scoped>
  div.experience-item{
    width: 92%;
    margin: 0 auto;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    div.experience-list{
      width: 48%;
      img{
        width: 100%;
      }
      h4{
        font-size: 14px;
        color: #484848;
      }
      div{
        display: flex;
        justify-content: left;
        align-items: center;
        font-size: 12px;
        color:#008489;
        span{
          width: 76px;
          height: 20px;
        }
      }
    }
  }
</style>

