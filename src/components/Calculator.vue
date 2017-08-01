<template>
<div class="calculator-btns">
<div class="default-btn-fix calculator-buy-button">
   <div class="calculator-btn-icon" @click="getCalculator()">
    <img src="https://www.qianshengqian.com/mobile/static/images/products/calculator.png" alt="">
   </div>
   <div class="default-btn buy-btn" @click="getProduct()">
    <a class="ng-binding">立即投资</a>
   </div>
  </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'calculator',
  props:{
    calculatorData:{
      type: Object
    }
  },
  data () {
    return {
    }
  },
  created(){
   setTimeout(() => console.log(this.calculatorData));
  },
  methods:{
    getCalculator(){
      localStorage.calculatorData =JSON.stringify(this.calculatorData) ;
      router.push('/product-calculator')
    },
    getProduct(){
      router.push({name:'product-buy',params:{'id':this.calculatorData.id}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.calculator-btns{
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #e33133;
}
.calculator-btn-icon{
  display: inline-block;
  width: 13%;
  background-color: #fff;
  float: left;
  margin-top: 0.07rem;
}
.calculator-btn-icon img{
    width: 70%;
    height: 1rem;
    font-size: .5rem;
    position: relative;
    top: .2rem;
}
.default-btn.buy-btn{
  display: inline-block;
  width: 78%;
  font-size: .54rem;
  text-align: center;
}
.default-btn.buy-btn a{
  color: #fff !important;
}
</style>