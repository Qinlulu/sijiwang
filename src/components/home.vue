<template>
  <div class="hello">
    <header class="qin-header">
      <router-link to="/" class="icon iconfont icon-iconfontarrleft">
      </router-link>
      <a>
        <strong>
          <input type="text" placeholder="输入产品关键词" :value="msg"/>
        </strong>
      </a>
      <a @click="cha">
        搜索
      </a>
    </header>
    <ul class="qin-shai">
      <li class="list" ref="list">
                <span @click="zoom">
                    综合
                </span>
      </li>
      <li ref="price">
                <span @click="price">
                    价格
                </span>
      </li>
      <li>
        <strong>
          <em @click="filter">
            筛选
          </em>
          <i class="icon iconfont icon-shaixuan">

          </i>
        </strong>
      </li>
    </ul>
    <div class="qin-dls">

      <router-link to="/spxq" v-for="item in newdata" tag="dl">
        <dt>
          <img src="../assets/qipao.jpg" alt="">
        </dt>
        <dd>
          <p v-html="item.name">
          </p>
          <strong>
            <i class="icon iconfont icon-weizhi">

            </i>
            <em>
              {{item.contactProvince}}{{item.contactCity}}
            </em>
          </strong>
          <p>
            <i>
              ￥{{item.price }}
            </i>
            元/{{item.calculateType}}
          </p>
        </dd>
      </router-link>
    </div>
    <div class="filters" v-show="isHide">
      <div class="fliter">
        <header class="qin-header">
          <a @click="back" class="icon iconfont icon-iconfontarrleft">

          </a>
          <a>
            筛选
          </a>
          <a @click="filte">
            清空
          </a>
        </header>
        <div class="cont">
          <p>
            价格范围
          </p>
          <ul>
            <li>
              <input type="text" placeholder="最低价" ref="min"/>
            </li>
            <li>
              <input type="text" placeholder="最高价" ref="max"/>
            </li>
          </ul>
          <p>
            起订量
          </p>
          <ul>
            <li>
              <input type="text" placeholder="输入起订量" ref="qdin"/>
            </li>
            <li class="list">
              以上起订
            </li>
          </ul>
        </div>
        <div class="footer" @click="yes">
          <p>
            确定
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "../assets/sousuoxiangqingye.scss"
</style>
<script>
  import _$ from 'jquery'
  export default {
    data(){
      return {
        isHide: false,
        msg: "",
        data: {},
        newdata:[],
        newdatas:[]
      }
    },
    methods: {
      cha() {
        alert("正在搜索")
      },
      filter() {
        this.isHide = !this.isHide
      },
      back() {
        this.isHide = !this.isHide
      },
      filte() {
        this.$refs.min.value=""
        this.$refs.max.value=""
        this.$refs.qdin.value=""
      },
      yes() {
        this.isHide = !this.isHide
        let min=this.$refs.min.value
        let max=this.$refs.max.value
        let ars=[]
       if(min=="")min=0
       if(max=="")max=10000
       for(let i=0;i<this.newdata.length;i++){
          if(this.newdata[i].price>=min && this.newdata[i].price<=max){
            ars.push(this.data[i])
          }
        }

        this.newdata=ars
      },
      zoom(){
        this.newdata=this.data
      },
      price(){
        if (!this.$refs.price.classList.contains("list") || !this.$refs.price.classList.contains("s")) {
          this.$refs.price.classList.add("s")

          this.newdata.sort( ( a,b ) => {
            return a.price-b.price;
        } )

        } else {
          this.$refs.price.classList.remove("s")
          this.newdata.sort( ( a,b ) => {
            return b.price-a.price;
        } )

        }
      }
    },
  created(){
    this.msg = this.$route.query.name
  },
    mounted() {
      this.$http.get("../../static/sousuo.json").then(function (data) {
        this.data = JSON.parse(data.bodyText).resultList
         for(let i=0;i<this.data.length;i++){
            if(this.data[i].name.indexOf(this.msg)>-1){
              this.newdata.push(this.data[i])
            }
         }
      })

      _$(".qin-shai li").on("click", function () {
        _$(this).addClass("list").siblings().removeClass("list")
      })

    }
  }
</script>
