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
    // storage.setItem("abcd",0,"user");
    // storage.clear("user");
    // 本地加载请求静态json文件的形式
    // this.$axios.get('/mock/user/login.json').then(res=>{
    //   this.res = res;
    // });
    //通过easymock平台
    this.$axios.get('/mock/user/login.json').then(res=>{
      this.res = res;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
