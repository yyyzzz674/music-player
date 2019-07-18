import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable */
const Recommend = resolve =>
  import('../views/Recommend.vue').then(module => resolve(module))

const SongList = resolve =>
  import('../views/SongList.vue').then(module => resolve(module))

const SongDetail = resolve =>
  import('../views/SongDetail.vue').then(module => resolve(module))

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/recommend/songlist/:id',
      name: 'songlist',
      component: SongList
    },
    {
      path: '/recommend/songlist/song/:id',
      name: 'songdetail',
      component: SongDetail
    }
  ]
})
