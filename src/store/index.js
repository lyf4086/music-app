import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store=new Vuex.Store({
  state:{
    isPlay:false,
    hash:'',
    mp3url:''
  },
  mutations:{
    getMp3Data(state,payload){
      state.hash=payload.hash

      console.log(state.hash)
    }
    // getMusic(hash){
    //   Vue.$http.get(`http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}&from=mkugou`).then((data)=>{
    //     console.log(data)
    //   })
    // }

  }

})




export default store
