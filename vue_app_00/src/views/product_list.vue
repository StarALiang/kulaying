<template>
  <div id="app">
    <my-header :city="city"></my-header>
    <my-container></my-container>
  </div>
</template>

<script>
import myHeader from "@/components/product_list/header.vue"
import myContainer from "@/views/product_list/container.vue"
export default {
  data(){
    return {
      
    }
  },
  components:{
    myHeader,
    myContainer
  },
  props:[
    'city'
  ]
}
</script>

<style scoped>
  #app{
    background: #fff;
  }
</style>
