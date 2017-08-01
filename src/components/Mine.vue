<template>
  <div class="mine">
  <div class="logined" v-if="profile.isLogin">
  <div class="account-top">
  <div class="user" v-if="profile.header">
   <a class="setting">
    <img :src="profile.header.user_info.head_img_url">
    <i>{{profile.header.user_info.vip_level}}</i>
   </a>
   <a>我的</a>
   <a class="info">
    <img src="https://www.qianshengqian.com/mobile/static/images/user/mine/ling.png" >
    <i>{{profile.header.message_num}}</i>
   </a>
  </div>
  <div class="header-item" v-if="profile.header">
    <ul class="clearfix">
      <li class="fl">
        <h5 v-show="!hideAccont">{{profile.header.assets_value_big}}</h5>
        <h5 v-show="hideAccont">******</h5>
        <div class="sub">{{profile.header.assets_name}} 
         <span @click="hideAccontFun(hideAccont)">
          <img v-show="!hideAccont" src="https://www.qianshengqian.com/mobile/static/images/user/mine/eye.png" alt="" class="ng-hide">
          <img v-show="hideAccont" src="https://www.qianshengqian.com/mobile/static/images/user/mine/eye-close.png" alt="">
        </span>
        </div>
      </li>
      <li class="fr">
        <h5 v-show="!hideAccont">{{profile.header.total_intesest_value_big}}</h5>
        <h5 v-show="hideAccont">******</h5>
        <div class="sub">{{profile.header.total_intesest_name}} 
        </div>
      </li>
    </ul>
  </div>
  <div class="account-mine" v-if="profile.uaccount">
    <div class="account-balance-title">
    <a href="#/account-balance" >{{profile.uaccount.name}}<img src="https://cdn.qianshengqian.com/asset/image/api3/wealth_balance.png" alt="" >
    </a>
    </div>
    <ul>
      <li class="fl">
        <a class="icon-left" v-show="hideAccont" href="#/account-balance">*****</a>
        <a class="icon-left" v-show="!hideAccont" href="#/account-balance">{{profile.uaccount.amount}}</a>
      </li>
      <li class="fr">
        <a @click="jump(1)">提现</a>
        <a class="red" @click="jump(2)">充值</a>
      </li>
    </ul>
  </div>
  <div class="mine-bank">
    <ul class="clearfix">
     <li class="fl">
      <a  href="#/bankcard">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAgCAYAAACGhPFEAAAAAXNSR0IArs4c6QAAAORJREFUWAntmDEKAjEQRf+k2WC5neAdvMLeY2uPoIewtbQWPYZ7BO8g2m0paxXztZUpJEgG5sNCsoHw8jKkGEFOv38sZJq2edglYM5/NUWAOwRDauL6sJpdhcCYnhcgtTWBfmeREbFZho9hC8A8RmrJG/Ko49RQulBjDWsCyUvT5uLQ5q7Mgd2AG/jdgPS7Mb/XtuLv9L/uy027acWAl4cip+iSmy6qU9nMTStyii656aI6lc1smn73yZRTVbckuNH0uTowBUgShpBi3AC5sWciMpI3sHXKTqQITrWWCrnydyQneV/iOS+lEbDsNwAAAABJRU5ErkJggg==" alt="银行卡">银行卡</a>
      </li>
      <li class="fr"><a href="#/coupon">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAgCAYAAACGhPFEAAAAAXNSR0IArs4c6QAAAZlJREFUWAntmLFKxEAQhuefpNDYCQqCVj6AhQdiIYidtSjeC/gGVmpp4yP4AOd5Ym0nHhYi2PgAVspZCFYaLS4ZM8FAkDvMxuS8PbKw7GSY3f2Y/ZnAgKLhny/NhmFwBJFVEZpRX3owo+5t3jXTvsT2T2v1kKSRfJexAvQsgja7zq63cfuEGDgI7klkst+FIHrw4C1j6/olHSOtlSlf/Bshmk/7S7OBV3acBbyd1RoUSv23ixQc4L1xGrvU2A/6XBMJDwcGnAAyTvDeWuz0kkQSM2yrSoVtAtYEKi8PWyaz8Iw+NIALdt05nWpnyUoZMUaZhuPsaJ2Ma2VklwGU5Uwj6CwHDiLGNblEguA4+hnFGVbbZG+RsWbQIuvS7T4WCZDnLCvlMfrQVcnLI+bvPVbKw6x6VCUvvz6slMfoQ1clL7+kyUp5VCXvDy9utNVKedgJrc0Po7f55+Co09VhAa6ycGhbjMHbE/Cmdaqtvix7i4wRRtvKBiRrO0A7kURo9pMKGPs/O6aaPfWBcFBkJnudFXNFjUflVN4vgyywBzUIemAAAAAASUVORK5CYII=" alt="优惠券">优惠券</a>
      </li>
    </ul>
  </div>
    </div>
  <div class="account-list">
    <div class="listheader" v-if="profile.wealth_top">
      <span class="fl">{{profile.wealth_top.left}}</span>
      <a class="fr">{{profile.wealth_top.right}}</a>
    </div>
    <ul>
      <li v-for="w in profile.wealth" :key="w.id">
        <router-link :to="{ name: 'account-details', params: { aid: w.id }}" tag="a">
          <span class="left">
            <p :style="{'color':profile.wealth_top.right_color}">{{w.name}}</p>
            <p>{{w.position}}</p>
          </span>
          <span class="right">
            <p :style="{'color':profile.wealth_top.right_color,'font-size':'.375rem'}">{{w.tips}}</p>
            <p><label :style="{'color':profile.wealth_top.right_color}">{{w.revenue_name}}</label>：<i :style="{'color':'#e33133'}">{{w.revenue_value}}</i></p>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
   </div>
  <div class="unlogin" v-else-if="!profile.isLogin">
    <div class="account-mine-ad">
      <img alt="登录" src="https://qsqweb-10000035.image.myqcloud.com/d470988c2a9355e7c240cf4ca10c3c27.png">
    </div>
    <router-link tag="a" to="/login">登录</router-link>
    <router-link tag="a" to="/register">注册</router-link>
  </div>
    <div><a class="tac picc-info"><span class="safety">账户资金存管至恒丰银行</span></a></div>
  <FooterBar></FooterBar>
  </div>
</template>

<script>
import ProductItem from './Product';
import footerBar from '@/components/FooterBar'

export default {
  name: 'mine',
  data () {
    return {
      profile:{},
      hideAccont:localStorage.hideAccont==='true'
    }
  },
  created(){
   this.$http.get('/api3/wealth/index').then((res) => {
     this.profile = res.body.data;
     console.log(Boolean(localStorage.hideAccont) ? true : false);
   });
  },
  methods:{
    hideAccontFun(v){
      this.hideAccont = !v;
      localStorage.hideAccont = !v;
    }
  },
  components: {
    ProductItem,
    FooterBar:footerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.setting img{
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    border: 2px solid #fff;
}
.user{
  display: flex;
  background-color: #e33133;
}
.account-top,.account-list{
  background: #fff;
}
.account-list{
  margin-top: .25rem;
}
.setting{
    text-align: left;
    padding: .2rem;
}
.setting i{
    width: .48rem;
    line-height: .36rem;
    height: .36rem;
    background-color: #f4a933;
    color: #fff;
    font-size: 25px;
    position: absolute;
    text-align: center;
    border-radius: .18rem;
    top: .64rem;
    left: .72rem;
}
.user a{
    flex: 1;
    color: #fff;
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    font-size: .58rem;
    padding: .2rem;
}
.header-item{
    background-color: #e33133;
    height: 2rem;
    padding: .5rem 0;
}
.header-item ul{
    margin: 0;
    padding: 0;
}
.info{
  text-align: right;
  padding: .2rem .4rem;
}
.info i{
    background-color: #fff;
    border-radius: 50%;
    font-size: 28px;
    width: .42rem;
    height: .42rem;
    line-height: .42rem;
    text-align: center;
    position: absolute;
    top: .1rem;
    right: .2rem;
    color: #e33133;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.header-item .fl{
  width: 58%;
  border-right: 1px solid #e76363;
  box-sizing: border-box;
}
.header-item .fr{
  width: 42%;
}
.account-mine li{
  width: 50%;
}
.account-mine{
  height: 2rem;
}
.account-balance-title{
  font-size: .475rem;
  text-align: left;
  padding: .4rem .4rem 0;
}
 ul{
  margin: 0;
  font-size: .475rem;
}
.account-mine .fl{
  text-align: left;
}
.mine-bank{
  border-top: 1px solid #efeff4;
  height: 1.5rem;
}
.mine-bank .fl{
  border-right: 1px solid #efeff4;
}
.mine-bank li{
  width: 50%;
  font-size: .475rem;
  box-sizing: border-box;
  line-height: 1.5rem;
}
.mine-bank img{
  width: .6rem;
  padding-right: .475rem;
}
.account-mine .icon-left{
  background-size: auto .34rem;
  padding-right: .4rem;
}
.account-mine .fr a{
    display: inline-block;
    width: 1.5rem;
    text-align: center;
}
.account-mine .red{
   border-left: 1px solid #efeff4;
   color: #e33133;
}
.icon-left {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAWZJREFUOBGdk81KhFAUx/3I0F2bSF+gFvYE7qYPAqGE1r3JrHuZdha4qoY2rlomIT2AQhC0UgK1/7kzDjqo98xc8IPr+f3uOfdc1SRJ9tM0fVcU5cu27TvP8wq8s4e2ijxomuY2z/OnOI4tNo1AzXXdP13XL1VVzSA5z7LscRuJ2q4WhuFJVVULSBzMPTuOc8MpZy0g0S6Sdg9EIkEQpChnRuVg4oKzJ70MhGUjE8he0J3rsXIGBSTqljMlGRVwJZMCjkQqkElYgikJWzAm2UrQSuq6fsN1hO589g4SBciGYRg/OO6/FIdnuScDut+jKDosy/IV4DFW/zBN84pdQgc+XcFnvu9/swRjMGUnFUzBUoEMnhRw4FEBFx4UEFwUxQIf3e5uU/DQ6B2kLozgBH0WrRoC27l1FzZhy7Jm1Oc2cOwpBLvCJBUl4Hje493FlXBXJpiG+Bc0TXvA36Wg5jkn7SW6vP8DIncm/a0tCUUAAAAASUVORK5CYII=') no-repeat 100%;
    background-size: auto .14rem;
}
li h5{
  font-size: .8rem;
  color: #fff;
  margin: 0;
}
li .sub{
  font-size: .34rem;
  color: #fff;
  text-align: center;
}
.fr .sub{
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAuCAYAAACYlx/0AAAAAXNSR0IArs4c6QAABhlJREFUaAXtWH1MVlUYf577ggIKjkhSy0LyI21j05eXLfrHOUWhNfsHc/6hhmxpX6yl02Y1azZrflWrv0LMVk2xWS2WC1trov1hQKy5XMwxNUCKasLLLOW99/Q7F8/bvbz3Xi4fypW42+Gc95znnPv8nvN7Pi5E//OHxyp+ceDAPGArMpsQEROnpn1Akydv51WrdIU7SQ1u915UV99B0ehSEmIZsBShvzcBk2FshYzA/Itq7bY1gKivT6ampodMsMxF1N0dxlhTwDz69Vi7PQ1go3VT02IAmYxGuG2z8/VHCJvbB5oBcVr3UXqZI619obYIyThgeQJlgGHQ2gLJZcgcxcp7CIIvWSVsdLAu3MqxOHgwBbe7Ha0CLX2E3m0QcwPOq716rvlSV93JQj3Wi6zArDEfmpGb8wofPXp91BkgDh3Kot7eLwD64REAfgn4TuCcWuroqGs7dqxIGPw0gkRfGjRfIMgQYmv7+RYzG4wqA0RVVS4ZxnHoNXeI4HsA+DvsrZWNN2z4paOgYFZvzNgIYBuEEFmu5zJdntnYMGPUGICbL6BY7EsomO2qZOJCnNakaScoL+97zs/vFTt2aK01NStaF4X3xnr1YmzTBs4LbF7+qDAAN78SN/8JFE1LxJgw8x+t09O/QRX3l5JoLSjIYl08AUpvgq/nqnk/vaZpb97d8MO2W24AgH8G4N+Gku5FC/NJrH+KZtK6P6DLkUhE142nBPFqAE/pv+72Oykzk9LmzqFJC+ZTqK5uYkIQRN4NUU/P61BwvXkI8xH42E4uK+t0O9TvPPyRqapqN85+wXMP814qK9vCzDYWi8WLU9qi0cdlUIvFjBtBzSbieKwEnTr7fpo0by4lTZkSl5Hg5Q8bA1Bp7YJFt8Wl+gZd6HZSRsY7oJ+5qd/6gD/NNKfrH0Kw1EPYgF9XwNjvWmV+i0Ryr+tCBrUyz6Bm2aRAp82ZTckwgNPD5eUmdrsBKis7IHyX0wbMnYeCm6GgTFm+H59p7irOXqPOVkGNdZIpbAXu2d1dbmjiB7RV6aEYoG8/87eUlPQ8r1v3k/VAp7GvNMf8O857FOedMYNazCgziDb6CWqDBW3VURnAngZlnSw/Gb0eIZYgfTWKyspK3NrLbvHBZ5prRowpppqa1rZw5A0jZlSA5p5BbTignWDZXUAGwWh0D6z/HIQHpB1kHOODzzR3mpKTV9Lhwz1tHZ2fCRIyfzs+Iw1avkQxwGYA9XbcXh5ueT8MsUTNDdDH44OvNEd0lEKhtVRdLdzA3wzQVgyeBlCCoPljGO9Gm63mBujPYX2+p8yNNEclJRPcwGcURCgjku95zHAXlQE8aQ6hz5H+HsTLtqBJug/0eIGXae5Z1OubRxu8FYSjC1gF1BjUngqX2IlWjjlPw6k9lj6e5kRx8cTRvHmlk2KAaQBRWjqhveXCa4Yw1poCgr9KDtFb0+rrz6oNqh90fLCkuaCAl1hsBmhbGN6VWVK87cqp06R3dyussk6sDZG2f3rDma8TSlN/8aEZtC9GqmwJEnirAUwqG0zrUmfl0LQ1qyldBp9QqM8Igop0YRxvXZR/tj0cLpf1uLKOLT4wW6ymJEimucIggo9riIHNlxnApyACS0Ok5NxnlVugG/R+W1f00q8Lw692FBaa3/Dy2wCG2INiRmYJWcP/YTbmfTDiUlR3fwbt5q2g5NiMAbIKm7HpyYQK8O8LF+lK3Sm7W/SdcA2gP07WaL9TnFAvCTJ4WwyQQZCWL7+mFLf2Qtepu6GRoo0/EmHc/2HiE/gn477+cSLI4CUGmwHkBIoez4/rGIKjZMM/YIXL83MIjJienv4Rpaa6Vni3oshx0c82PWgDqN0ebmGKwKc6BfNF1AsJpVxQwEtFlQHsX4MKpUefiuCYMvMeV7cAjWTBNLX/EUECb9XNlgWsC15jj2zhuC2o4KWyQzKAQpmUkUF3PlJCWWghjJ2eIIOX+g7aBZxAurlF0MGPmAHkQcotJj0wz8wWE7Kzb/onrdNlDHZuRBhgfalyC+tckMfDigFBBuZXt3ED+LXUWJUbZ8BYvVm/uMYZ4NdSY1VunAFj9Wb94voXuVyjWIdcBA0AAAAASUVORK5CYII=) no-repeat;
  background-position-x: 2.85rem;
  background-size: .4rem;
  background-position-y: .12rem;
}
.listheader{
  font-size: .475rem;
  padding: .2rem;
  height: .7rem;
  border-bottom: 1px solid #efeff4;
}
.account-list .left,.account-list .right{
  width: 49%;
  display: inline-block;
}
.account-list .left{
  text-align: left;
}
.account-list .right{
  text-align: right;
}
.account-list li{
    height: 1.8rem;
    line-height: 0.2rem;
    padding: .2rem;
    border-bottom: 1px solid #efeff4;
    font-size: .425rem;
}
.account-list ul{
  padding: 0;
}
.unlogin img{
  width: 100%;
}
.unlogin a{
  width: 30%;
  display: inline-block;
  margin: .2rem .1rem .1rem;
  border: 1px solid #e33133;
  color: #e33133;
  font-size: .28rem;
  text-align: center;
  border-radius: 10px;
  height: 1rem;
  line-height: 1rem;
}
</style>