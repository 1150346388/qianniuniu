<template>
  <div class="register">
    <TopBar :hasBack="true" :titleText="title"></TopBar>
    <div class="loginN contentWrap">
     <div class="wrap">
      <div class="commomRow bdb myList">
       <div class="rowBox">
        <input type="tel" maxlength="11" class="" v-model="form.mobile" autofocus="" placeholder="请输入手机号码">
      </div>
    </div>
   <a class="allBtn submit heavyBlue" @click="nextStep()">下一步</a>
   </div>
  </div>
  <div class="user-bag"><img src="https://www.qianshengqian.com/mobile/static/images/reg_bonus_img_v4.png" alt=""></div>
    </div>
</template>
<script>
 import topBar from '@/components/TopBar'

  export default{
  	name:'register',
  	data(){
  		return {
  			title:"注册",
        form:{'mobile':'','password':''}
  		}
  	},
  	methods:{
  		nextStep(){

  		}
  	},
  	components:{
  		TopBar:topBar
  	}
  }
</script>
<style scope>
.register{
  height: 100%;
  background: #fff;
  padding-top: 1.21rem;
}
.wrap{
  padding:.45rem;
}
.wrap .myList{
    border-bottom: 1px solid #efeff4;
}
.wrap .rowBox{
    padding: .3rem 0;
    height: .5rem;
}
.myList input{
    width: 60%;
    font-size: .4rem;
    float: left;
}
.myList .rightimg{
    width: .4rem;
    height: .4rem;
    float: right;
    margin-right: .4rem;
}
.rowBoxRight a{
    display: inline-block;
    color: #5893ff;
    font-size: .375rem;
    float: right;
}
.submit{
    border: 1px solid #e33133;
    background: #fff;
    color: #e33133;
    margin: .2rem 0;
    height: 0.86rem;
    line-height: .86rem;
    width: 95%;
    display: inline-block;
    font-size: .375rem;
    border-radius: .23rem;
    margin:.45rem 0;
}
.wrap p{
  margin:0;
}
.agree.tac,.agree.tac a{
  text-align: center;
  color: #5893ff;
  font-size: .375rem;
}
</style>