<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div v-for="(feature, index) in features" :key="index"
      class="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-300 hover:shadow-xl">
      <!-- Accent top bar -->
      <div class="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300"
        :class="index % 2 === 0 ? 'techserm-bg-blue' : 'techserm-bg-black'"></div>

      <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" :class="feature.iconBg">
        <svg class="w-6 h-6" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath" />
        </svg>
      </div>
      <h3 class="text-lg font-bold techserm-text-black mb-2">{{ feature.title }}</h3>
      <p class="text-sm text-gray-400 leading-relaxed">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'Scalable Code',
    description: 'Clean, maintainable architecture built to grow with your business demands.',
    iconBg: 'bg-[#07A0E1]/10',
    iconColor: 'techserm-text-blue'
  },
  {
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Agile Process',
    description: 'Iterative development with transparent communication at every sprint.',
    iconBg: 'bg-[#04405D]/10',
    iconColor: 'techserm-text-black'
  },
  {
    iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'Full-Stack Team',
    description: 'End-to-end expertise from frontend interfaces to backend infrastructure.',
    iconBg: 'bg-[#04405D]/10',
    iconColor: 'techserm-text-black'
  },
  {
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Flexible Delivery',
    description: 'Adaptive engagement models tailored to your timeline and budget.',
    iconBg: 'bg-[#07A0E1]/10',
    iconColor: 'techserm-text-blue'
  }
]
</script>
