import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Logout from './views/Logout.vue'

import UsersShow from './views/UsersShow.vue'

import ListsIndex from './views/ListsIndex.vue'
import ListsShow from './views/ListsShow.vue'
import ListsNew from './views/ListsNew.vue'

import TasksShow from './views/TasksShow.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'users-show', component: UsersShow},
    { path: '/lists', name: 'lists-index', component: ListsIndex },
    { path: '/lists/new', name: 'lists-new', component: ListsNew },
    { path: '/lists/:id', name: 'lists-show', component: ListsShow },
    { path: '/tasks/:id', name: 'tasks-show', component: TasksShow },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
})
