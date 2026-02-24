<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#003D5A]/70"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <div class="w-16 h-16 bg-[#FF6B00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our portfolio of innovative solutions and successful implementations that have helped businesses grow
          </p>
        </div>
      </div>
    </section>

    <!-- Projects List Section -->
    <section>
      <ProjectList :projects="data.projects.project_list" />
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-[#003D5A] to-[#002A3F] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help bring your ideas to life with our expertise
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact"
            class="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </NuxtLink>
          <NuxtLink to="/services/web-development"
            class="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#003D5A] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
            Our Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProjectList from '~/components/projects/ProjectList.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
