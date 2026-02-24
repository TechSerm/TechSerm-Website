<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Background"
        class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-br from-[#003D5A]/95 via-[#003D5A]/85 to-[#002A3F]/90"></div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-[#003D5A]/30 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <div
            class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
            <svg class="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            Successfully delivered {{ data.successful_projects }} projects
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {{ data.website_name }}
            <span class="block text-[#FF6B00]">{{ data.slogan }}</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {{ data.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink to="/contact"
              class="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Contact Us
            </NuxtLink>
            <NuxtLink to="/services/web-development"
              class="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Our Services
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="hidden lg:flex items-center justify-center">
          <div class="relative">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#FF6B00]/20 to-[#003D5A]/20 rounded-2xl blur-xl">
            </div>
            <img :src="data.image" alt="Software interface illustration"
              class="relative w-full max-w-[550px] h-auto object-contain drop-shadow-2xl">
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        class="w-full h-16 md:h-20">
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="white" />
      </svg>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
