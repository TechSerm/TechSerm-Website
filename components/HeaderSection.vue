<template>
  <section class="relative flex items-center overflow-hidden min-h-[calc(100vh-72px)]
                  bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">

    <!-- Decorative Floating Shapes -->
    <div class="absolute -top-20 right-10 w-96 h-96 bg-[#07A0E1]/[0.06] rounded-full blur-3xl animate-float"></div>
    <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#04405D]/[0.05] rounded-full blur-3xl animate-float-reverse"></div>

    <!-- Content -->
    <div class="container mx-auto relative z-10 py-12 lg:py-0">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        <!-- Text Content (7 columns on desktop) -->
        <div class="lg:col-span-7 text-center lg:text-left">

          <!-- Badge -->
          <div class="inline-flex items-center gap-2.5 bg-[#07A0E1]/10 text-[#07A0E1]
                      px-5 py-2.5 rounded-full text-sm font-bold mb-8
                      border border-[#07A0E1]/20 backdrop-blur-sm shadow-sm shadow-[#07A0E1]/10">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07A0E1] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#07A0E1]"></span>
            </span>
            Successfully delivered {{ data.successful_projects }} projects
          </div>

          <!-- Heading -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#04405D] mb-6 leading-[1.1]">
            {{ data.website_name }} &mdash;
            <span class="relative inline">
              <span class="relative z-10 text-[#07A0E1]">{{ data.slogan }}</span>
              <span class="absolute bottom-1 md:bottom-2 left-0 w-full h-2.5 md:h-3 bg-[#07A0E1]/15 -skew-x-3 rounded"></span>
            </span>
          </h1>

          <!-- Description -->
          <p class="text-base md:text-lg lg:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            {{ data.description }}
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink to="/contact"
              class="group inline-flex items-center justify-center gap-3 techserm-bg-blue
                     text-white font-bold py-4 px-8 rounded-full
                     transition-all duration-300
                     shadow-lg shadow-[#07A0E1]/25
                     hover:shadow-xl hover:shadow-[#07A0E1]/30
                     hover:-translate-y-0.5">
              Contact Us
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center
                           group-hover:bg-white/30 transition-colors duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                        d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                </svg>
              </span>
            </NuxtLink>

            <NuxtLink to="/services/web-development"
              class="group inline-flex items-center justify-center gap-3
                     bg-[#04405D]/5 border border-[#04405D]/15
                     hover:bg-[#04405D]/10 text-[#04405D]
                     font-bold py-4 px-8 rounded-full
                     transition-all duration-300
                     hover:-translate-y-0.5">
              Our Services
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Stats Row -->
          <div class="flex items-center gap-6 md:gap-8 mt-10 pt-10 border-t border-gray-200/60
                      justify-center lg:justify-start flex-wrap sm:flex-nowrap">
            <div class="text-center lg:text-left">
              <div class="text-2xl md:text-3xl font-extrabold text-[#04405D]">{{ data.successful_projects }}</div>
              <div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">Projects</div>
            </div>
            <div class="w-px h-10 bg-gray-200 hidden sm:block"></div>
            <div class="text-center lg:text-left">
              <div class="text-2xl md:text-3xl font-extrabold text-[#04405D]">15+</div>
              <div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">Team Members</div>
            </div>
            <div class="w-px h-10 bg-gray-200 hidden sm:block"></div>
            <div class="text-center lg:text-left">
              <div class="text-2xl md:text-3xl font-extrabold text-[#04405D]">99%</div>
              <div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">Satisfaction</div>
            </div>
          </div>

          <!-- Tech Stack Icons -->
          <div class="flex items-center gap-3 mt-6 justify-center lg:justify-start">
            <span class="text-xs text-gray-400 font-medium">Built with</span>
            <div class="flex items-center gap-2.5">
              <div v-for="icon in techIcons" :key="icon.name"
                   class="w-6 h-6 text-gray-300 hover:text-[#07A0E1] transition-colors duration-300 cursor-pointer"
                   :title="icon.name">
                <component :is="icon.component" />
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Showcase (5 columns on desktop) -->
        <div class="hidden md:flex md:items-center md:justify-center md:col-span-12 lg:col-span-5">
          <div class="relative max-w-lg mx-auto lg:max-w-none w-full">

            <!-- Slider Frame -->
            <div class="relative overflow-hidden rounded-2xl">
              <div class="relative flex items-center justify-center max-h-[calc(100vh-200px)]"
                   @mouseenter="pauseSlider" @mouseleave="resumeSlider">
                <Transition name="fade" mode="out-in">
                  <img
                    :key="currentSlide"
                    :src="data.slider[currentSlide]"
                    :alt="`Project screenshot ${currentSlide + 1}`"
                    class="max-w-full max-h-[calc(100vh-240px)] block"
                  >
                </Transition>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconReact from './icons/IconReact.vue'
import IconVue from './icons/IconVue.vue'
import IconNode from './icons/IconNode.vue'
import IconTypeScript from './icons/IconTypeScript.vue'
import IconDocker from './icons/IconDocker.vue'
import IconAWS from './icons/IconAWS.vue'

const props = defineProps({
  data: Object
})

const currentSlide = ref(0)
let intervalId = null

function startSlider() {
  if (props.data?.slider?.length > 1) {
    intervalId = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % props.data.slider.length
    }, 4000)
  }
}

function pauseSlider() {
  clearInterval(intervalId)
}

function resumeSlider() {
  pauseSlider()
  startSlider()
}

onMounted(startSlider)
onUnmounted(() => clearInterval(intervalId))

const techIcons = [
  { name: 'React', component: IconReact },
  { name: 'Vue.js', component: IconVue },
  { name: 'Node.js', component: IconNode },
  { name: 'TypeScript', component: IconTypeScript },
  { name: 'Docker', component: IconDocker },
  { name: 'AWS', component: IconAWS },
]
</script>

<style scoped>
/* Floating animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(12px); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 7s ease-in-out infinite;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
