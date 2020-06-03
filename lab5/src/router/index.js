import Vue from "vue";
import VueRouter from "vue-router";

import Menu from "../components/Menu"
import Home from  '../components/Home'
import MenuRest from  '../components/MenuRest'
import MenuWine from  '../components/MenuWine'
import MenuBar from "../components/MenuBar"
import Login from "../components/Login";
import Contact from "../components/Contact";
import Register from "../components/Register";
import Logout from "../components/Logout";
import Dish from "../components/Dish";
import DishDetail from "../components/DishDetail";
import Checkout from "../components/Checkout";
import Tea from "../components/Tea";
import Sushi from "../components/Sushi";
import Submit from "../components/Submit";

Vue.use(VueRouter);

const routes = [
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
      requiresNav: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresNav: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
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
  {
    path: '/dish-details',
    name: 'DishDetail',
    component: DishDetail
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/tea',
    name: 'Tea',
    component: Tea
  },
  {
    path: '/sushi',
    name: 'Sushi',
    component: Sushi
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
