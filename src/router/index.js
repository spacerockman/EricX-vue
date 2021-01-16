import Vue from 'vue'
import Router from 'vue-router'
// 导入刚刚写的组件
import AppIndex from '@/components/AppIndex'
import Login from '@/components/Login'
import LoginFailed from '@/components/LoginFailed'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/loginFailed',
      name: 'LoginFailed',
      component: LoginFailed
    }
  ]
})
