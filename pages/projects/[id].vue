<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[600px] bg-gray-900">
      <!-- Background Image with Overlay -->
      <img src="https://admin.techserm.io/storage/config/01JVKPC6C6BE4X2JFY11TXT03J.png" 
           alt="Background" 
           class="absolute inset-0 w-full h-full object-cover opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      
      <div class="relative container h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <!-- Left Content -->
          <div class="max-w-2xl">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ project.title }}</h1>
            <p class="text-xl text-gray-200 mb-8">{{ project.description }}</p>
            <div class="flex flex-wrap gap-4">
              <span v-for="tech in project.technologies" :key="tech"
                    :class="[
                      'px-4 py-2 rounded-full text-sm backdrop-blur-sm',
                      getTechnologyDetails(tech).color.bg,
                      getTechnologyDetails(tech).color.text
                    ]">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Right Image -->
          <div class="hidden lg:block relative">
            <div class="relative w-full h-[400px] rounded-2xl border-1 border-gray-500 overflow-hidden shadow-2xl">
              <img src="https://admin.techserm.io/storage/config/01JVKPC6C6BE4X2JFY11TXT03J.png" 
                   alt="Project Preview" 
                   class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="prose prose-lg max-w-none">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
              <div class="space-y-6 text-gray-600">
                <p>{{ project.overview }}</p>

                <div v-if="project.challenges" class="bg-gray-50 p-6 rounded-xl mt-16">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">Challenges & Solutions</h3>
                  <ul class="space-y-4">
                    <li v-for="(challenge, index) in project.challenges" :key="index" class="flex items-start">
                      <span class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>{{ challenge }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Client</h4>
                  <p class="text-gray-900">{{ project.client }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Duration</h4>
                  <p class="text-gray-900">{{ project.duration }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" :key="tech"
                          :class="[
                            'px-3 py-1 rounded-full text-sm',
                            getTechnologyDetails(tech).color.bg,
                            getTechnologyDetails(tech).color.text
                          ]">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div v-if="project.results" class="pt-6 border-t">
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Results</h4>
                  <ul class="space-y-2">
                    <li v-for="(result, index) in project.results" :key="index" class="flex items-start">
                      <span class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                        <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span class="text-gray-700">{{ result }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in project.features" :key="index" 
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative h-[250px]">
              <img :src="feature.screenshot" 
                   :alt="feature.title"
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ feature.title }}</h3>
              <p class="text-gray-600 mb-6">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-gray-900 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.</p>
        <NuxtLink to="/contact" 
                 class="inline-block bg-[#FF6B00] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF8533] transition-colors duration-300">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()

// Import technologies data with proper error handling
const { data: technologiesData } = await useFetch('/data/technologies.json')

// Function to get technology details with proper error handling
const getTechnologyDetails = (techName) => {
  if (!technologiesData.value?.technologies) {
    return {
      name: techName,
      description: '',
      icon: '',
      color: {
        bg: 'bg-gray-50',
        text: 'text-gray-700'
      }
    }
  }

  const tech = technologiesData.value.technologies.find(
    tech => tech.name.toLowerCase() === techName.toLowerCase()
  )

  return tech || {
    name: techName,
    description: '',
    icon: '',
    color: {
      bg: 'bg-gray-50',
      text: 'text-gray-700'
    }
  }
}

const project = ref({
  title: 'E-commerce Platform Development',
  description: 'A modern e-commerce platform built with Vue.js and Node.js, featuring real-time inventory management and secure payment processing.',
  image: '/images/projects/ecommerce.jpg',
  client: 'Fashion Retailer Inc.',
  duration: '6 months',
  technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
  overview: 'Developed a comprehensive e-commerce platform that handles over 10,000 daily transactions. The platform features a modern, responsive design, real-time inventory management, and secure payment processing. We implemented advanced search functionality, personalized recommendations, and a robust admin dashboard.',
  features: [
    {
      title: 'Real-time Inventory Management',
      description: 'Advanced inventory tracking system with real-time updates across multiple warehouses and retail locations.',
      screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      technologies: ['WebSocket', 'Redis', 'Node.js']
    },
    {
      title: 'Secure Payment Processing',
      description: 'Integrated multiple payment gateways with PCI compliance and fraud detection systems.',
      screenshot: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
      technologies: ['Stripe', 'PayPal', 'SSL']
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin interface for managing products, orders, customers, and analytics.',
      screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      technologies: ['Vue.js', 'Chart.js', 'Material UI']
    }
  ],
  challenges: [
    'Implementing real-time inventory synchronization across multiple warehouses',
    'Ensuring secure payment processing and PCI compliance',
    'Optimizing database queries for high-traffic periods',
    'Creating a scalable architecture to handle peak shopping seasons'
  ],
  results: [
    '40% increase in online sales',
    '99.9% uptime during peak shopping seasons',
    '50% reduction in page load time',
    'Improved customer satisfaction scores'
  ]
})
</script>
  