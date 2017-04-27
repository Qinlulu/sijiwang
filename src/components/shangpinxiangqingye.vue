<template>
  <div class="hello">
    <header class="qin-header">
      <router-link to="/">
        返回
      </router-link>
      <a>
        丝集网
      </a>
      <a>
        主页
      </a>
    </header>

    <div class="banner swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="http://www.joinsilk.com/File/download?id=811022515353681920" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://www.joinsilk.com/File/download?id=811023428038426624" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://www.joinsilk.com/File/download?id=811023442416500736" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  <div  class="con-o">
    <div class="tittle">
      <span>定制</span>旗袍2017秋新款复古改良时尚桑蚕丝真丝旗袍裙日常长款修身连衣裙
    </div>
  </div>
  <div class="contes">
    <div>
    <p>￥<span>89990</span> <em>参考价</em></p>
    <p><span>起批量>1</span><span>浙江省杭州市</span></p>
    </div>
  </div>
  <div class="con-t">
    <dl class="dlst">
      <dt>
        <img src="http://www.joinsilk.com/File/download?id=803208820674265088&M=fixed&L=0&W=61&H=61" alt="">
      </dt>
      <dd>
        <p>艳锦丝绸</p>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAcCAYAAAD8+1StAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NjE3MjUxYS05Y2U4LTIxNDEtOTExOS02YWViOGY0MjViNDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM0MDAzQ0JDMEZBMTFFNjlFOUVEMzE2RjcyODQzMTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM0MDAzQ0FDMEZBMTFFNjlFOUVEMzE2RjcyODQzMTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBiNzEyMjExLTdiNmItZDk0ZC1iOGZhLTc0MGQ0NjllNGFmZCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEzMjkwOTUwLWE0OTgtMTFlNi05MzNlLWU3ZDI4OTU3NGVjNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhggJhUAAAUpSURBVHja7JzbaxRXHMfPxobS2traIiqFVBsMaJe1yQabgNUHLwg+aPIWaNg8+ZYXn4XSUgotpaCID74p/gWCL3koiJYkxTVqK15ArZG2oVtaEIJQd3f6PTuzmcvO5Vx+58w8eOCzm53dmd9nZ3/7mzNnzqbkOA6Tanf3Bx/VwAWp9T++yrRaOL68i7n4Yj724se75BNfL2cCrU96Dafd5X1wDmwOLMtGt8VvV9zFTHxxHzvxk13sx9fPmQB9CsZdpsCbYDqwTADtPRaHhIuR+BI+VuKnuFiPT5AzPgoJ2+4yE7kXRLfFblfCxUh8CR8r8VNcrMcnyBmf15QOCegJgWq3Vwb2gJ+ZjdZ7WLPrkn1YNesjd1ind1HvVpC4qFbYWsI3J48KK+livMJk+FitcDEuuVVYjZzxKUmPEtyprsPtM7A1sPRf8AF4kbl+pa63v+5Ug4/kXWjjR1u2j9n4Yi6V+gsL8fU+J8IKexhsjWT+RjCRQ4VVcDFaYQR8rFW4FBfrFVYzZ3wUhrVaNcBimElYHka7DxfanrwLbXx5H7PxxVzsxNf7nBKQS9jb5XeR5ccSsv8AGLBYYRVdjFU4QR8rFTbd5XZ5wGKFJciZaB/21s4NePQWeNu73+jdd3nHYxc4lvJuHnt9k6z2BjjNPrl3vueZIrkUzacILrd2dv/KxaXk3NzBL5Wd8QRstL/BDBt+eKXnmaWh4rgUzacoLktD/DYfF8auuBV2afBD5l7f3W848DUwxYYf/Z74iiK5FM2nCC5Lg92/7Low1nHxh7VubuP92ZPga/A69XA7+A6cYiO/NTNfXSSXV/smGj86ymTehbE1l95x2PpAGbeXwG6iwA3wOZjrPKoui69pyqW6PKe0dhF86mvnS/m41GPP18zmTOo4bHX5V8Zae8C3AKdmfChGGZTz1jCY85dJNBMuqslaGJ+19XNyiV3fcM74pF/purFlL24vgu0KYx/fgC+D5bzTRlfUkoXKRTW+79H9S99ndKWpET/Y7LnEx6d1ieZMoGVfmr2xiQ9bPARbJIL/ydzLbr0bH21oJAuBi0581yH4SN1ntOEQxLfvkhyfxiVjDmT2bC2HD/yyzZK7lV8z/hQs0HbDC+ASnq1k3yd5tpQdF7HZWsZcBBK2dZxXYoVdO0mfsAVwCV9ete+TfHnXjovY5WVjLgKXZhMvq2VxnP7SKIWLbgttV8OHJH4OLkLbJM4Z0ckvi+vfwzdqX8JEhCa47N3HPb8DlMkmn1C5UFRYFz2fxfVlzfj5uGRPUKHPGfHJL+2joD8m0++Dvd43aQT8lPCNmKSrsFQuZBWWwIeswlp0yaySBnJGtMI6KNHhXy22wQ9gBCx6y34Bn4ET4J/I6yfIfjVK5UJx0uWi76MXPx+X7F+20udMgORhrYV+PjvmL+bOvOHtEXMnIFxPeTt8zON7MB3odH8Enqy9Yuyl/IdE6TL28olWwi7089v8fNz4wSbnwvf/Qr+6S298dRfRnBE76XIOAQTmGe2cBbvxhq5n/Ay3AWrgIHjgLZvQ/5lzjAtzFF20S2zOPj3blXTpJG0DKLqkvkfC/SL7M2+3tD8FB9lYcxasCh4SOD+CCvgCHNHuEgRdnPYsWJX45wthF5ougbrPWFPPJ/4QLO4SqrYKLtndAZrPKeF18eOw8yWeyH+ACht3nvd+w4Taf+Arr7z3KZ9xRV3mVYb3Ai58e+NanWnfh7HnSpsYb7s+8yUFHyd6hLTs4qQNkeq5COTM/wIMAC361b+57EwMAAAAAElFTkSuQmCC" alt="">
      </dd>
      <dd>></dd>
    </dl>
    <ul>
      <li>经营模式：生产型</li>
      <li>经营产品范围：丝巾,旗袍</li>
      <li>所在地区：浙江省杭州市</li>
    </ul>
    <p class="button">进入店铺</p>
  </div>



    <div class="tittles">
      ———  继续拖动,查看商品详情  ———
    </div>

    <div class="tab">
      <ol>
        <li class="list"><span>商品详情</span></li>
        <li><span>商品属性</span></li>
      </ol>
      <div class="imgs">
          <div class="swiper-slide">
            <img src="http://www.joinsilk.com/File/download?id=811022515353681920" alt="">
            <img src="http://www.joinsilk.com/File/download?id=811023428038426624" alt="">
            <img src="http://www.joinsilk.com/File/download?id=811023442416500736" alt="">
          </div>
          <div class="swiper-slide" style="display:none">
            <ul>
              <li><span>上市年份/季节</span><span>春季</span></li>
              <li><span>主图来源</span><span>丝集网</span></li>
              <li><span>产地</span><span>北京</span></li>
              <li><span>品牌</span><span>阿尼行</span></li>
              <li><span>流行元素</span><span>site</span></li>
              <li><span>货号</span><span>125</span></li>
              <li><span>面料成分及成分含量</span><span>桑蚕丝100%</span></li>
              <li><span>领型</span><span>圆领</span></li>
            </ul>
        </div>
      </div>
    </div>


    <div class="footer">
      <p>首页</p>
      <p>Copyright ©2016-2028 丝集网  www.joinsilk.com版权所有</p>
    </div>

  </div>
</template>

<script>
  import _$ from 'jquery'


export default{
    mounted(){
      new Swiper(".banner",{
          autoplay:2000
      })

      _$(".tab ol li").on("click", function () {

        _$(this).addClass("list").siblings().removeClass("list")
        _$(".imgs div").eq(_$(this).index()).css("display","block").siblings().css("display","none")
      })

    }
}

</script>

<style scoped>
  body,html,.hello{
    background:#F2F2F2;
    width:100%;
    height:100%;
  }
  .qin-header{
    width:100%;
    height:0.44rem;
    display:flex;
    text-align:center;

  }
  .qin-header a{
    flex:1;
    font-size:0.14rem;
  }
  .qin-header a:nth-child(2){
    flex:5;
  }
  .banner{
    width:100%;
    height:2.20rem;
    overflow:hidden;
    position:relative;
  }
  .swiper-wrapper{
    width:300%;
    display:flex;
  }
/*  .swiper-pagination{
    position:absolute;
    top:80px;
    background:#fff;
    left:0;
    height:20px;
    width:100%;
    display:flex;
  }
  .banner .swiper-pagination span{
    width:20px;
    height:20px;
    background:#000;
    display:block;

  }*/

  .banner img{
    width:100%;
  }
  .con-o{
    width:100%;
    height:auto;
    background:#fff;
    box-sizing: border-box;
  }

  .con-o .tittle{
    width:90%;
    margin:0 auto;
    height:0.45rem;
    border-bottom:0.01rem solid #ccc;
    padding:0.15rem 0;
    line-height:0.25rem;
    color:#000;
  }
  .tittle span{
    display:inline-block;
    padding:0 0.08rem;
    height:0.20rem;
    line-height:0.20rem;
    font-size:0.14rem;
    background:#FF8F0D;
    color:#fff;
    border-radius:0.04rem;
    margin-right:0.12rem;
  }
  .contes{
    width:100%;
    height:0.65rem;
    background:#fff;
    border:1px solid  transparent;
    box-sizing: border-box;
    margin-bottom:0.10rem;
  }
  .contes div{
    width:90%;
    height:auto;
    margin: 0 auto;
  }
  .contes p:nth-child(1){
    color:#E8470C;
    margin:0.12rem 0;
  }
  .contes p:nth-child(1) span{
    font-size:0.16rem;
    font-weight: bold;
    margin:0 0.05rem;
  }
.contes p:nth-child(1) em{
    display:inline-block;
    border:1px solid  #E8470C;
    border-radius:4px;
  padding:0.02rem 0.05rem;
  }

  .contes p:nth-child(2){
    display:flex;
    justify-content: space-between;
  }
  .con-t{
    width:100%;
    height:auto;
    background:#fff;
    box-sizing: border-box;
    padding:0.10rem;
  }
  .con-t .dlst{
    width:95%;
    height:0.55rem;
   margin: 0 auto;
    border-bottom:0.01rem solid #ccc;

  }
  .con-t .dlst dt{
    width:0.50rem;
    height:0.50rem;
    float:left;
    margin-right:0.10rem;
  }
  .con-t .dlst dt img{
    width:100%;
    height:100%;
  }
  .con-t .dlst dd{
    float: left;
  }
  .con-t .dlst dd p{
    height:0.25rem;
    line-height:0.25rem;
  }
  .con-t .dlst dd img{
    display: inline-block;
    height: 0.16rem;
    width: 0.6rem;
  }
  .con-t .dlst dd:nth-child(3){
    float: right;
    line-height:0.45rem;
    font-size:0.24rem;
  }

  .con-t ul{
    width:95%;
    margin:0.10rem auto;
  }
  .con-t ul li{
    width:100%;
    line-height:0.25rem;
  }
  .con-t .button{
    width:90%;
    height:0.30rem;
    background:#E8470C;
    color:#fff;
    margin:0.10rem auto;
    text-align: center;
    line-height:0.30rem;
    border-radius:10px;
  }

  .tittles{
    width:100%;
    height:0.60rem;
    text-align: center;
    line-height:0.60rem;
  }

  .tab{
    width:100%;
    height:auto;
    background:#fff;
  }
  .tab ol{
    width:100%;
    text-align: center;
    height:0.45rem;
    border-bottom:1px solid #ccc;
  }
  .tab ol li{
    width:35%;
    float: left;
    height:0.35rem;
    margin:0.05rem 0;
    border-right:1px solid #ccc;
  }
  .tab ol li:nth-child(2){
    border-right:none;
  }
  .tab ol li span{
    width:60%;
    display:inline-block;
    height:0.35rem;
    line-height:0.35rem;
  }

  .tab ol .list span{
    border-bottom:1px solid #E8470C;
    color:#E8470C;
    height:0.40rem;
  }
  .tab .imgs{
    width:100%;
    height:auto;
    padding-top:0.10rem;
    overflow: hidden;
  }
  .tab .imgs img{
    width:100%;
  }
  .tab .imgs{
    width:100%;
    overflow: hidden;
  }

  .tab .imgs li{
    width:100%;
    height:0.45rem;
    line-height:0.45rem;
    border-bottom:1px solid #ccc;
  }
  .tab .imgs li span{
    display:inline-block;
    width:50%;
    float: left;
    text-indent:0.12rem;
  }

  .footer{
    width:100%;
    height:0.65rem;
    background:#E6E6E6;
  }
  .footer p{
    line-height:0.20rem;
    text-align:center;
  }






</style>
