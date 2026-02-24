<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Our Work
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">Featured Projects</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful implementations
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard v-for="project in displayedProjects" :key="project.basic.slug" :project="project" />
      </div>

      <!-- Explore All Projects Button -->
      <div v-if="hasMoreProjects" class="text-center mt-12">
        <NuxtLink to="/projects"
          class="inline-flex items-center gap-2 bg-[#003D5A] hover:bg-[#002A3F] text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
          Explore All Projects
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { computed } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const displayedProjects = computed(() => {
  return props.projects.slice(0, 8)
})

const hasMoreProjects = computed(() => {
  return props.projects.length > 8
})
</script>
