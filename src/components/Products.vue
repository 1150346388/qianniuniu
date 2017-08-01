<template>
  <div class="content">
  <TopBar :hasBack="false" :titleText="title"></TopBar>
  <div v-for="product in products" :key="product.pid">
    <product-item :product="product"></product-item>
  </div>
  <div><a class="tac picc-info"><span class="safety">账户资金存管至恒丰银行</span></a></div>
  <FooterBar></FooterBar>
  </div>
</template>

<script>
import ProductItem from './Product';
import footerBar from '@/components/FooterBar'
import topBar from '@/components/TopBar'

export default {
  name: 'products',
  data () {
    return {
      products:[],
      title:'产品'
    }
  },
  created(){
   this.$http.get('/api3/products/productTab').then((res) => {
     this.products = res.body.data.selling.list;
     console.log(this.products);
   });
  },
  components: {
    ProductItem,
    FooterBar:footerBar,
    TopBar:topBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  margin-top: 1.2rem;
  background: #f0f0f0;
}
</style>