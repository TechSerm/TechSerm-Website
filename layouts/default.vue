<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="text-xl font-bold text-blue-600">
            Your Logo
          </NuxtLink>

          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </NuxtLink>
            <NuxtLink to="/services" class="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2" @click="isMenuOpen = !isMenuOpen">
            <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span class="block w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden py-4">
          <NuxtLink to="/" class="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/services" class="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </NuxtLink>
          <NuxtLink to="/contact" class="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">About Us</h3>
            <p class="text-gray-300">Your company description goes here. Make it brief but meaningful.</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">About</NuxtLink></li>
              <li><NuxtLink to="/services" class="text-gray-300 hover:text-white transition-colors">Services</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2 text-gray-300">
              <li>123 Street Name</li>
              <li>City, Country</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
</script> 