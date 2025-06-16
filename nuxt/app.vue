<template>
  <div>
    <template v-if="pending">
      <Loader />
    </template>
    <template v-else-if="error">
      <div class="flex min-h-screen items-center justify-center">
        <p class="text-red-500 text-xl">Failed to load data. Please try again later.</p>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col min-h-screen">
        <div class="bg-gray-0 z-50">
          <Navbar :data="data" />
        </div>
        <main class="mt-[72px] flex-grow z-0">
          <NuxtPage :data="data" />
        </main>
        <Footer :data="data" class="mt-auto" />
      </div>
    </template>
  </div>
  

</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch(`${config.public.apiBase}/api/data`, {
  lazy: false,
  server: true,
  key: 'site-data',
  transform: (response) => {
    // Ensure we have a valid response even during static generation
    return response || {
      general: {
        basic: { website_title: 'TechSerm' },
        header: {
          website_name: 'TechSerm',
          slogan: 'Your Reliable Software Development Partner',
          description: 'Custom software, web, and mobile solutions that empower businesses to innovate, scale, and succeed.',
          successful_projects: '6+',
          image: '/images/header-image.jpg'
        }
      },
      projects: { basic: [], project_list: [] }
    }
  }
})
</script>