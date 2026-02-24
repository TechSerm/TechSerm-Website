<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#003D5A]/70"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="w-16 h-16 bg-[#FF6B00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <ContactUs />
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
