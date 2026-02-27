<template>
  <div class="py-20" :class="isReversed ? 'bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]' : 'bg-white'">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image Column -->
        <div class="relative group" :class="isReversed ? 'lg:order-2' : ''">
          <div
            class="absolute -inset-4 bg-gradient-to-r rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :class="isReversed ? 'from-[#04405D]/20 to-[#07A0E1]/20' : 'from-[#07A0E1]/20 to-[#04405D]/20'">
          </div>
          <NuxtLink :to="`/projects/${project.basic.slug}`" class="block">
            <div class="relative overflow-hidden rounded-2xl">
              <img :src="project.basic.banner" :alt="project.basic.title"
                class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/40 via-transparent to-transparent"></div>
              <div v-if="project.technologies && project.technologies.length"
                class="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                <span v-for="tech in project.technologies.slice(0, 4)" :key="tech"
                  class="bg-white/90 backdrop-blur-sm text-[#04405D] px-3 py-1 rounded-full text-xs font-semibold">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 4"
                  class="bg-white/90 backdrop-blur-sm text-[#04405D] px-3 py-1 rounded-full text-xs font-semibold">
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Content Column -->
        <div :class="isReversed ? 'lg:order-1' : ''">
          <div class="space-y-5">
            <!-- Project Meta -->
            <div class="flex flex-wrap items-center gap-3">
              <span v-if="project.basic.project_type"
                class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {{ project.basic.project_type }}
              </span>
              <span v-if="project.basic.client"
                class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {{ project.basic.client }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] leading-tight">
              {{ project.basic.title }}
            </h2>

            <!-- Description -->
            <p class="text-gray-500 text-lg leading-relaxed">
              {{ project.basic.short_descriptions }}
            </p>

            <!-- Key Features -->
            <div v-if="project.basic.key_features && project.basic.key_features.length">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="(feature, index) in project.basic.key_features.slice(0, 4)" :key="index"
                  class="flex items-center gap-3 rounded-xl px-4 py-3"
                  :class="isReversed ? 'bg-white border border-gray-100' : 'bg-gray-50'">
                  <svg class="w-5 h-5 text-[#07A0E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-600 text-sm font-medium">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- View Project Button -->
            <NuxtLink :to="`/projects/${project.basic.slug}`"
              class="group inline-flex items-center gap-3 techserm-bg-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#07A0E1]/25 hover:shadow-xl hover:shadow-[#07A0E1]/30 hover:-translate-y-0.5">
              View Project
              <span
                class="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </NuxtLink>
          </div>
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
