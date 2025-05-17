<script setup>
import AboutSectionRight from './AboutSectionRight.vue'
defineProps({
  data: Object
})
</script>

<template>
  <div class="">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold text-[#003D5A]">Who We Are</h1>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-11 gap-8 items-start">
      <!-- Left Content (2/3 width) -->
      <div class="lg:col-span-6 space-y-8">
        <!-- Description Box -->
        <div class="text-gray-800 text-md text-justify">
          <p>Techserm delivers custom software, web, and mobile application development services to both government and commercial clients. Our team of full-stack developers specializes in building scalable digital solutions tailored to unique business needs. From intuitive web platforms and robust mobile apps to complex enterprise systems, Techserm is committed to driving innovation and efficiency. We empower our clients—ranging from startups to global enterprises—to build smarter, more connected solutions for a better tomorrow.</p>
        </div>

        <!-- Stats Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Stats Card 1 -->
          <div class="relative group">
            <div class="h-40 bg-gradient-to-r from-[#009EE0] to-[#003D5A] rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e" 
                   alt="Our Team" 
                   class="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition duration-300">
            </div>
            <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-5/6">
              <div class="bg-white p-6 rounded-lg shadow-xl text-center border border-gray-200 hover:shadow-2xl transition duration-300">
                <p class="text-5xl font-bold text-[#003D5A]">15+</p>
                <p class="text-xl font-semibold text-[#003D5A] mt-2">Team Members</p>
              </div>
            </div>
            
          </div>

          <!-- Stats Card 2 -->
          <div class="relative group">
            <div class="h-40 bg-gradient-to-r from-[#003D5A] to-[#009EE0] rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                   alt="Our Projects" 
                   class="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition duration-300">
            </div>
            <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-5/6">
              <div class="bg-white p-6 rounded-lg shadow-xl text-center border border-gray-200 hover:shadow-2xl transition duration-300">
                <p class="text-5xl font-bold text-[#003D5A]">50+</p>
                <p class="text-xl font-semibold text-[#003D5A] mt-2">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Content (1/3 width) -->
      <div class="lg:col-span-5">
        <AboutSectionRight :data="data" />
      </div>
    </div>
  </div>
</template>