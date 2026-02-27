<template>
  <div class="py-24 bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Features
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
          Key <span class="text-[#07A0E1]">Features</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" @click="openModal(feature)"
          class="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <div class="relative h-[220px] overflow-hidden">
            <img :src="feature.image" :alt="feature.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/50 via-transparent to-transparent"></div>
          </div>
          <div class="p-6">
            <h3
              class="text-lg font-bold text-[#04405D] mb-2 group-hover:text-[#07A0E1] transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">{{ feature.descriptions }}</p>
            <div class="flex items-center gap-2 text-[#07A0E1] font-semibold text-sm mt-4">
              View Details
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="selectedFeature" class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal">
        <div class="absolute inset-0 bg-[#04405D]/60 backdrop-blur-sm" @click="closeModal"></div>
        <div
          class="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fade-in">
          <!-- Close Button -->
          <button @click="closeModal"
            class="absolute top-4 right-4 z-10 w-10 h-10 bg-[#04405D]/50 hover:bg-[#04405D]/70 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- Image -->
          <div class="relative h-[300px]">
            <img :src="selectedFeature.image" :alt="selectedFeature.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/40 to-transparent"></div>
          </div>
          <!-- Content -->
          <div class="p-8 overflow-y-auto max-h-[calc(90vh-300px)]">
            <h3 class="text-2xl font-extrabold text-[#04405D] mb-4">{{ selectedFeature.title }}</h3>
            <p class="text-gray-500 text-lg leading-relaxed whitespace-pre-line">{{ selectedFeature.descriptions }}</p>
            <div v-if="selectedFeature.benefits" class="mt-6">
              <h4 class="text-lg font-bold text-[#04405D] mb-3">Key Benefits</h4>
              <div class="space-y-2">
                <div v-for="(benefit, i) in selectedFeature.benefits" :key="i"
                  class="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                  <svg class="w-5 h-5 text-[#07A0E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-600 text-sm font-medium">{{ benefit }}</span>
                </div>
              </div>
            </div>
            <button @click="closeModal"
              class="mt-6 inline-flex items-center gap-2 techserm-bg-blue text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  features: {
    type: Array,
    required: true
  }
})

const selectedFeature = ref(null)

const openModal = (feature) => {
  selectedFeature.value = feature
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedFeature.value = null
  document.body.style.overflow = ''
}
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
</style>
