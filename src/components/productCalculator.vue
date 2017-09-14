<template>
  <div class="calculator">
    <TopBar :hasBack="true" :titleText="title"></TopBar>
	<div class="product-calculator-item">
	  <ul>
	   <li class="clearfix">
	   <label class="fl">投资金额</label>
	    <div class="fr">
	    <i>￥</i>
	    <input type="number" v-model="amount" class="ng-pristine ng-valid ng-touched">
	    <i @click="clearval()">
	    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAABDJJREFUWAnNmLtrFFEUxufeXc2CaIoVAlZGiCBB2WzCrmkkaQQTRUEsxE4bCwsFBf8EwVeRxlbBQixN1pAmYhN3zYYgiKBoKtOEiBZCgjszfp8zd2Z29s5rY0IGlvs695zfnnvuUxhdfIuLi3tardyYYViTtm0cEcI4ZBg2fqKIdB3pKupXUf/VMGQtnzffjIyM/MlqSmTp0GgsnbIs6zr6TMB4b9q+gPwF2ZqU8kmlUn6bul8awUZjedA0zXvwytk08vEyYjqXy92tVEof4+Xg/zgB27bz9XrzIcRuIC/jZLO0CSEsyE9Vq+XbyLei+kbC1eufirb9+yWGbzyq81brMdzzQuy7VK0eQ5x2flq4en35qG23XjPYO7v83xoAfhMif6ZaLX0Oa+6Acz3W2AkwBeMA7quEPdgWR4wxdyi33WMKjCkd4di188H6NjgG/3bGWNBwOE+7zuTzW7xh5XJhWeaHpFnJNQuKUq9xylSafpzFUuZOqGXG8xzXsWQw8aVQyA9CyQNlNF0qZnt6cocBOBcnT/vOeupI/YPjyp+0wALoy969YqxUKn0/eXL4TnpAMXvw4IELQ0NDP/v6iueTAMnh8GDjI6O7JUX+KQ5JoZAbL5fLq0ooHaADNjAwsMl+/f39Gy7gstKjSxWP5CYOgQmdkKpjjG1smDdVWaXxgO1gqs/a2o+L0HdclSPSCXJJni7SBDji4fa7d837YWV6QD1Yo9G8Ypr2U+jIhfUEy+QhF4bVmgw2xOXTAW4NzLdvTUpQHvErknPxgPIag1/FmNKW1mNKnim5BIZqEQaHgw1p8pytHNIk2W7AqBP6mxhWnmCzf1EeDGrqFszRYR8CHI/W3X0O4NJVXW/MtnKa4Nf1depEkZ7TnqWiOwVbxGyxuP95sEblcWdYwtA8VuXsqb1Oz3kLazYF+lkZ1KFfZoIScXmxytnaBZwejEMZNtctILkktqZvYYXxZT0Yg7/VEu/TL9QJVnCtxLDKmXixYGs0GIMfEwQjkWUnCeoO52VN8sLLjT3c1FmOB4O8tyVtFZA85JLuTbzWCePXOKcSeTnLyp8A2PS1a3M1cmFYMbC4iWtF3EoEZ+/mpvliZWWloOQYY5ZlPEPZ85hqU6kOcGGh+Qj1sTuS4vGO6ej0igc9pViXwoNzPI/x2JNlgVVbHcFg45ZOt18npkdHh8+x7MFluEMsw5M8j0V6zDfk57hXJnkMMvo7hHupmPLV6XMAK6ElExg1JYG51qbU5YZlz3MsQAHfRuYAMM7yTn4Imflqdfg0vOe9nfybEAqCDXy7gGDGhVlp6C6lPceuD0ZNbXCs4JMA3y52CtAB41tJ52NOB5wDWPqMf1JBx3mWt+ujftrRPeLQZlvMhSHcGHwIsd31PhcE3ZUvm0FA5nkT33VvwmFIXnhTvqZj1suZbl/T/wLeLT7L8JREGQAAAABJRU5ErkJggg==" alt=""> 
	    </i>
	   </div>
	   </li>
	   <li class="clearfix">
	   <label class="fl">持有时间</label><div class="fr"><i></i><input type="number" v-model="days" class="number"><i>天</i></div></li><li class="clearfix"><span class="fl">据历史收益可得</span> <span class="fr product-calculator-result"><i>¥</i>{{countTotal()}}</span></li></ul></div>
    </div>
</template>
<script>
 import topBar from '@/components/TopBar'

  export default{
  	name:'productCalculator',
  	data(){
  		return {
  			title:"收益计算器",
        rateRange:{'10':15,'6':6.5,'7':7,'17':[
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            11
          ],'8':8,'9':9,'18':10,'11':11,'12':12},
  			amount:1000,
  			days:JSON.parse(localStorage.calculatorData).days
  		}
  	},
    mounted(){
      scrollTo(0,0)
    },
  	methods:{
  		_countNum(amount,days){
         return JSON.parse(localStorage.calculatorData).interestFormula
  		},
  		clearval(){
  			this.amount = '';
  		},
      countTotal(){
        let total = 0;
        if(JSON.parse(localStorage.calculatorData).type!=='17'){
             console.log(this.rateRange[JSON.parse(localStorage.calculatorData).type]);
             total = this.amount*this.days*this.rateRange[JSON.parse(localStorage.calculatorData).type]/36000
        }else{
            if(this.days>0&&this.days<=30)
            total = this.amount*this.days*6/3600
            else if(this.days>30&&this.days<=60)
            {total = this.amount/20+this.amount*6.5*(this.days-30)/3600}
            else if(this.days>60&&this.days<=90)
            {total = this.amount*(6+6.5)*30/3600+this.amount*7*(this.days-60)/3600}
            else if(this.days>90&&this.days<=120)
            {total = this.amount*(6+6.5+7)*30/3600+this.amount*7.5*(this.days-90)/3600}
            else if(this.days>120&&this.days<=150)
            {total = this.amount*(6+6.5+7+7.5)*30/3600+this.amount*8*(this.days-120)/3600}
            else if(this.days>150&&this.days<=180)
            {total = this.amount*(6+6.5+7+7.5+8)*30/3600+this.amount*8.5*(this.days-150)/3600}
            else if(this.days>180&&this.days<=210)
            {total = this.amount*(6+6.5+7+7.5+8+8.5)*30/3600+this.amount*9*(this.days-180)/3600}
            else if(this.days>210&&this.days<=240)
            {total = this.amount*(6+6.5+7+7.5+8+8.5+9)*30/3600+this.amount*9.5*(this.days-210)/3600}
            else if(this.days>240&&this.days<=270)
            {total = this.amount*(6+6.5+7+7.5+8+8.5+9+9.5)*30/3600+this.amount*10*(this.days-240)/3600}
            else if(this.days>270&&this.days<=300)
            {total = this.amount*(6+6.5+7+7.5+8+8.5+9+9.5+10)*30/3600+this.amount*10.5*(this.days-270)/3600}
            else if(this.days>300&&this.days<=330)
            {total = this.amount*(6+6.5+7+7.5+8+8.5+9+9.5+10+10.5)*30/3600+this.amount*11*(this.days-300)/3600}
            else{
            total = this.amount*(6+6.5+7+7.5+8+8.5+9+9.5+10+10.5+11)*30/3600+this.amount*11*(this.days-330)/3600}
          }
        return total.toFixed(2)
      }
  	},
  	components:{
  		TopBar:topBar
  	}
  }
</script>
<style scope>
.calculator{
	height: 100%;
	background: #fff;
}
.product-calculator-item{
	margin-top: 1.12rem;
	padding: 20px;
}
.product-calculator-item ul{
	margin: 0;
	padding: 0;
}
.fl{
	float: left;
}
.fr{
	float: right;
	display: inline-block;
}
.product-calculator-item li label{
    width: 24%;
    color: #4c4c4c;
    display: inline-block;
}
.product-calculator-item li input{
  width: 72%;
  font-size: .475rem;
}
.product-calculator-item li div{
    width: 72%;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #e33133;
    border-radius: .14rem;
    display: inline-block;
}
.clearfix{
	font-size: .475rem;
    margin-top: .62rem;
    height: .84rem;
    line-height: .84rem;
}
.product-calculator-result{
    color: #e33133;
    font-size: .55rem;
}
.product-calculator-result i{
	font-size: .35rem;
}
</style>