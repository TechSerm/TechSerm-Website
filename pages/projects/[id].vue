<template>
  <div v-if="project">
    <!-- Hero Section -->
    <section class="relative h-[600px] bg-gray-900">
      <!-- Background Image with Overlay -->
      <img :src="project.basic.banner"
           :alt="project.basic.title"
           class="absolute inset-0 w-full h-full object-cover opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <div class="relative container h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <!-- Left Content -->
          <div class="max-w-2xl">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span v-if="project.basic.project_type"
                class="px-4 py-2 rounded-full text-sm backdrop-blur-sm bg-blue-50 text-blue-700">
                {{ project.basic.project_type }}
              </span>
              <span v-if="project.basic.client"
                class="px-4 py-2 rounded-full text-sm backdrop-blur-sm bg-orange-50 text-orange-700">
                {{ project.basic.client }}
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ project.basic.title }}</h1>
            <p class="text-xl text-gray-200 mb-8">{{ project.basic.short_descriptions }}</p>
            <div v-if="technologyList.length" class="flex flex-wrap gap-4">
              <span v-for="tech in technologyList" :key="tech"
                    :class="[
                      'px-4 py-2 rounded-full text-sm backdrop-blur-sm',
                      getTechnologyDetails(tech).color.bg,
                      getTechnologyDetails(tech).color.text
                    ]">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Right Image -->
          <div class="hidden lg:block relative">
            <div class="relative w-full h-[400px] rounded-2xl border-1 border-gray-500 overflow-hidden shadow-2xl">
              <img :src="project.basic.banner"
                   :alt="project.basic.title"
                   class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="prose prose-lg max-w-none">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
              <div class="space-y-6 text-gray-600">
                <p>{{ project.basic.descriptions || project.basic.short_descriptions }}</p>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
              <div class="space-y-6">
                <div v-if="project.basic.client">
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Client</h4>
                  <p class="text-gray-900">{{ project.basic.client }}</p>
                </div>
                <div v-if="project.basic.project_type">
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Project Type</h4>
                  <p class="text-gray-900">{{ project.basic.project_type }}</p>
                </div>
                <div v-if="technologyList.length">
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in technologyList" :key="tech"
                          :class="[
                            'px-3 py-1 rounded-full text-sm',
                            getTechnologyDetails(tech).color.bg,
                            getTechnologyDetails(tech).color.text
                          ]">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section v-if="project.features && project.features.length" class="py-16 bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in project.features" :key="index"
               @click="selectedFeature = feature"
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div class="relative h-[250px]">
              <img :src="feature.image"
                   :alt="feature.title"
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ feature.title }}</h3>
              <p class="text-gray-600 mb-6">{{ feature.descriptions }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-gray-900 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.</p>
        <NuxtLink to="/contact"
                 class="inline-block bg-[#FF6B00] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF8533] transition-colors duration-300">
          Get in Touch
        </NuxtLink>
      </div>
    </section>

    <!-- Feature Modal -->
    <Teleport to="body">
      <div v-if="selectedFeature" class="fixed inset-0 z-50 flex items-center justify-center p-4"
           @click.self="selectedFeature = null">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="selectedFeature = null"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          <!-- Close Button -->
          <button @click="selectedFeature = null"
                  class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- Image -->
          <div class="relative h-[350px]">
            <img :src="selectedFeature.image" :alt="selectedFeature.title"
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <!-- Content -->
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ selectedFeature.title }}</h3>
            <p class="text-gray-600 text-lg leading-relaxed">{{ selectedFeature.descriptions }}</p>
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

const getTechnologyDetails = (techName) => {
  if (!technologiesData.value?.technologies) {
    return {
      name: techName,
      description: '',
      icon: '',
      color: {
        bg: 'bg-gray-50',
        text: 'text-gray-700'
      }
    }
  }

  const tech = technologiesData.value.technologies.find(
    tech => tech.name.toLowerCase() === techName.toLowerCase()
  )

  return tech || {
    name: techName,
    description: '',
    icon: '',
    color: {
      bg: 'bg-gray-50',
      text: 'text-gray-700'
    }
  }
}

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
