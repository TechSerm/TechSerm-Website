<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Web Development -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1547658719-da2b51169166" 
              alt="Web Development"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#003D5A]/80 to-transparent"></div>
          </div>
          <div class="p-6">
            <div class="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
            <p class="text-gray-600 mb-4">Custom web solutions tailored to your business needs</p>
            <NuxtLink to="/services/web-development" 
              class="inline-flex items-center text-[#FF6B00] hover:text-[#FF8533] transition-colors">
              Learn More
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Development -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" 
              alt="Mobile Development"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#003D5A]/80 to-transparent"></div>
          </div>
          <div class="p-6">
            <div class="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Mobile Development</h3>
            <p class="text-gray-600 mb-4">Native and cross-platform mobile applications</p>
            <NuxtLink to="/services/mobile-app-development" 
              class="inline-flex items-center text-[#FF6B00] hover:text-[#FF8533] transition-colors">
              Learn More
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Cloud Solutions -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
              alt="Cloud Solutions"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#003D5A]/80 to-transparent"></div>
          </div>
          <div class="p-6">
            <div class="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Cloud Solutions</h3>
            <p class="text-gray-600 mb-4">Scalable and secure cloud infrastructure</p>
            <NuxtLink to="/services/cloud-solutions" 
              class="inline-flex items-center text-[#FF6B00] hover:text-[#FF8533] transition-colors">
              Learn More
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props or data needed
</script> 