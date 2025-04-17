<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeaderSection from './components/HeaderSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhySection from './components/WhySection.vue'
import AboutSection from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
import ProjectSection from './components/ProjectSection.vue'

const fetchedData = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://admin.tserm.com/api/data')
    const data = await res.json()
    fetchedData.value = data
  } catch (error) {
    console.error('API fetch failed:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="min-h-screen">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex justify-center items-center bg-white/90 backdrop-blur-sm">
      <!-- Enhanced spinner with gradient and pulse effect -->
      <div class="relative">
        <!-- Outer ring with gradient -->
        <div class="w-16 h-16 rounded-full border-4 border-gray-200"></div>

        <!-- Animated spinner with gradient -->
        <div
          class="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-purple-500 border-r-[#009EE0] animate-spin">
        </div>

        <!-- Optional: Logo or brand mark in center -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg class="w-6 h-6 text-gray-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4 12l8 10 8-10-8-10z" />
          </svg>
        </div>

        <!-- Optional: Loading text -->
        <p class="mt-4 text-center text-sm font-medium text-[#003D5A] animate-pulse">Loading...</p>
      </div>
    </div>

    <div v-else>
      <div class="bg-gray-50">
        <Navbar :data="fetchedData" />
        <section id="home" class="container techserm-page-width min-h-[100vh] pt-10 md:pt-0 flex items-center">
          <HeaderSection :data="fetchedData" />
        </section>
      </div>
      <section id="about" class="bg-white pt-10 pb-22">
        <div class="container techserm-page-width">
          <AboutSection :data="fetchedData" />
        </div>
      </section>
      <div class="bg-gray-0 pt-10 pb-26">
        <div class="container techserm-page-width">
          <WhySection :data="fetchedData" />
        </div>
      </div>
      <section id="services" class="bg-gray-50 pt-10 pb-26">
        <div class="container techserm-page-width">
          <ServicesSection :data="fetchedData" />
        </div>
      </section>
      <section id="projects" class="bg-white pt-10 pb-26">
        <div class="container techserm-page-width">
          <ProjectSection :data="fetchedData" />
        </div>
      </section>
      <Footer :data="fetchedData" />
    </div>
  </div>
</template>

<style scoped>
/* Spinner animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
