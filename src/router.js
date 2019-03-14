import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' 
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Logout from './views/Logout.vue'
import UsersShow from './views/UsersShow.vue'
import ListsIndex from './views/ListsIndex.vue'
import ListsNew from './views/ListsNew.vue'
import TasksNew from './views/TasksNew.vue'
import TasksShow from './views/TasksShow.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'users-show', component: UsersShow},
    // { path: '/users/:id', name: 'users-show', component: UsersShow },
    {path: '/lists', name: 'lists-index', component: ListsIndex},
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    {path: '/lists/new', name: 'lists-new', component: ListsNew },
    {path: '/tasks/new', name: 'tasks-new', component: TasksNew },
    {path: '/tasks', name: 'tasks-show', component: TasksShow }

  ]
})
