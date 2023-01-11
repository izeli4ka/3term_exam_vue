import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./pages/MainPage'),
  },
  {
    path: '/target',
    component: () => import('./pages/TargetPage'),
  },
  // {
  //   path: '/car',
  //   component: () => import('./pages/cars/CarPage'),
  // },
  {
    path: '/car/:id',
    component: () => import('./pages/CarPage'),
    name: 'CarsId',
    props: true,
  },
  {
    path: '/zero',
    component: () => import('./pages/ZeroPage'),
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})