<template>
  <div class="content">
  <TopBar :hasBack="true" :titleText="product.name"></TopBar>
  <div class="ui-header">
   <div class="header-panle">
    <span class="header-panle-rate">
     <i class="percent">{{product.min_rate_integer}}</i>
     <i class="s percent">{{product.min_rate_decimal}}</i>
    </span>
   </div>
   <div class="header-panle-msg lightwhite">{{product.rate_desc}}</div>
    <ul class="header-product-des clearfix">
    <li v-if="product.min_money"><div class="">{{product.min_money.name}}</div><p class="num">{{product.min_money.value}}</p></li>
    <li v-if="product.has_limit"><div class="">{{product.has_limit.name}}</div><p class="num">{{product.has_limit.value}}</p></li>
    </ul>
   </div>
   <div class="detail-list">
   	 <ul>
   	 	<li v-for="d of product.detail">
   	 		<span class="take-out-left" :style="{color:d.color.name}">{{d.name}}</span>
   	 		<span class="take-out-right" :style="{color:d.color.value}" v-if="d.value">{{d.value}}</span>
        <a class="el-icon-arrow-right" :style="{color:d.color.value}" v-if="d.url" :herf="d.url"></a>
   	 	</li>
   	 </ul>
   </div>
   <Calculator :calculatorData="calculatorData"></Calculator>
  </div>
</template>

<script>
import Calculator from '@/components/Calculator'
import topBar from '@/components/TopBar'

export default {
  name: 'productdetail',
  data () {
    return {
      product:{},
      calculatorData:{}
    }
  },
  created(){
   this.$http.get('/api3/products/detail?pid='+this.$route.params.pid).then((res) => {
    this.product = res.body.data;
    this.calculatorData = {"type":res.body.data.type,"days":res.body.data.days,"serviceFeeRate":res.body.data.service_fee_rate,"interestFormula":res.body.data.interest_formula,"serviceFeeDesc":res.body.data.service_fee_desc,"rateRange":res.body.data.rate_range,"calDesc":res.body.data.cal_desc};
   });
  },
  mounted(){
    scrollTo(0,0)
  },
  components:{
    Calculator,
    TopBar:topBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ui-header {
    width: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    background-color: #e33133;
    margin-top: 1.2rem;
}
.s.percent{
  font-size: .4rem;
}
.percent{
  font-size: 1rem;
}
.header-panle-msg{
	font-size: .35rem;
	color: #ff9c9c;
}
.header-product-des{
	color: #ff9c9c;
    margin-top: 0.5rem;
}
.header-product-des li{
	width: 50%;
	float: left;
	font-size: .4rem;
	height: 1.5rem;
	box-sizing: border-box;
    margin-bottom: .4rem;
}
.header-product-des li:last-child{
     border-left: 1px solid #ff9b9b;
}
.header-product-des .num{
	font-weight: bold;
	color: #fff;
}
.detail-list{
  background: #fff;
}
.detail-list li{
    font-size: .4rem;
    clear: both;
    padding: .4rem .25rem;
    height: 0.45rem;
    line-height: .45rem;
}
.detail-list li:last-child{
  border-top: 1px solid #f0f0f0;
}
.detail-list .take-out-left{
  float: left;
}
.take-out-right,.detail-list .el-icon-arrow-right{
  float: right;
}
.detail-list ul{
    margin: 0;
    padding: 0;
}

</style>