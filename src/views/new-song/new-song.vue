<template>
  <div >
    <div class="tab-banner">
      <mt-swipe >
        <mt-swipe-item
          v-for="item,index in banner"
          :key="index"
        ><img :src="item" /></mt-swipe-item>

      </mt-swipe>
    </div>
    <ul class="m-list">
      <li v-for="item,index in list" :key="item.audio_id" @click="playmp3(item)">
          <span>{{item.filename}}</span>
          <span> ↓<br/>一</span>
      </li>
    </ul>
    <div class="play"></div>
  </div>
</template>

<script>
  import {getNewSongs} from '../../sever'

  export default {
    data(){
      return{
        banner:[],
        list:[]
      }
    },
    methods:{
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
     async created(){
      let data=await getNewSongs()
      this.banner=data.data.banner.map(e=>e.imgurl)
      this.list=data.data.data
     //http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=9E8CE7AC9F2E4514BFB65E9C0BAE8782&from=mkugou
      // console.log(getSingerInfo)

    }

  }
</script>
<style scoped>

 .tab-banner{
    height:160px
  }
  .tab-banner img{
    width:100%;
    height:100%;
  }
  .m-list li {
    height:3.7rem;
    border-bottom:1px solid #ccc;
    padding-left:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .m-list li span:nth-child(2){
    padding:0 15px;
    color:red;
    line-height:10px
  }

</style>
