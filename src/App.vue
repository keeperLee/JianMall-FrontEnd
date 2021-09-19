<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'

export default {
  name: 'App',
  components: {},
  data(){
    return {
      a:'',
      res:{}
    }
  },
  mounted() {
    this.getUser();
    this.getCartCount();
    // storage.setItem("abcd",0,"user");
    // storage.clear("user");
    // 本地加载请求静态json文件的形式
    // this.$axios.get('/mock/user/login.json').then(res=>{
    //   this.res = res;
    // });
    //通过easymock平台
    // this.$axios.get('/user/login').then(res=>{
    //   this.res = res;
    // });
  },
  methods:{
    getUser(){
      this.$axios.get('/user').then(()=>{
        // to-do 保存到vuex里面
      })
    },
    getCartCount(){
      this.$axios.get('/carts/products/sum').then(()=>{
        // to-do 保存到vuex里面
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/base.scss";
@import "./assets/scss/button.scss";
</style>
