<template>
  <section class="py-24">
    <div class="container mx-auto px-4">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#07A0E1]/10 techserm-text-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Our Work
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold techserm-text-black mb-6 leading-tight">
          Featured <span class="techserm-text-blue">Projects</span>
        </h2>
        <p class="text-gray-500 text-lg md:text-xl leading-relaxed">
          Explore our portfolio of successful implementations
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard v-for="project in displayedProjects" :key="project.basic.slug" :project="project" />
      </div>

      <!-- Explore All Projects Button -->
      <div v-if="hasMoreProjects" class="text-center mt-14">
        <NuxtLink to="/projects"
          class="inline-flex items-center gap-3 techserm-bg-black hover:brightness-125 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
          Explore All Projects
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
  return props.projects.slice(0, 6)
})

const hasMoreProjects = computed(() => {
  return props.projects.length > 6
})
</script>
