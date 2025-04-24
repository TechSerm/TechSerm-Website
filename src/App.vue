<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeaderSection from './components/HeaderSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhySection from './components/WhySection.vue'
import AboutSection from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
import ProjectSection from './components/ProjectSection.vue'
import Loader from './components/Loader.vue'

const fetchedData = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://admin.techserm.io/api/data')
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
    <Loader v-if="isLoading" />
    <div v-else>
      <div class="bg-gray-0">
        <Navbar :data="fetchedData" />
        <section id="home" class="container techserm-page-width min-h-[100vh] pt-10 md:pt-0 flex items-center">
          <HeaderSection :data="fetchedData" />
        </section>
      </div>
      <div class="text-center text-5xl mb-10">
          Website is under construction
      </div>
      <!-- <section id="about" class="bg-gray-0 rounded-t-[30%] pt-10 pb-22">

        <div class="container techserm-page-width">
          <AboutSection :data="fetchedData" />
        </div>
      </section>
      <div class="bg-gray-0 pt-10 pb-26">
        <div class="container techserm-page-width">
          <WhySection :data="fetchedData" />
        </div>
      </div>
      <section id="services" class="bg-gray-0 pt-10 pb-26">
        <div class="container techserm-page-width">
          <ServicesSection :data="fetchedData" />
        </div>
      </section>
      <section id="projects" class="bg-white pt-10 pb-26">
        <div class="container techserm-page-width">
          <ProjectSection :data="fetchedData" />
        </div>
      </section>
      <Footer :data="fetchedData" /> -->
    </div>
  </div>
</template>

