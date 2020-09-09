import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import schedule from '@/components/schedule'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'schedule',
      component: schedule
    }
  ]
})
/* 路由拦截 */
// router
export default router
