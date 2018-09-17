import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/userManager',
      name: 'userManager',
      meta: {
        title: '用户管理'
      },
      component: () => import('@/pages/userManager/index.vue'),
      children: [{
        path: 'addUser',
        component: () => import('@/pages/userManager/addUser/addUser.vue')
      }, {
        path: 'userDetail',
        component: () => import('@/pages/userManager/userDetail/userDetail.vue')
      }]
    }
  ]
})
