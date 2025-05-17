<template>
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="container">
      <!-- Project content -->
      <section v-if="project" class="bg-white rounded-xl shadow-md overflow-hidden">
        <!-- Project header with image -->
        <div class="relative h-64 bg-gray-200 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75"></div>
          <div class="relative h-full flex items-center justify-center">
            <h1 class="text-4xl font-bold text-white">{{ project.name }}</h1>
          </div>
        </div>

        <!-- Project details -->
        <div class="p-8">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                {{ project.category || 'Web Development' }}
              </span>
              <div class="mt-2 flex items-center text-gray-500">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span class="text-sm">{{ project.date || '2023' }}</span>
              </div>
            </div>
            <div class="mt-4 md:mt-0">
              <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Visit Project
                <svg class="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="prose max-w-none">
            <p class="text-gray-700 text-lg mb-6">{{ project.description }}</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-medium text-gray-900 mb-2">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies || ['Vue.js', 'Tailwind CSS', 'Node.js']" :key="tech" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-medium text-gray-900 mb-2">Project Features</h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li v-for="feature in project.features || ['Responsive Design', 'SEO Optimized', 'Fast Performance']" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="mb-8">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Project Gallery</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="i in 3" :key="i" class="bg-gray-200 h-48 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                  Project Screenshot {{ i }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Empty state -->
      <section v-else class="text-center py-20">
        <p class="text-gray-600 text-lg">No project found</p>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const project = ref(null)

// Enhanced dummy data
const allProjects = [
  { 
    slug: 'project-1', 
    name: 'E-Commerce Platform', 
    description: 'A fully responsive e-commerce platform built with modern web technologies. The platform features product listings, shopping cart functionality, user authentication, and payment processing integration.',
    category: 'Web Application',
    date: 'June 2023',
    technologies: ['Vue.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Product catalog with filters',
      'User authentication system',
      'Shopping cart functionality',
      'Payment gateway integration',
      'Admin dashboard'
    ]
  },
  { 
    slug: 'project-2', 
    name: 'Portfolio Website', 
    description: 'A sleek and modern portfolio website designed to showcase creative work. The site features smooth animations, dark mode support, and a contact form with email integration.',
    category: 'Website',
    date: 'March 2023',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Dark/light mode toggle',
      'Smooth page transitions',
      'Responsive design',
      'Contact form with validation',
      'Project showcase gallery'
    ]
  }
]

function fetchProject(slug) {
  return allProjects.find(p => p.slug === slug)
}

function updateTitle() {
  if (project.value && project.value.name) {
    document.title = `${project.value.name} - TechSerm`
  } else {
    document.title = 'Project - TechSerm'
  }
}

onMounted(() => {
  project.value = fetchProject(slug)
  updateTitle()
})

watch(project, updateTitle)
</script>