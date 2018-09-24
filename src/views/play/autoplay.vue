<template>
  <div class="wrap">
    <div class="top">
      <h1 @click="back" >&nbsp;<</h1>
      <span>{{filename}}</span>
      <span>&nbsp; </span>
    </div>
    <div class="imgwrap">
      <img :src="imgurl.replace(/\{size}/,400)" />
    </div>

    <audio
        autoplay="autoplay"
        controls="controls"
        :src="this.$store.state.mp3url"
        ref="play"
        loop="loop"
      >
          '我是个播放器'
      </audio>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        filename:'',
        imgurl:''
      }
    },
    async created() {
      let hash=this.$store.state.hash
      // console.log(hash)
      let data=await axios(`/proxy/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}&from=mkugou`)
      // console.log(data.data.imgUrl)
      this.imgurl=data.data.imgUrl
      this.$refs.play.src=data.data.url
      console.log(data.data)
      this.filename=data.data.songName

    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
.wrap{
  margin-top:-30px;
}
.imgwrap{
  height:400px
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
   img{
    width:100%
  }
</style>
