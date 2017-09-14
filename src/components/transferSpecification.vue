<template>
  <div class="content">
  <TopBar :hasBack="true" :titleText="header.center"></TopBar>
  <div class="block"><p>1. 每日23:30到6:00为系统维护时间，期间暂时不能进行充值，提现，投资购买，提取收益以及债权转让操作；</p><p>2. 每日6:00-23:30进行提现，5万以下平均2小时到账，一次性提现5万及以上将在24小时内到账；</p><p>3. 提现额度会根据该卡的充值和提现金额实时变化，因此不会影响您的正常提现使用；</p><p>4. 提现免手续费，每日最多可提现三次；</p><p>5. 提现受央行转账系统的影响可能存在到账慢的情况，敬请谅解；</p><p>6. 如有疑问请随时拨打客服电话 4001-365-288。</p><br><br></div>
  </div>
</template>

<script>
import topBar from '@/components/TopBar'

export default {
  name: 'specification',
  data () {
    return {
      header:{center:'提现说明'}
    }
  },
  mounted(){
    scrollTo(0,0)
  },
  components:{
    TopBar:topBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>