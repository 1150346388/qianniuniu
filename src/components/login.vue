<template>
  <div class="login">
    <TopBar :hasBack="true" :titleText="title"></TopBar>
	  <div class="loginN contentWrap">
     <div class="wrap">
      <div class="commomRow bdb myList">
       <div class="rowBox">
        <input type="tel" maxlength="11" class="" v-model="form.mobile" autofocus="" placeholder="请输入手机号码">
        <img class="fr rightimg ng-hide" src="https://www.qianshengqian.com/mobile/static/images/loginsms/cross.png" alt="" @click="clearMobile()" v-show="form.mobile"> 
      </div>
    </div>
    <div class="commomRow bdb myList">
     <div class="rowBox">
      <input type="password" class="" v-model="form.password" placeholder="请输入至少6位密码">
    </div>
   </div>
   <div class="commomRow myList">
   <p class="rowBoxRight tar agree">
    <a href="#/auth-forgetpw">忘记密码？</a>
    </p>
   </div>
   <a class="allBtn submit heavyBlue" @click="subimtlogin()">登录</a><p class="agree tac"><a href="#/register">注册新用户</a></p>
   </div>
  </div>
    </div>
</template>
<script>
 import topBar from '@/components/TopBar'
 import router from '../router'

  export default{
  	name:'login',
  	data(){
  		return {
  			title:"登录",
        form:{'mobile':'','password':''}
  		}
  	},
  	methods:{
  		clearMobile(){
         this.form.mobile = '';
  		},
      subimtlogin(){
        this.$http.post('/api3/auth/login',this.form).then((res)=>{
             if(res.body.code===200){
                let d = new Date();
                d.setTime(d.getTime() + (7*24*60*60*1000));
                let expires = "expires="+d.toUTCString();
                document.cookie = 'user_token=' + res.body.data.token + "; " + expires;
                console.log(this.$route.query)
                setTimeout(()=>{
                router.push({name:this.$route.query.name,params:{'pid':this.$route.query.id}})                  
                })

             }
        })
      }
  	},
  	components:{
  		TopBar:topBar
  	}
  }
</script>
<style scope>
.login{
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