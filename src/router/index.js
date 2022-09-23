import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'UserWelcome',
    component: () => import('@/components/UserWelcome.vue')
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: () => import('@/components/LogIn.vue')
  },
  {
    path: '/ControlCenter',
    name: 'ControlCenter',
    component: () => import('@/components/ControlCenter.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.afterEach(() => { })


export default router
