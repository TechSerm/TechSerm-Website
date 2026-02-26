<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#04405D]/95 to-[#04405D]/80"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
            <svg class="w-4 h-4 techserm-text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
            Get in <span class="techserm-text-blue">Touch</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business with our technology solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24">
      <ContactUs />
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
