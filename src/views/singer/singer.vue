<template>
  <div class="wrap">
    <ul>
      <li v-for="item,index in list1" :key="index" @click="detail(item)">{{item.classname}}</li>
    </ul>
    <ul>
      <li v-for="item,index in list2" :key="index" @click="detail(item)">{{item.classname}}</li>
    </ul>
    <ul>
      <li v-for="item,index in list3" :key="index" @click="detail(item)">{{item.classname}}</li>
    </ul>
    <ul>
      <li v-for="item,index in list4" :key="index" @click="detail(item)">{{item.classname}}</li>
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
        list1:[],
        list2:[],
        list3:[],
        list4:[]
      }
    },
    methods:{
      detail(item){
        // console.log(item.classid)
        this.$router.push({
          name:'singerInfo',
          params:{
            id:item.classid
          }
        })
      }
    },
     async created() {
      await axios.get('/proxy/singer/class?json=true').then(({data})=>{
        // console.log(data.list)
        this.list1=data.list.slice(0,1)
        this.list2=data.list.slice(1,4)
        this.list3=data.list.slice(4,7)
        this.list4=data.list.slice(7)
        // console.log(this.list1)
      })

    },
  }
</script>
<style scoped>

  .wrap{
    padding:1rem;

  }
  ul{
    list-style:none;
    margin-bottom:1rem;
    border:2px solid #ccc
  }
  li{
    height:3rem;
    line-height:3rem;
    border-bottom:2px solid #ccc;
    text-indent:.5rem;
  }
  li:last-child{
    border:none
  }
</style>
