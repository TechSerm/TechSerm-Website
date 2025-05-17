<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
import { RouterView } from 'vue-router'

const fetchedData = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://admin.techserm.io/api/data')
    const data = await res.json()
    fetchedData.value = data
  } catch (error) {
    console.error('API fetch failed:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Loader v-if="isLoading" />
    <div v-else class="flex flex-col min-h-screen">
      <div class="bg-gray-0 z-50">
        <Navbar :data="fetchedData" />
      </div>
      <main class="mt-[72px] flex-grow z-0">
        <RouterView :data="fetchedData" />
      </main>
      <Footer :data="fetchedData" class="mt-auto" />
    </div>
  </div>
</template>



