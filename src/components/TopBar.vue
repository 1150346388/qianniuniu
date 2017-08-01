<template>
<div class="header"><a class="goBack" @click="goBack()" v-show="hasBack"></a><h4>{{titleText}}</h4></div>
</template>
<script>
import router from '../router'

export default {
  name: 'topBar',
  props:{
     hasBack:{
      type: Boolean
    },
    titleText:{
      type: String
    }
},methods:{
    goBack:()=>{
      router.go(-1)
    }
  }
}
</script>
<style scope>
.goBack{
    width: .6rem;
    height: 1.21rem;
    margin-left: .1rem;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmBAMAAABaE/SdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcf///////////////////////////////////////////////9z4L/oAAAAMdFJOUwANxuMH8q9JZaIOZurESl8AAABLSURBVCjPY2CgIxALc0AXYtQ5swFdTOjMmQZMZYccMJUpYlEmMBiULT2DDMzBYnNQxA7jFMOmF5sd2Nwy0AodiIhLrHGOLW3QEgAAV45Xi395GvkAAAAASUVORK5CYII=') no-repeat 0;
    background-size: .64rem auto;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block
}
</style>