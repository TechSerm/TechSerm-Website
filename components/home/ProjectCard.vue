<template>

  <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
    <div class="relative">
      <div class="overflow-hidden rounded-t-2xl">
        <img :src="project.basic.banner" :alt="project.basic.title"
          class="w-full h-56 object-cover border-b border-gray-100 transform group-hover:scale-110 transition-transform duration-500">
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
        
      </div>
      <!-- Circle Button -->
      <div class="absolute right-8 -bottom-6 z-20">
        <NuxtLink :to="`/projects/${project.basic.slug}`" class="block cursor-pointer">
          <div
            class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <i class="fas fa-arrow-right text-white text-lg"></i>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="p-8 pt-6">
      <NuxtLink :to="`/projects/${project.basic.slug}`" class="block">
        <h3 class="text-2xl font-bold text-[#003D5A] mb-3 group-hover:text-[#009EE0] transition-colors duration-300">
          {{ project.basic.title }}
        </h3>
      </NuxtLink>
      <p class="text-gray-600 mb-6 line-clamp-3">{{ project.basic.short_descriptions }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech"
          class="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-300">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>