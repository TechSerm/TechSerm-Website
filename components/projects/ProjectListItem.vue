<template>
  <div class="py-16 md:py-24" :class="isReversed ? 'bg-gray-50' : 'bg-white'">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        :class="{ 'lg:[direction:rtl]': isReversed }">
        <!-- Image Column -->
        <div :class="{ 'lg:[direction:ltr]': isReversed }">
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#FF6B00]/20 to-[#003D5A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <img :src="project.basic.banner" :alt="project.basic.title"
              class="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 object-cover">
          </div>
        </div>

        <!-- Content Column -->
        <div :class="{ 'lg:[direction:ltr]': isReversed }">
          <!-- Project Meta -->
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span
              class="inline-flex items-center gap-2 bg-[#003D5A]/10 text-[#003D5A] px-4 py-1.5 rounded-full text-sm font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Web Project
            </span>
            <span v-if="project.basic.client"
              class="inline-flex items-center gap-2 bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1.5 rounded-full text-sm font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {{ project.basic.client }}
            </span>
          </div>

          <!-- Title -->
          <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">
            {{ project.basic.title }}
          </h2>

          <!-- Description -->
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            {{ project.basic.short_descriptions }}
          </p>

          <!-- Key Features -->
          <div v-if="project.basic.key_features && project.basic.key_features.length" class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
            <div class="grid sm:grid-cols-2 gap-2">
              <div v-for="(feature, index) in project.basic.key_features" :key="index"
                class="flex items-center gap-2">
                <div class="w-5 h-5 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-600 text-sm">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                class="bg-[#003D5A]/5 text-[#003D5A] border border-[#003D5A]/10 px-3 py-1.5 rounded-lg text-sm font-medium">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- View Project Button -->
          <NuxtLink :to="`/projects/${project.basic.slug}`"
            class="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            View Project Details
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  isReversed: {
    type: Boolean,
    default: false
  }
})
</script>
