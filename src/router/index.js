import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入页面(按需加载)
const User = () => import('../pages/User')
const Organization = () => import('../pages/Organization')
const Role = () => import('../pages/Role')
const Equipment = () => import('../pages/Equipment')
const Gateway = () => import('../pages/Gateway')
const System = () => import('../pages/System')


export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    },
    {
      path: '/equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/gateway',
      name: 'Gateway',
      component: Gateway
    },
    {
      path: '/system',
      name: 'System',
      component: System
    }

  ]
})
