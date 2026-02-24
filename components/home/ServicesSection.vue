<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#003D5A]/10 text-[#003D5A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          What We Do
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div class="relative h-52 overflow-hidden">
            <img :src="service.image" :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-[#003D5A]/80 to-transparent"></div>
            <div class="absolute bottom-4 left-6">
              <div class="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath" />
                </svg>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#003D5A] mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-5 leading-relaxed">{{ service.description }}</p>
            <NuxtLink :to="service.link"
              class="inline-flex items-center gap-2 text-[#FF6B00] hover:text-[#FF8533] font-semibold transition-colors duration-300">
              Learn More
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
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
const services = [
  {
    title: 'Web Development',
    description: 'Custom web solutions built with modern frameworks to deliver fast, responsive, and scalable applications.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    link: '/services/web-development'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    link: '/services/mobile-app-development'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your applications with maximum reliability.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    link: '/services/cloud-solutions'
  }
]
</script>
