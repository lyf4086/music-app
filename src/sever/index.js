
import axios from 'axios'

let oneLeve=axios.create({
  responseType:'json',
  transformRequest(data){
    return data
  },
  transformResponse(data){
    let o={}
    if(data.list){
      o.data=data.list.origin='singer'
    }else if(data.banner){
      o.data=data.data
      o.banner=data.banner
      o.origin='new-song'
    }else if(data.rank){
      o.data=data.rank.list
      o.origin='rank'
    }else if(data.plist){
      o.data=data.plist.list.info
      o.origin='plist'
    }else if(data.singers){
      o.data=data.singers.list.info
      o.origin='singers-list'
    }else if(data.songs){
      o.data=data.songs.list
      o.info=data.info
      o.origin='singers-info'
    }
    return o
  }
})
export const getNewSongs=()=>{
  return oneLeve('/proxy/?json=true')
}
export const getRanList=()=>{
  return oneLeve('/proxy/rank/list?json=true')
}
export const getPlist=()=>{
  return oneLeve('/proxy/plist/index?json=true')
}
export const getSingers=()=>{
  return oneLeve('/proxy/singer/class?json=true')
}
export const getSingerList=(params)=>{
  return oneLeve(`/proxy/singer/list/${params.classid}?json=true`)
}
//根据歌手id获取歌曲
export const getSingerInfo=(params)=>{
  return oneLeve(`/proxy/singer/info/${params.singerid}?json=true`)
}
