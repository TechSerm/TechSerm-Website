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
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: { title: 'About - TechSerm' }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services.vue'),
    meta: { title: 'Services - TechSerm' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: { title: 'Contact - TechSerm' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: { title: 'Projects - TechSerm' }
  },
  {
    path: '/projects/:project',
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
    // If there's a saved position (when navigating back), restore it
    if (savedPosition) {
      return savedPosition
    }
    // Otherwise, scroll to the top
    return { top: 0 }
  }
})

router.afterEach(setPageTitle)

export default router
