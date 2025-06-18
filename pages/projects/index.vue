<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#009EE0]/90"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
          <p class="text-xl text-white opacity-90">Discover our portfolio of innovative solutions and successful
            implementations</p>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="">
      <div class="">
        <ProjectList :projects="data.projects.project_list" />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#003D5A] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Let's discuss how we can help bring your ideas to life.</p>
        <UButton to="/contact" color="primary" variant="solid" size="lg" class="bg-[#009EE0] hover:bg-[#0086c3]">
          Get in Touch
        </UButton>
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