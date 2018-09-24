<template>
  <div class="xiangqing">
    <div class="top">
      <h1 @click="back">&nbsp;<</h1>
      <span>{{title}}</span>
      <span>&nbsp; </span>
    </div>
    <div class="imgwrap">
      <img :src="imgurl.replace(/\{size}/,400)" />
    </div>
    <ul class="list" >
      <li v-for="item,index in list" :key="index" @click=" playmp3(item)">
        <span>{{item.filename}}</span>
        <span>↓&nbsp;&nbsp;</span>
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
        title:''
      }
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
    },
    async created() {
      let id=this.$route.params.id
      // console.log(id)
      let data=await axios.get(`/proxy/singer/info/${id}/?json=true`)
      // console.log(data)
      this.imgurl=data.data.info.imgurl
      // console.log(this.imgurl)
      this.title=data.data.info.singername
      this.list=data.data.songs.list

    },
  }
</script>
<style scoped>
    ul{
      margin:0;
      padding:0;
      list-style:none;
    }
    .xiangqing{
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
  .imgwrap{
    height:16rem;
    overflow:hidden;
  }
  .list{
    padding-left:15px;
  }
  .list li{
    height:5rem;
    border-bottom:2px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
</style>
