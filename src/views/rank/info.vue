<template>
  <div class="rankInfo">
    <div class="top">
      <h1 @click="back">&nbsp;<</h1>
      <span>{{rankname}}</span>
      <span>&nbsp; </span>
    </div>
    <div class="img-wrap">
        <img :src="imgurl.replace(/\{size}/,400)" />
    </div>
    <ul class="list">
      <li v-for="item,index in list" :key="index" @click="playmp3(item)">
        <span class="span1">{{index+1}}</span>
        <span>{{item.filename}}</span>
        <span> ↓ </span>
      </li>

    </ul>
  </div>
</template>
<script>
  // import {getSingerInfo} from '@/sever'
  // import {getSingerList} from '@/sever'
  import axios from 'axios'
  export default{
    data(){
      return{
        imgurl:'',
        list:[],
        rankname:''
      }
    },
    async created() {
      let id=this.$route.params.id
      // console.log(this.$route.params)
      // let data=await getSingerList({classid:id})
      // let data= await getSingerInfo({singerid:id})
      // console.log(data)
      // this.list=data.data.data
      // console.log(data.data)
      // console.log(this.obj.info.imgurl.replace(/\{size}/,400))


      await axios.post(`/proxy/rank/info/${id}/?json=true`).then(({data})=>{
        // console.log(data)
        this.imgurl=data.info.bannerurl
        // console.log(this.imgurl)
        this.list=data.songs.list
        this.rankname=data.info.rankname

      })




    },
    methods:{
      back(){
        this.$router.go(-1)
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
  *{margin:0;padding:0}
  ul{list-style:none}
  .rankInfo{
    margin-top:-30px
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
  .img-wrap{
    width:100%;
    height:9rem;
    overflow:hidden;
  }
  .img-wrap img{
    width:100%;

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
    width:20px;
    height:20px;
    margin-left:5px;
    text-align:center;
    border-radius:8px
  }
  .list li span:nth-child(2){
    width:80%;
    word-wrap:break-word;
  }
  .list li span:nth-child(3){
    width:20px;
    height:20px;
    margin-right:5px;
     text-align:center;
  }
  .list li:nth-child(1) .span1{
    background:red
  }
  .list li:nth-child(2) .span1{
    background:#ff8000
  }
  .list li:nth-child(3) .span1{
    background:#ffff37
  }
</style>
