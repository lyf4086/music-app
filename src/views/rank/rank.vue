<template>
  <div>
    <ul>
      <li v-for="item,index in list" :key="item.id">
        <a @click="toInfo(item)">
          <span><img :src="item.imgurl.replace(/\{size}/,400)" /></span>
          <span>{{item.rankname}}</span>
          <span>>&nbsp;&nbsp;</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>



  import {getRanList} from '../../sever'
  export default {
    data(){
      return{
        list:[]
      }
    },
    methods:{
      toInfo(item){
        // console.log(item.rankid)
        // this.$router.push(`/rank/info/${item.rankid}`)
        this.$router.push({
          name:'Info',
          params:{
            id:item.rankid
          }
        })



      }
    },
   async created() {
      let data=await getRanList()
      // console.log(data.data.data)
      this.list=data.data.data
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
    line-height:5rem;
  }

</style>
