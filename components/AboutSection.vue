<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Who We Are
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">About Techserm</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Delivering custom software solutions that empower businesses to innovate and grow
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Description + Stats -->
        <div class="space-y-8">
          <p class="text-gray-600 text-lg leading-relaxed">
            Techserm delivers custom software, web, and mobile application development services to both government and
            commercial clients. Our team of full-stack developers specializes in building scalable digital solutions
            tailored to unique business needs.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            From intuitive web platforms and robust mobile apps to complex enterprise systems, we empower our
            clients—ranging from startups to global enterprises—to build smarter, more connected solutions for a better
            tomorrow.
          </p>

          <!-- Stats Row -->
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-[#003D5A] rounded-2xl p-6 text-center">
              <div class="text-4xl font-bold text-white mb-1">15+</div>
              <div class="text-white/70 font-medium">Team Members</div>
            </div>
            <div class="bg-[#FF6B00] rounded-2xl p-6 text-center">
              <div class="text-4xl font-bold text-white mb-1">50+</div>
              <div class="text-white/70 font-medium">Projects Delivered</div>
            </div>
          </div>

          <NuxtLink to="/about"
            class="inline-flex items-center gap-2 text-[#FF6B00] hover:text-[#FF8533] font-semibold transition-colors duration-300">
            Learn More About Us
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Right: Feature Cards -->
        <AboutSectionRight />
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutSectionRight from './AboutSectionRight.vue'

defineProps({
  data: Object
})
</script>
