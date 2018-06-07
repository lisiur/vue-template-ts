import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
const Home = () => import ('./views/Home.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        }
      ]
    }
  ]
})
