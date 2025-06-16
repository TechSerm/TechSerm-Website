<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
          alt="Background" 
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#009EE0]/90"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
          <p class="text-xl text-white opacity-90">Discover our portfolio of innovative solutions and successful implementations</p>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <template v-for="project in data.projects.project_list" :key="project.id">
            <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="relative overflow-hidden rounded-t-2xl">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 right-4">
                  <span class="bg-[#003D5A] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    {{ project.category }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-sm font-medium flex items-center">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    {{ project.date }}
                  </span>
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-[#003D5A] mb-3 group-hover:text-[#009EE0] transition-colors duration-300">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 mb-6 line-clamp-3">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                  >
                    {{ tech }}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <UButton
                    :to="`/projects/${project.id}`"
                    color="primary"
                    variant="solid"
                    size="lg"
                    class="bg-[#003D5A] hover:bg-[#009EE0] flex-1 mr-4"
                  >
                    View Details
                  </UButton>
                  <UButton
                    :to="project.demo_url"
                    color="primary"
                    variant="soft"
                    size="lg"
                    class="flex-1"
                    v-if="project.demo_url"
                  >
                    Live Demo
                  </UButton>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#003D5A] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Let's discuss how we can help bring your ideas to life.</p>
        <UButton
          to="/contact"
          color="primary"
          variant="solid"
          size="lg"
          class="bg-[#009EE0] hover:bg-[#0086c3]"
        >
          Get in Touch
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProjectsSection from '../../components/ProjectSection.vue'
defineProps({
  data: Object
})
</script>