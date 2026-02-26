<template>
  <div v-if="data">
    <!-- Hero Section -->
    <HeaderSection :data="data.general.header" />

    <!-- About Section -->
    <AboutSection :data="data.general.about" />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Projects Section -->
    <ProjectsSection :projects="data.projects.project_list" />

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-[#04405D] to-[#032d40] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with our technology solutions
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact"
            class="inline-block techserm-bg-blue hover:brightness-110 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </NuxtLink>
          <NuxtLink to="/services/web-development"
            class="inline-block bg-transparent border-2 border-white hover:bg-white hover:techserm-text-black text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
            Our Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import ProjectsSection from '../components/home/ProjectsSection.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
