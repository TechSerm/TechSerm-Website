<template>
  <NuxtLink :to="`/projects/${project.basic.slug}`"
    class="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

    <!-- Image -->
    <div class="relative h-56 overflow-hidden">
      <img :src="project.basic.banner" :alt="project.basic.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
      <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/70 via-transparent to-transparent"></div>

      <!-- Tech tags on image -->
      <div v-if="project.technologies?.length" class="absolute bottom-4 left-5 flex flex-wrap gap-2">
        <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
          class="bg-white/90 backdrop-blur-sm techserm-text-black px-3 py-1 rounded-full text-xs font-semibold">
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold techserm-text-black mb-2 group-hover:techserm-text-blue transition-colors duration-300">
        {{ project.basic.title }}
      </h3>
      <p class="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
        {{ project.basic.short_descriptions }}
      </p>

      <!-- Arrow -->
      <div class="flex items-center gap-2 techserm-text-blue font-semibold text-sm">
        View Project
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
