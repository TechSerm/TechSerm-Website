<script setup>
import Navbar from './components/Navbar.vue'
import HeaderSection from './components/HeaderSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhySection from './components/WhySection.vue'
import AboutSection from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
import ProjectSection from './components/ProjectSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <div class="bg-gray-50">
      <Navbar />
      <section id="home" class="container techserm-page-width min-h-[100vh] pt-10 md:pt-0 flex items-center">
        <HeaderSection />
      </section>
    </div>
    <section id="about" class="bg-white pt-10 pb-22">
      <div class="container techserm-page-width">
        <AboutSection />
      </div>
    </section>
    <div class="bg-gray-0 pt-10 pb-26">
      <div class="container techserm-page-width">
        <WhySection />
      </div>
    </div>
    <section id="services" class="bg-gray-50 pt-10 pb-26">
      <div class="container techserm-page-width">
        <ServicesSection />
      </div>
    </section>
    <section id="projects" class="bg-white pt-10 pb-26">
      <div class="container techserm-page-width">
        <ProjectSection />
      </div>
    </section>
    <Footer />
  </div>

</template>

<style scoped>
/* Global styles if needed */
</style>