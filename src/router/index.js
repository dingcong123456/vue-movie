
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Movie  from '../components/Movie'
import moreMovie  from '../components/moreMovie'
import Search  from '../components/Search'


export default new Router({
    linkActiveClass: 'active',
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
    routes: [
    { path: '/movie', component: Movie },
        { path: '/search', component: Search },
        { path: '/movie/more/:type', component: moreMovie },
    { path: '*', redirect: '/movie' }

    ]
})