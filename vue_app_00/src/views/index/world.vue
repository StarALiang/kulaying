<template>
  <div class="world-content">
    <world-list
      v-for="(val,i) of world"
      :key="i"
      :img="val.img"
      :title="val.title"
      :subtitle="val.subtitle"
      :price="val.price"
      :expNum="val.expNum"
    ></world-list>
    <div class="city-more">
      <span>查看更多的房源</span>
    </div>
  </div>
</template>
<script>
import worldList from "./worldList";
export default {
  components: {
    worldList
  },
  computed: {
    world() {
      return this.$store.getters.world;
    }
  }
};
</script>
<style lang="scss" scoped>
.flex-wrap-around {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.world-content {
  @extend .flex-wrap-around;
}
</style>
