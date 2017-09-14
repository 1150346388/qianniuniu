<template>
  <div class="content">
  <TopBar :hasBack="true" :titleText="header.center" :titleRight="header.right" :rightHadler={rightClick}></TopBar>
  <section class="account-withdraw contentWrap ng-scope">
    <dl class="account-carks ng-scope" v-if="data.bank_cards&&data.bank_cards.length">
      <a class="right-arrow clearfix" @click="gobankcard()"><dt class="fl">
      <img :src="currentCard.bank_icon_img" alt="" ></dt><dd></dd><dd class="ng-binding">{{currentCard.bank_name}} <span class="fs14 grey">{{currentCard.card_desc}}</span></dd></a></dl>
    <ul>
     <li class="account-from">
       <div class="account-from-lable">提现金额</div>
       <div class="withdraw-input">
        <i>￥</i>
         <input type="number" v-model="withdraw" autofocus="" :placeholder="data.limit" class="ng-pristine ng-untouched ng-valid"> 
         <span class="clear-input" @click="clearval()">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAt1JREFUSA29lj1v00AYx+8MiO5swAIDnRkilaFicpyxUpmygcqnICPNh0ClDEhdKFLFFMcsqEMrdWBuF6aWiRF1iOTj/7d99r08TUODsJTc3fP2u+f83Pm0WuApiuKpMWYDv3Vj9AOt1X26GaMutDbnWutD/A7SNP1+XTg9zyDP8xcI+hY2q/PsHN0pJjPKsmzfkXldEQjQI6X0HjJa86wXHCDbY+Q/BPhH6BIBp9Ppc2T1GbB7ofHfjAH9hWw3+/3+N9fPAzawArA7rtFN+4DOAE1daAtslvFk2czCyTFTLG/PLm/SGVTvbKll7GJ1vToBvWclFbCuRrlAsCS7SaJfY6bGOsmtHsPujaQDdI0M6m7zryl9dr2HMKz/FmF5XpQY78C5fQ2dsR4PBv0KhjpQZWm2O13daxj7CTc1ROI+A+jIZpZl6S62SgX3g3Uwyo1JTuAz822q0SpZCWa8ISgrEWb1Dpm9svoY6sPy/GuqVPkFMcUqJ4vAdRswbKHD8pkdGaq27TLSz4GthHHsmCw9mUxPEfSJFUptvax6q84wtlgEVnvpswSFUB3EcZhOImVqtYvDUAFgOfvQhpDbGlo+DrWQP4TsbiiXxrA1eIfqQlLGMj3GaTEK5YNB+kGu3tCSY/0TS2rOJZUvi6txMileWpu4eq3Gb8kCUB/64nAUw1j6cH4vV+/VJxJZBB6EiG4sw/AqVvCbs2VkKFlJcy3A1oifJFG/rVSqRgmKzC8hL62f056SVZ2lKNcRiueTo6y6PBN5NvK4ak6QaFMTyjMWy4uyN5fw+QjnW2EsMihrD+I8nx7BWbxSIOIMOvG4soFhA5MqMwGmj7Os/4y2zj40QzjhYxk/18HoARtOXoLxAzy0UVsgv8hIe5PZWOWyLWMxpv3aM14L5IB3DxikV2VKm0UfxmAs9z5DXw9IQW1genDAVe9mT+1reiGM0dqikULXV4//cBEO4f/yqv8HFaeSykdCyU8AAAAASUVORK5CYII=" alt="">
        </span>
      </div>
     </li>
     <li class="account-balance bg-white clearfix">
      <span v-show="!withdrawTips"><span>账户余额:</span> <span class="ng-binding">0.00元</span> </span>
      <span class="red ng-hide" v-show="withdrawTips">金额已超过可提现余额</span> 
      <span class="fr link-color" @click="getAllWithdraw()">全部提取</span>
    </li>
  </ul>
  <div class="mt40"><div class="default-btn enble-btn" @click="getWithdraw()">提现</div></div>
  <p class="tac fs15 grey pt20 ng-binding" >{{data.fee_desc}}</p></section>
  </div>
</template>

<script>
import router from '@/router'
import topBar from '@/components/TopBar'

export default {
  name: 'withdraw',
  data () {
    return {
      header:{center:'提现',right:'提现说明'},
      withdraw:0,
      data:{},
      currentCard:{},
      withdrawTips:false
    }
  },
  created(){
   this.$http.get('/api3/transaction/willWithdraw').then((res) => {
    this.data = res.body.data;
    this.currentCard = this.data.bank_cards[0];
    this.withdraw = res.body.max_withdraw;
   });
  },
  mounted(){
    scrollTo(0,0)
  },
  methods:{
    rightClick(){
      location.href= this.data.withdraw_rule_url;
    },
    gobankcard(){

    },
    clearval(){

    },
    getAllWithdraw(){

    },
    getWithdraw(){

    }
  },
  components:{
    TopBar:topBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.account-recharge, .account-withdraw {
    font-size: .42rem;
}
.account-recharge .account-carks, .account-withdraw .account-carks {
    background-color: #fff;
    padding: .34rem .36rem;
    box-sizing: border-box;
    margin:0;
}
.contentWrap {
    padding-top: 1.2rem;
}
.right-arrow {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcBAMAAACaHyIpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpca6urra2tr+/v66urq2trbCwsKysrLCwsK2trbGw0hQAAAAJdFJOUwDUFQjmuyeaRIJ8ntsAAAAvSURBVAjXYzAMZoAAk6kGEAabJ0wohcZCE6EMRSiDSVIIJqBAfQF2qAADRxGEBgCIsRMYIeGlwwAAAABJRU5ErkJggg==') no-repeat 100%;
}
.right-arrow  .fl {
    float: left;
    position: relative;
    bottom: .12rem;
}
.account-recharge .account-carks dt img, .account-withdraw .account-carks dt img {
    width: .78rem;
    height: .78rem;
}
.account-recharge .account-carks dd:last-child, .account-withdraw .account-carks dd:last-child {
    margin-top: .06rem;
}
.account-withdraw .account-from {
    text-align: left;
    padding: .32rem .375rem;
    border-top: 1px solid #efeff4;
    border-bottom: 1px solid #efeff4;
    background-color: #fff;
}
.account-withdraw .account-from-lable {
    margin: .31rem 0 .32rem;
}
.account-withdraw .withdraw-input {
    position: relative;
    top: .1rem;
    right: 0;
}
.account-withdraw .account-from input {
    font-size: .6rem;
    width: 82%;
    margin-left: .1rem;
}
.account-withdraw .clear-input img {
    width: .52rem;
}
.link-color, .link-inline-color {
    display: inline;
    color: #4589f1;
}
.clearfix.account-balance{
    display: block;
    padding: .3rem .5rem;
    clear: both;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
}
.red {
    color: #e33133;
}
.clearfix span{
  float: left;
}
.clearfix .fr{
  float: right;
}
.mt40 {
    margin-top: .54rem;
}
.default-btn {
    width: 92%;
    margin: 0 auto;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    box-sizing: border-box;
    border-radius: .2rem;
    font-size: .45rem;
    color: #fff;
    background-color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
        background-color: #e33133;
}
</style>