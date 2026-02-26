<template>
  <div v-if="data">
    <!-- Hero Section -->
    <HeaderSection :data="data.general.header" />

    <!-- About Section -->
    <AboutSection :data="data.general.about" />

    <!-- Services Section -->
    <ServicesSection />

    <!-- Projects Section -->
    <ProjectsSection :projects="data.projects.project_list" />

    <!-- CTA Section -->
    <section class="relative pb-0">
      <!-- Bottom half dark background -->
      <div class="absolute bottom-0 left-0 right-0 h-1/2 techserm-bg-black"></div>

      <div class="container mx-auto  relative z-10 pb-10">
        <div class="techserm-bg-blue rounded-[2rem] px-10 md:px-20 py-16 md:py-20 relative overflow-hidden">
          <!-- Decorative circles -->
          <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div class="absolute -bottom-16 right-1/3 w-48 h-48 bg-white/5 rounded-full"></div>

          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                <span class="font-black">Ready to transform</span> your
                business ideas into reality?
              </h2>
              <NuxtLink to="/contact"
                class="inline-flex items-center gap-3 bg-white techserm-text-black font-bold py-3.5 px-7 rounded-full hover:shadow-xl transition-all duration-300 group text-sm">
                Schedule an Appointment
                <span class="w-7 h-7 techserm-bg-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </span>
              </NuxtLink>
            </div>

            <!-- SVG Illustration -->
            <div class="hidden lg:flex justify-center">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
                <!-- Monitor -->
                <rect x="100" y="80" width="160" height="110" rx="10" fill="white" fill-opacity="0.15" />
                <rect x="110" y="90" width="140" height="80" rx="4" fill="white" fill-opacity="0.08" />
                <rect x="165" y="190" width="30" height="14" rx="2" fill="white" fill-opacity="0.12" />
                <rect x="140" y="204" width="80" height="6" rx="3" fill="white" fill-opacity="0.1" />
                <!-- Code lines -->
                <rect x="125" y="105" width="55" height="5" rx="2.5" fill="white" fill-opacity="0.35" />
                <rect x="125" y="116" width="85" height="5" rx="2.5" fill="white" fill-opacity="0.2" />
                <rect x="125" y="127" width="40" height="5" rx="2.5" fill="white" fill-opacity="0.3" />
                <rect x="125" y="138" width="70" height="5" rx="2.5" fill="white" fill-opacity="0.15" />
                <rect x="125" y="149" width="50" height="5" rx="2.5" fill="white" fill-opacity="0.25" />
                <!-- Person -->
                <circle cx="310" cy="110" r="22" fill="white" fill-opacity="0.15" />
                <rect x="288" y="140" width="44" height="55" rx="10" fill="white" fill-opacity="0.12" />
                <!-- Lightbulb -->
                <circle cx="310" cy="58" r="16" fill="white" fill-opacity="0.25" />
                <rect x="304" y="74" width="12" height="6" rx="2" fill="white" fill-opacity="0.2" />
                <line x1="310" y1="34" x2="310" y2="26" stroke="white" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" />
                <line x1="328" y1="42" x2="334" y2="36" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" />
                <line x1="292" y1="42" x2="286" y2="36" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" />
                <line x1="336" y1="58" x2="342" y2="58" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" />
                <line x1="284" y1="58" x2="278" y2="58" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" />
                <!-- Floating shapes -->
                <circle cx="70" cy="70" r="8" fill="white" fill-opacity="0.08" />
                <circle cx="55" cy="180" r="5" fill="white" fill-opacity="0.1" />
                <rect x="340" y="200" width="20" height="20" rx="5" fill="white" fill-opacity="0.08" transform="rotate(15 350 210)" />
                <!-- Gear -->
                <circle cx="65" cy="140" r="10" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="1.5" />
                <circle cx="65" cy="140" r="4" fill="white" fill-opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import ProjectsSection from '../components/home/ProjectsSection.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
