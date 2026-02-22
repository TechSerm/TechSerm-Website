<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">Featured Projects</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful implementations
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          v-for="project in displayedProjects"
          :key="project.basic.slug"
          :project="project"
        />
      </div>
      
      <!-- Explore All Projects Button -->
      <div v-if="hasMoreProjects" class="text-center mt-12">
        <NuxtLink 
          to="/projects" 
          class="inline-block px-8 py-4 bg-[#003D5A] text-white font-semibold rounded-lg hover:bg-[#009EE0] transition-colors duration-300 text-lg"
        >
          Explore All Projects
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

// Show only first 8 projects
const displayedProjects = computed(() => {
  return props.projects.slice(0, 8)
})

// Check if there are more than 8 projects
const hasMoreProjects = computed(() => {
  return props.projects.length > 8
})
</script>