<template>
<div class="bankCard-item">
  <TopBar :hasBack="true" :titleText="title"></TopBar>
  <div class="cards-list">
    <div v-for="card in cards">
      <router-link :to="{ name: 'card-detail', params: { cid: card.id }}" :style="{'background':'url('+card.bank_background+') no-repeat'}">
        <img :src="card.bank_img">
        <div class="center">
          <p>{{card.bank_name}}</p>
          <p>{{card.card_type}}</p>
          <p>{{card.card_withdraw_title}}</p>
        </div>
        <div>{{card.suffix}}</div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import topBar from '@/components/TopBar'
import router from '../router'

export default {
  name: 'bankCard',
  props:{
  },
  data () {
    return {
      cards: [],
      title: '银行卡'
    }
  },
  created(){
   this.$http.get('/api3/accounts/bankcards',{params:{'bankcard_type':0}}).then((res) => {
     this.cards = res.body.data.cards;
     console.log(this.cards);
   });
  },
  components:{
    TopBar:topBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

</style>