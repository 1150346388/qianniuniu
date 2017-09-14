<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  height: 100%;
  margin:0;
  background: #efeff4;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  height: 100%;
  max-width: 1000px;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #fafafa;
  border-top: 1px solid #ddd;
  height: 1rem;
  max-width: 1000px;
}
.nav{
  display: inline-block;
  text-align: center;
  font-size: 40px;
  flex: 1;
}
.header{
    width: 100%;
    background-color: #e33133;
    margin-right: auto;
    margin-left: auto;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .5rem;
    color: #fff;
    box-shadow: 0 -6px 14px #333;
    position: fixed;
    top: 0;
    z-index: 6;
    max-width: 1000px;
}
.header .el-icon-arrow-left{
    position: absolute;
    top: .35rem;
    color: #fff;
    left: .2rem;
}
.header h4{
  margin: 0;
}
a,a:hover{
  text-decoration: none;
  color:#666;
}
ul{
  list-style: none;
  padding: 0;
  margin:0;
}
em,i{
  font-style: normal;
}
input, textarea {
    outline: none;
    border: 0;
    resize: none;
    color: initial;
}
.tac.picc-info{
  display: inline-block;
  height: 2rem;
  font-size: .4rem;
  padding-top: 1.2rem;
}
.tac.picc-info span{
    font-size: .4rem;
    position: relative;
    bottom: .7rem;
    background: url(https://www.qianshengqian.com/mobile/static/images/safe3.png) no-repeat;
    background-position-x: .2rem;
    padding-left: .75rem;
    background-size: .45rem;
}
a, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
button, input, textarea {
    outline: none;
    border: 0;
    resize: none;
}
</style>
