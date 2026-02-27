<template>
  <div v-if="project">
    <!-- Hero Section -->
    <section class="relative py-28 md:py-36 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="project.basic.banner" :alt="project.basic.title" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#04405D]/95 to-[#04405D]/80"></div>
      </div>
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-[#07A0E1]/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#07A0E1]/[0.07] rounded-full blur-3xl"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Left Content -->
          <div>
            <!-- Meta Badges -->
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span v-if="project.basic.project_type"
                class="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {{ project.basic.project_type }}
              </span>
              <span v-if="project.basic.client"
                class="inline-flex items-center gap-2 bg-[#07A0E1]/20 border border-[#07A0E1]/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {{ project.basic.client }}
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {{ project.basic.title }}
            </h1>
            <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              {{ project.basic.short_descriptions }}
            </p>
            <!-- Technology Tags -->
            <div v-if="technologyList.length" class="flex flex-wrap gap-2">
              <span v-for="tech in technologyList" :key="tech"
                class="bg-white/90 backdrop-blur-sm text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Right Image -->
          <div class="hidden lg:block">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img :src="project.basic.banner" :alt="project.basic.title"
                class="w-full h-[400px] object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Overview
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
              Project <span class="text-[#07A0E1]">Overview</span>
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              {{ project.basic.descriptions || project.basic.short_descriptions }}
            </p>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sticky top-24">
              <h3 class="text-xl font-bold text-[#04405D] mb-6">Project Details</h3>
              <div class="space-y-6">
                <div v-if="project.basic.client">
                  <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Client</h4>
                  <p class="text-[#04405D] font-semibold">{{ project.basic.client }}</p>
                </div>
                <div v-if="project.basic.project_type" class="border-t border-gray-100 pt-6">
                  <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Project Type</h4>
                  <p class="text-[#04405D] font-semibold">{{ project.basic.project_type }}</p>
                </div>
                <div v-if="technologyList.length" class="border-t border-gray-100 pt-6">
                  <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in technologyList" :key="tech"
                      class="bg-[#04405D]/5 text-[#04405D] border border-[#04405D]/10 px-3 py-1.5 rounded-lg text-xs font-semibold">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div v-if="project.basic.liveUrl" class="border-t border-gray-100 pt-6">
                  <a :href="project.basic.liveUrl" target="_blank"
                    class="group inline-flex items-center gap-2 techserm-bg-blue text-white font-bold py-3 px-6 rounded-full w-full justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section v-if="project.features && project.features.length"
      class="py-24 bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in project.features" :key="index" @click="selectedFeature = feature"
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
    </section>

    <!-- CTA Section -->
    <section class="relative py-0">
      <div class="absolute bottom-0 left-0 right-0 h-1/2 techserm-bg-black"></div>
      <div class="container mx-auto relative z-10 pb-10">
        <div class="techserm-bg-blue rounded-[2rem] px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
          <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-white/[0.07] rounded-full"></div>
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Want to Build <br class="hidden md:block">Something Similar?
              </h2>
              <p class="text-white/80 text-lg leading-relaxed mb-8">
                Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/contact"
                  class="group inline-flex items-center justify-center gap-3 bg-white text-[#07A0E1] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  Start Your Project
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <NuxtLink to="/projects"
                  class="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                  More Projects
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="hidden lg:flex justify-end">
              <div class="relative">
                <div class="w-64 h-64 border-2 border-white/20 rounded-full flex items-center justify-center">
                  <div class="w-44 h-44 border-2 border-white/15 rounded-full flex items-center justify-center">
                    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Modal -->
    <Teleport to="body">
      <div v-if="selectedFeature" class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="selectedFeature = null">
        <div class="absolute inset-0 bg-[#04405D]/60 backdrop-blur-sm" @click="selectedFeature = null"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          <!-- Close Button -->
          <button @click="selectedFeature = null"
            class="absolute top-4 right-4 z-10 w-10 h-10 bg-[#04405D]/50 hover:bg-[#04405D]/70 rounded-full flex items-center justify-center transition-colors duration-200">
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
            <button @click="selectedFeature = null"
              class="mt-6 inline-flex items-center gap-2 techserm-bg-blue text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg">
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const { data: technologiesData } = await useFetch('/data/technologies.json')

const selectedFeature = ref(null)

watch(selectedFeature, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const project = computed(() => {
  if (!props.data?.projects?.project_list) return null
  return props.data.projects.project_list.find(
    p => p.basic.slug === route.params.id
  )
})

const technologyList = computed(() => {
  if (!project.value?.technology) return []
  return project.value.technology.split(',').map(t => t.trim()).filter(Boolean)
})
</script>
