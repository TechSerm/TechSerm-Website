<template>
  <div class="flex flex-col lg:flex-row items-center gap-12"
       :class="{ 'lg:flex-row-reverse': isReversed }">
    <!-- Image Section -->
    <div class="lg:w-1/2">
      <div class="relative rounded-xl overflow-hidden shadow-xl">
        <img :src="service.image" :alt="service.title"
          class="w-full h-[400px] object-cover">
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="lg:w-1/2 space-y-6">
      <div class="w-16 h-16 bg-gradient-to-br from-[#003D5A] to-[#009EE0] rounded-xl flex items-center justify-center">
        <i :class="`fas ${service.icon} text-2xl text-white`"></i>
      </div>
      <h3 class="text-2xl font-bold text-[#003D5A]">{{ service.title }}</h3>
      <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
      <NuxtLink 
        to="/services" 
        class="inline-block px-6 py-3 bg-[#003D5A] text-white font-semibold rounded-lg hover:bg-[#009EE0] transition-colors duration-300"
      >
        Learn More
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  },
  isReversed: {
    type: Boolean,
    default: false
  }
})
</script> 