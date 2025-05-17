<template>
  <section class="min-h-[80vh] flex items-center justify-center">
    <div class="container px-4 py-8 mx-auto max-w-4xl">
      <div class="flex flex-col items-center text-center space-y-8">
        <div class="space-y-4">
          <h1 class="text-9xl font-bold text-gray-900 dark:text-white">404</h1>
          <div class="space-y-2">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              We couldn't find the page you were looking for.
            </p>
          </div>
        </div>
        
        <div class="space-y-4">
          <router-link 
            to="/" 
            class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#009EE0] rounded-lg hover:bg-[#0085c3] transition duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>