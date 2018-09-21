import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/movie/:movieId',
      name: 'movie',
      component: Movie
    }
  ]
})
