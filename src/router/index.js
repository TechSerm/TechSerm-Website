// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'TechSerm - Technology To Serve Mankind' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: { title: 'Projects - TechSerm' }
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: () => import('@/views/Project.vue'),
    meta: { title: '' } // Will be set dynamically
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '404 - Not Found - TechSerm' }
  }
]

// Utility to set document title from route meta
function setPageTitle(to) {
  document.title = to.meta?.title || 'TechSerm'
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.afterEach(setPageTitle)

export default router
