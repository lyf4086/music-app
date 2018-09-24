<template>
 <div>
    <div class="tab" >
      <router-link
        v-for="item,index in list"
        :to="item.tar"
        tag="span"
        :key="index"
      >{{item.title}}</router-link>
    </div>
    <router-view></router-view>
 </div>

</template>
<style>
</style>
<script>


  export default {

    data(){
      return{
        list:[
          {title:'新歌',tar:'/newsong'},
          {title:'排行',tar:'/rank'},
          {title:'歌单',tar:'/plist'},
          {title:'歌手',tar:'/singer'}
        ],
        num:0
      }
    },
    methods: {


    }



  }
</script>
<style scope>
  .tab{
    width:100%;
    height:2rem;
    display:flex;
    line-height:2rem;
    position:fixed;
    top:39px;
    z-index:1;
    }
  .tab span{
    width:25%;
    background:#999;
    text-align:center
  }
  .tab .active{
    color:red;
    background:#fff;
  }

</style>
