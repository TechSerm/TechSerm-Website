<template>
  <section class="relative py-0">
    <div class="absolute bottom-0 left-0 right-0 h-1/2 techserm-bg-black"></div>
    <div class="container mx-auto relative z-10 pb-10">
      <div class="techserm-bg-blue rounded-[2rem] px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
        <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
        <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-white/[0.07] rounded-full"></div>
        <div class="relative z-10 text-center max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Want to Build Your Own?
          </h2>
          <p class="text-white/80 text-lg leading-relaxed mb-8">
            We are here for you! Let's start your project together.
          </p>
          <NuxtLink to="/contact"
            class="group inline-flex items-center justify-center gap-3 bg-white text-[#07A0E1] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            Let's Start Your Project
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
