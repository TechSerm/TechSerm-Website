<template>
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">

        <!-- Heading -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold techserm-text-black mb-8 leading-tight">
          Building Digital Solutions
          <span class="techserm-text-blue">That Matter</span>
        </h2>

        <!-- Description -->
        <p class="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
          Techserm delivers custom software, web, and mobile application development services to
          government and commercial clients. Our full-stack developers specialize in building
          scalable digital solutions tailored to unique business needs, helping organizations build
          a better environment for tomorrow.
        </p>

        <!-- Feature Pills -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <div v-for="(feature, index) in features" :key="index"
            class="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-base font-semibold"
            :class="feature.pillClass">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.iconPath" />
            </svg>
            {{ feature.title }}
          </div>
        </div>

        <!-- Stats -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 sm:divide-x divide-gray-200">
          <div v-for="(stat, index) in stats" :key="index" class="px-10 sm:px-16 text-center">
            <div class="text-6xl md:text-7xl lg:text-8xl font-extrabold techserm-text-black leading-none mb-3">
              {{ stat.value }}
            </div>
            <div class="text-gray-400 font-medium text-base tracking-wide">{{ stat.label }}</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})

const features = [
  {
    title: 'Scalable Code',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    pillClass: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'End-to-End Service',
    iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    pillClass: 'bg-orange-50 text-orange-500'
  },
  {
    title: 'Agile Process',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    pillClass: 'bg-teal-50 text-teal-600'
  },
  {
    title: 'Flexible Delivery',
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    pillClass: 'bg-[#07A0E1]/10 techserm-text-blue'
  }
]

const stats = [
  { value: '15+', label: 'Team Members' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' }
]
</script>
