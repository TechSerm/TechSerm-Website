<template>
  <section id="home" v-if="data">
    <div class="bg-gray-100 -mt-[75px] pt-[200px]">
      <div class="container pb-20">
        <HeaderSection :data="data.general.header" />
      </div>

      <div class="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </section>
  <section id="about" class="container mt-20 mb-15 md:pt-0" v-if="data">
    <AboutSection :data="data.general.about" />
  </section>


  <!-- <div class="services bg-gray-100 mt-20" id="services" v-if="data">
      <div class="container lg:pb-30 py-15">
          <ServicesSection :data="data.general.services" />
      </div>
  </div>

  <section id="projects" class="" v-if="data">
      <div class="container lg:pb-30 py-15">
          <ProjectsSection :projects="data.projects" />
      </div>
  </section> -->

  <!-- <section id="contact" class="bg-gray-100" v-if="data">
      <div class="container lg:pb-30 py-15">
          <ContactSection :data="data" />
      </div>
  </section> -->

  <!-- Services Section -->
  <section class="py-20 bg-gray-50" v-if="data">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="service in services" :key="service.title">
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#003D5A] to-[#009EE0] rounded-xl flex items-center justify-center mb-6">
              <i :class="`fas ${service.icon} text-2xl text-white`"></i>
            </div>
            <h3 class="text-xl font-bold text-[#003D5A] mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <UButton to="/services" color="primary" variant="solid" size="lg"
              class="w-full bg-[#003D5A] hover:bg-[#009EE0]">
              Learn More
            </UButton>
          </div>
        </template>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-20" v-if="data">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] mb-4">Featured Projects</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful implementations
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <template v-for="project in data.projects.project_list" :key="project.id">
          <div
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative overflow-hidden rounded-t-2xl">
              <img :src="project.image" :alt="project.title"
                class="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500">
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
              <div class="absolute top-4 right-4">
                <span class="bg-[#003D5A] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                  {{ project.category }}
                </span>
              </div>
            </div>
            <div class="p-8">
              <h3
                class="text-2xl font-bold text-[#003D5A] mb-3 group-hover:text-[#009EE0] transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-6 line-clamp-3">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" :key="tech"
                  class="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-300">
                  {{ tech }}
                </span>
              </div>
              <UButton :to="`/projects/${project.id}`" color="primary" variant="solid" size="lg"
                class="w-full bg-[#003D5A] hover:bg-[#009EE0]">
                View Details
              </UButton>
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
      <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
        Let's discuss how we can help transform your business with our technology solutions
      </p>
      <UButton to="/contact" color="primary" variant="solid" size="lg" class="bg-[#009EE0] hover:bg-[#0086c3]">
        Get in Touch
      </UButton>
    </div>
  </section>
</template>

<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import WhySection from '../components/WhySection.vue'
import ProjectsSection from '../components/home/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'

const services = [
  {
    title: 'Custom Software Development',
    icon: 'fa-laptop-code',
    description: 'We build tailored software solutions from the ground up. Our team transforms your ideas into powerful, scalable applications with exceptional service and reliable results.'
  },
  {
    title: 'Web Application Development',
    icon: 'fa-globe',
    description: 'We deliver cutting-edge web applications using modern technologies to build fast, secure, and scalable platforms that align with your business goals.'
  },
  {
    title: 'Mobile Application Development',
    icon: 'fa-mobile-alt',
    description: 'We craft high-performance mobile apps for Android and iOS platforms, creating intuitive, responsive applications that delight users and drive engagement.'
  }
]

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.bg-service-background {
  background-image: linear-gradient(90deg, #d2e7ef, #f2fbff);
}
</style>