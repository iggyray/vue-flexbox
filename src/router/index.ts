import { createRouter, createWebHistory } from 'vue-router'
import ClusterComponent from '../components/ClusterComponent.vue'
import StackComponent from '../components/StackComponent.vue'
import BlockComponent from '../components/BlockComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlockComponent
    },
    {
      path: '/cluster',
      name: 'cluster',
      component: ClusterComponent
    },
    {
      path: '/stack',
      name: 'stack',
      component: StackComponent
    }
  ]
})

export default router
