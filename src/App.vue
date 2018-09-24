<template>
  <div id="app" >
    <mt-header title="锋行天下">
      <mt-button  slot="left">
        <router-link to="/" tag="h3">
          就是歌太多
        </router-link>

      </mt-button>
      <mt-button icon="more" slot="right">
        <router-link to="/search">搜歌</router-link>
      </mt-button>
    </mt-header>

    <router-view name="nav" ></router-view>
    <router-view></router-view>
    <div class="player" v-show="false">
      <audio
        autoplay="autoplay"
        controls="{controls:isShow}"
        :src="this.$store.state.mp3url"
        ref="play"
      >
          '我是个播放器'
      </audio>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   name: 'App',
   data(){
     return {

     }
   },
   methods:{

   },
   mounted() {


   }
    // async created() {
    //   let hash=this.$store.state.hash
    //   // console.log(hash)
    //   let data=await axios(`/proxy/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}&from=mkugou`)
    //   // console.log(data.data.imgUrl)
    //   this.imgurl=data.data.imgUrl
    //   this.$refs.play.src=data.data.url
    //   // console.log(data.data)
    //   this.filename=data.data.songName

    // }

}
</script>

<style>
*{margin:0;padding:0;}
.mint-header{
  width:100%;
  position:fixed;
  top:0;
  z-index:1
}
#app{
  padding-top:70px
}
.player{
  width:100%;
  height:5rem;
  opacity:0.6;
  background:#000;
  position:fixed;
  bottom:0;
}

</style>
