<template>
  <div class="singerInfo">
    <div class="top">
      <h1 @click="back">&nbsp;<</h1>
      <span>{{classname}}</span>
      <span>&nbsp; </span>
    </div>

    <ul class="list">
      <li v-for="item,index in list" :key="index" @click="toXiangqing(item)">
        <span class="imgwrap">
          <img :src="item.imgurl.replace(/\{size}/,400)" />
        </span>
        <span>{{item.singername}}</span>
        <span> &nbsp; </span>
      </li>

    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        imgurl:'',
        list:[],
        classname:''
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      toXiangqing(item){
        let id=item.singerid
        // console.log(id)
        this.$router.push({
          name:'xiangQing',
          params:{
            id:id
          }
        })
      }
    },
    async created() {
      let id=this.$route.params.id
      // console.log(id)
      await axios(`/proxy/singer/list/${id}/?json=true`).then(({data})=>{
        // console.log(data)
        this.classname=data.classname
        this.list=data.singers.list.info
        // console.log(this.list)
      })
    }
  }
</script>
<style scoped>
  *{margin:0;padding:0}
  ul{list-style:none}
  .singerInfo{
    margin-top:10px
  }
  .top{
    width:100%;
    height:3rem;
    line-height:3rem;
    color:#fff;
    display:flex;
    z-index:1;
    position:fixed;
    top:40px;
    justify-content:space-between;
    background:linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.1) );
  }

  .list{
    padding-left:20px;
  }
  .list li{
    height:4rem;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .list li span:nth-child(1){
    width:50px;
    height:50px;
    text-align:center;
  }
  .list li span:nth-child(1) img{
    width:100%;
    height:100%;
  }
  .list li span:nth-child(2){
    width:80%;
    word-wrap:break-word;
  }


</style>

