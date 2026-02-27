<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-28 md:py-36 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#04405D]/95 to-[#04405D]/80"></div>
      </div>
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-[#07A0E1]/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#07A0E1]/[0.07] rounded-full blur-3xl"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07A0E1] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#07A0E1]"></span>
            </span>
            Portfolio
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Our <span class="text-[#07A0E1]">Projects</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover our portfolio of innovative solutions and successful implementations.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects List Section -->
    <section>
      <ProjectList :projects="data.projects.project_list" />
    </section>

    <!-- CTA Section -->
    <section class="relative py-0">
      <div class="absolute bottom-0 left-0 right-0 h-1/2 techserm-bg-black"></div>
      <div class="container mx-auto relative z-10 pb-10">
        <div class="techserm-bg-blue rounded-[2rem] px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
          <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-white/[0.07] rounded-full"></div>
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Start <br class="hidden md:block">Your Project?
              </h2>
              <p class="text-white/80 text-lg leading-relaxed mb-8">
                Let's discuss how we can help bring your ideas to life with our expertise.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/contact"
                  class="group inline-flex items-center justify-center gap-3 bg-white text-[#07A0E1] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  Get In Touch
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <NuxtLink to="/services"
                  class="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                  Our Services
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="hidden lg:flex justify-end">
              <div class="relative">
                <div class="w-64 h-64 border-2 border-white/20 rounded-full flex items-center justify-center">
                  <div class="w-44 h-44 border-2 border-white/15 rounded-full flex items-center justify-center">
                    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
