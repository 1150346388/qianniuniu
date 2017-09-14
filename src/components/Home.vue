<template>
  <div class="home">
  <div class="carousel">
    <el-carousel trigger="click" height="576px" arrow="never">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
      <a :href="banner.url">
        <img :src="banner.img">
      </a>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="tags">
    <a :href="h.url" v-for="h in hot" :key="h.cid">
      <div class="tag" :style="{backgroundImage: 'url(\'' + h.img + '\')'}">
        <span>{{h.title}}</span>
      </div>
    </a>
  </div>
  <div class="usualPud">
    <div class="product" v-for="p in products">
    <div class="title">
      <span class="name">{{p.cat_title}}</span>
      <span class="info">{{p.cat_desc}}</span>
    </div>
    <div class="body">
      <router-link :to="{ name: 'product-detail', params: { pid: p.records[0].pid }}">
        <em>{{p.records[0].min_rate_integer}}</em>
        <span>{{p.records[0].min_rate_decimal}}</span>
        <div class="limit">{{p.records[0].right_desc}}</div>
      </router-link>
    </div>
    <div class="button">
      <div class="btn"><router-link :to="{ path: `product-buy/`+p.records[0].pid}" class="btn">{{p.records[0].button}}</router-link></div>
    </div>
    </div>
  </div>
  <div class="total">
    <div class="item">
      <span>累计投资金额（元）</span>
      <p>{{invest.invest_total}}</p>
    </div>
    <i class="break"></i>
    <a class="item" :href="invest.invest_url">
      <span>累计投资人次（次）</span>
      <p>{{invest.invest_num}}</p>
      <i class="el-icon-arrow-right"></i>
    </a>
  </div>
  <FooterBar></FooterBar>
  </div>
</template>

<script>
import footerBar from '@/components/FooterBar'

export default {
  name: 'home',
  data () {
    return {
      banners:[],
      hot:[],
      products:[],
      invest:{}
    }
  },
  created(){
   this.$http.get('/api3/home/newhome').then((res) => {
      this.banners = res.body.data.banners;
      this.hot = res.body.data.hot;
      this.products = res.body.data.products;
      this.invest = res.body.data.invest;
   });
  },
  components:{
    FooterBar:footerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home{
  background-color: rgb(239, 239, 244);
}
.carousel{
  width: 100%;
}
.el-carousel__indicators{
  bottom: 15px !important;
}
.el-carousel__item img{
  height: 576px;
  width: 100%;
}
.tags{
    height: 360px;
    width: 100%;
    background: #fff;
    border-radius: 15px 15px 0 0;
    position: relative;
    top: -15px;
    z-index: 2;
    display: flex;
    overflow: hidden;
    margin-bottom: .25rem;
}
.tags a,a:hover{
  flex:1;
  text-decoration: none;
  color:#666;
}
.btn a{
  color:#fff;
}
.tags .tag{
  height: 100%;
  background-size: 0.86rem;
  background-position: center .8rem;
  padding-top: 1.75rem;
  font-size: 0.35rem;
  line-height: 0.75rem;
  background-repeat: no-repeat;
}
.product{
  background: #fff;
  padding: 0rem .4rem .4rem;
  margin-bottom: .05rem;
}
.title{
  font-size: .4rem;
  height: 1.2rem;
  margin-bottom: .54rem;
}
.title .name{
    float: left;
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
}
.title .info{
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
}
.body a{
  display: block;
}
.body em{
  font-size: 1rem;
  color: #e33133;
}
.body span{
  font-size: .35rem;
  color: #e33133;
}
.limit{
  font-size: .35rem
}
.product .button{
  text-align: center;
  display: block;
  position: relative;
  color: #fff;
  margin-top: .5rem;
}
.product .button .btn{
  width: 100%;
  background: red;
  border-radius: .25rem;
  font-size: .45rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.total{
  display: flex;
}
.total .item{
  flex: 1;
  font-size: .4rem;
  color: #666;
}
.item i{
  position: relative;
  left: 1.75rem;
  bottom: 1rem;
}
.item span{
  font-size: .32rem;
}
.item span,.item p{
 float: left;
 width: 100%;
 line-height: .2rem;
}
.total{
  padding: .5rem;
}
.break{
  display: inline-block;
  height: .4rem;
  border-left: 1px solid #000;
  position: relative;
  top: .225rem;
}
</style>