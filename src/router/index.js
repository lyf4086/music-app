import Vue from 'vue'
import Router from 'vue-router'
import NewSong from '@/views/new-song/new-song'
import Rank from '@/views/rank/rank'
import Search from '@/views/search/search'
import Plist from '@/views/p-list/p-list'
import Singer from '@/views/singer/singer'
import NavBar from  '@/components/navBar'
import SearchBar from '@/components/searchBar'
import Info from '@/views/rank/info'
import singerInfo from '@/views/singer/singerinfo'
import listDetail from '@/views/p-list/listdetail'
import xiangQing from '@/views/singer/xiangqing'
import Play from '@/views/play/autoplay'

Vue.use(Router)

 let router=new Router({
  linkActiveClass: 'active',
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // console.log(78987896)
    return {x:0,y:0}

  },
  routes: [
    {
      path: '/newsong',
      name:'NewSong',
      components:{
        nav:NavBar,
        default:NewSong
      }
    },
    {
      path: '/rank',
      // name:'Rank',
      components:{
        nav:NavBar,
        default:Rank
      }
    },
    {
      path: '/plist',
      name:'Plist',
      components:{
        nav:NavBar,
        default:Plist
      }

    },
    {
      path: '/singer',
      name:'Singer',
      components:{
        nav:NavBar,
        default:Singer
      }

    },
    {
      path: '/search',
      name:'Search',
      component:Search

    },
    {
      path:'/rank/info/:id',
      name:'Info',
      component:Info
    },
    {
      path:'/singer/list/:id',
      name:'singerInfo',
      component:singerInfo
    },
    {
      path:'/singer/info/:id',
      name:'xiangQing',
      component:xiangQing
    },
    {
      path:'/plist/list/:id',
      name:'listDetail',
      component:listDetail
    },
    {
      path:'/play/:hash',
      name:'Play',
      component:Play
    },
    {
      path:'/',
      redirect:'newsong'
    }
  ]
})
export default router
