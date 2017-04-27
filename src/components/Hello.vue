<template>
  <div class="hello">
    <header class="qin-header">
      <router-link to="/" class="icon iconfont icon-iconfontarrleft">
      </router-link>
      <a>
        <strong class="strong">
          <em @click="show">
            产品
            <ul v-show="isShow">
              <li>产品</li>
              <li>店铺</li>
            </ul>
          </em>
          <input type="text" placeholder="输入产品关键词"/>
        </strong>

      </a>
      <a>搜索</a>
    </header>
    <div class="qin-spacing">

    </div>
    <div class="qin-content">
      <div class="tittle">
        热门搜索
      </div>
      <ul class="qin-contents">
        <li v-for="ele in list">
          <router-link :to="{path:'/home',query:{
        name:`${ele.name}`}}">{{ele.name}}</router-link>

        </li>

      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'hello',
    data(){
      return {
        isShow: false,
        name:"旗袍",
        list:{}
      }
    },
    methods: {
      show: function () {
        this.isShow = !this.isShow
      }
    },
    mounted() {
      this.$http.get("../../static/lists.json").then(function (data) {
        this.list = JSON.parse(data.bodyText).list
      })
    }


    }
</script>

<style>
  @import "../assets/reset.css"
</style>
<style>
  @import "../assets/iconfont.css"
</style>
<style>
  @import "../assets/gonggong.scss"
</style>
<style>
  @import "../assets/qin-header.scss"
</style>
<style scoped>
  @import "../assets/sousuo.scss"
</style>

