<template>
  <div class="main">
    <div class="top">
      <h1 @click="back">&nbsp;<</h1>
      <span>{{'我是搜索框 嘿嘿'}}</span>
      <span>&nbsp; </span>
    </div>
    <div class="putwrap">
        <input v-model="value" placeholder="请输入关键字"/>
        <button @click="searchList">搜索</button>
    </div>
    <ul class="list">
      <li v-for="item,index in list"
         @click="playmp3(item)"
      >{{item.filename}}</li>
    </ul>

  </div>
</template>
<style>
</style>
<script>
import axios from 'axios'
  export default {
    data(){
      return {
        value:'',
        list:[]

      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      searchList(){
        let val=this.value.trim()
        if(!val)return
        this.searchData(val)

      },
     async searchData(value){

          let data=await axios(`/search/api/v3/search/song?format=jsonp&keyword=${value}&page=1&pagesize=20&showtype=1&callback=?JSONP863865701`)
          let json=data.data.replace(/\({/,"{").replace(/\}\)/,"}")
          let o=JSON.parse(json)
          console.log(o.data.info)

          this.list=o.data.info

      },
      playmp3(item){
        let hash=item.hash
        let mp3url=item.url
        console.log(mp3url)
        this.$store.commit('getMp3Data',{
          mp3url:mp3url,
          hash:hash
        })
        this.$router.push({
          name:'Play',
          params:{
            hash:hash
          }
        })
      }

    }


  }
</script>
<style scoped>
  .main{
    padding-top:50px;
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
    background:#999;
  }
  .mint-search{
    height:auto;
  }
  .putwrap{
    width:100%;
    position:fixed;
    top:88px;
    display:flex;
  }
  input{
    height:2rem;
    width:80%;
    font-size:1.2rem;
    text-indent:1rem
  }
  button{
    width:20%;
    height:2.2rem
  }
  .list li{
    padding:1rem 0;
    display:flex;
    align-items:center;
    padding-left:1rem;
    border-bottom:2px solid #ccc;
  }
</style>
