import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' 
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Logout from './views/Logout.vue'
import UsersShow from './views/UsersShow.vue'
import ListsIndex from './views/ListsIndex.vue'
import ListNew from './views/ListsNew.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: UsersShow},
    { path: '/home', name: 'users-show', component: UsersShow },
    {path: '/lists', name: 'lists-index', component: ListsIndex},
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    // {path: '/list/new', name: 'lists-new', component: ListsNew }
  ]
})
