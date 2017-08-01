<template>
<div class="product-item">
  <router-link :to="{ name: 'product-detail', params: { pid: product.pid }}">
   <div class="title" :style="{color:'inherit'}">{{product.title}}</div>
   <div class="info">
   <div></div><span class="num">{{product.min_rate_integer}}</span><label>{{product.min_rate_decimal}}</label><span class="num">{{product.max_rate_integer}}</span><label>{{product.max_rate_decimal}}</label>
   <span class="right">{{product.right_title}}</span></div>
   <div :style="{clear:'both',fontSize:'.4rem'}">
   <span class="left">{{product.rate_desc}}</span> <span class="right">{{product.right_desc}}</span>
   </div>
 <div class="bottom">
   <span class="min">{{product.min_buy}}</span>
   <router-link :to="{ name: 'product-buy', params:{ pid: product.pid}}" class="btn">{{product.button}}</router-link>
 </div>
 </router-link>
</div>
</template>

<script>
export default {
  name: 'product',
  props:{
    product:{
      type: Object
    }
  },
  data () {
    return {
    }
  },
  created(){
  	console.log(this.product);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.product-item{
  padding: .4rem;
  margin-bottom: .4rem;
  background: #fff;
}
.product-item .title{ 
  font-size: .4rem;
  text-align: left;
  margin: 0;
}
.info{
  line-height: 150px;
}
.info .num{
  font-size: .85rem;
}
.info label,.info span{
  font-size: .4rem;
  float: left;
}
.info .right{
  float: right;
}
.left{
  float: left;
}
.right{
  float: right;
}
.bottom{
  clear: both;
  position: relative;
  top: .5rem;
  border-top: 1px solid #f0f0f0;
  height: 1.5rem;
}
.bottom .min{
  font-size: .3rem;
    float: left;
    position: relative;
    top: .45rem;
}
.bottom .btn{
    display: inline-block;
    float: right;
    background: red;
    border-radius: .2rem;
    font-size: .4rem;
    padding: .1rem;
    color: #fff;
    width: 2rem;
    position: relative;
    top: .25rem;
}
</style>