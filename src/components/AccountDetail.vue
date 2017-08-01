<template>
  <div class="content">
  <TopBar :hasBack="true" :titleText="wealth.page_title"></TopBar>
  <div class="ui-header">
    <ul class="header-product-des clearfix">
    <li v-if=""><div class="">{{wealth.assets}}</div><p class="num">{{wealth.assets_desc}}</p></li>
    <li v-if=""><div class="">{{wealth.yesterday_interest}}</div><p class="num">{{wealth.yesterday_interest_desc}}</p></li>
    </ul>
   </div>
   <div class="detail-list">
   	 <ul>
   	 	<li v-for="d of wealth.detail">
   	 		<span class="take-out-left" :style="{color:d.color.name}" v-if="d.name">{{d.name}}</span>
   	 		<span class="take-out-right" :style="{color:d.color.value}" v-if="d.value">{{d.value}}</span>
        <a class="el-icon-arrow-right" :style="{color:d.color.value}" v-if="d.url" :herf="d.url"></a>
   	 	</li>
   	 </ul>
   </div>
  </div>
</template>

<script>
import topBar from '@/components/TopBar'

export default {
  name: 'accountdetail',
  data () {
    return {
      wealth:{}
    }
  },
  created(){
   this.$http.get('/api3/wealth/detail?id='+this.$route.params.aid).then((res) => {
    this.wealth = res.body.data;
   });
  },
  components:{
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