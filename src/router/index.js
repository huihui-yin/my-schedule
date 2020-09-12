import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import schedule from '@/components/schedule'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
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
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const username = localStorage.getItem('username')
  if (username !== '小明') {
    console.log('username', username)
    return next('/login')
  }
  next()
})
export default router
