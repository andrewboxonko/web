import Vue from 'vue'
import Router from 'vue-router'
import App from "./App.vue";
import Menu from "@/components/Menu"
import Home from  '@/components/Home'
import MenuRest from  '@/components/MenuRest'
import MenuWine from  '@/components/MenuWine'
import MenuBar from "@/components/MenuBar"
import Login from "@/components/Login";
import Contact from "@/components/Contact";
import Register from "@/components/Register";
import Logout from "@/components/Logout";
import Dish from "@/components/Dish";
import store from './store'
import axios from 'axios'

import IdleVue from 'idle-vue'


Vue.config.productionTip = false
Vue.use(Router)

const eventsHub = new Vue()

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 720000
}) // sets up the idle time,i.e. time left to logout the user on no activity
Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      requiresNav: true
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/menu-rest',
      name: 'MenuRest',
      component: MenuRest
    },
    {
      path: '/menu-wine',
      name: 'MenuWine',
      component: MenuWine
    },
    {
      path: '/menu-bar',
      name: 'MenuBar',
      component: MenuBar
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresLogged: true,
        requiresNav: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresLogged: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/dish',
      name: 'Dish',
      component: Dish
    },
  ]
})

router.beforeEach((to, from, next) => {
  // if any of the routes in ./router.js has a meta named 'requiresAuth: true'
  // then check if the user is logged in before routing to this path:
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresLogged)) {
    // else if any of the routes in ./router.js has a meta named 'requiresLogged: true'
    // then check if the user is logged in; if true continue to home page else continue routing to the destination path
    // this comes to play if the user is logged in and tries to access the login/register page
    if (store.getters.loggedIn) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.use ({
  install (Vue){
    Vue.prototype.$api = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/'
    })
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
