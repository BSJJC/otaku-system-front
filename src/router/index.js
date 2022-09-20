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
    path: '/userMain',
    name: 'UserMain',
    component: () => import('@/components/UserMain.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.afterEach(() => { })


export default router
