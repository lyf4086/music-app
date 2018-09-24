<template>
  <div>
    <ul>
      <li v-for="item,index in list" :key="item.id" @click="detail(item)">
        <a >
          <span><img :src="item.imgurl.replace(/\{size}/,400)" /></span>
          <span>{{item.specialname}}<br/>{{'♪♪'+item.playcount}}</span>
          <span>>&nbsp;&nbsp;</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
</style>
<script>
import {getPlist} from '@/sever'
  export default {
    data(){
      return{
        list:[]
      }
    },
    methods:{
      detail(item){
        // console.log(item.specialid)
        this.$router.push({
          name:'listDetail',
          params:{
            id:item.specialid
          }
        })
      }
    },
     async created() {
       let {data}=await getPlist()
      //  console.log(data)
       this.list=data.data
    },
  }
</script>
<style scoped>
  li{
    height:5.5rem;
    padding-left:20px;
    display:flex;
  }
  li a{
    height:100%;
    width:100%;
    border-bottom:2px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  li span:nth-child(1){
    width:5rem;
    height:5rem;
  }
  li span img{
    width:100%;
    height:100%;
  }
  li span:nth-child(2){
    width:13rem;
    padding:0 .2rem;
    display:flex;
    align-items:center;
  }

</style>

