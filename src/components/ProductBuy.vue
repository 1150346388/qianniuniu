<template>
   <div>
	<TopBar :hasBack="true" :titleText="title"></TopBar>
	<div class="contentWrap">
		<div class="product-buy-top">
			<ul>
				<li class="fl"><span>{{data.format_uaccount}}</span></li>
				<li class="fr">{{data.interest_desc}}<span>{{count | tofixed2}}</span><span v-if="choserounte">+{{extral_count | tofixed2}}</span></li>
			</ul>
		</div>
	</div>
	</div>
</template>
<script>
import router from '../router'
import topBar from '@/components/TopBar'

export default {
  name: 'productBuy',
  data () {
    return {
      title:'',
      data:{},
      choserounte:false,
      faild_descption:{},
      count:0,
      extral_count:0
    }
  },
  created(){
   this.$http.get('/api3/transaction/willInvestment?pid='+this.$route.params.pid).then((res) => {
     this.data = res.body.data;
     this.title = res.body.data.page_title;
   });
  },
  components: {
  	TopBar:topBar
  },
  filters: {
    tofixed2(value){
     return (value).toFixed(2)
    },
    formatNum(){
    	return ''
    }
  }
}
</script>
<style>
.contentWrap{
	margin-top: 1.2rem;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
</style>