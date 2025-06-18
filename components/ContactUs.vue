<template>
  <section class="">
    <div class="">
      <div class="max-w-4xl mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Phone -->
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p class="text-gray-600">(+088) 01777564786</p>
          </div>

          <!-- Email -->
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p class="text-gray-600">info@techserm.com</p>
          </div>

          <!-- Location -->
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <div class="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p class="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B00] focus:border-[#FF6B00]"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B00] focus:border-[#FF6B00]"
                  required
                />
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B00] focus:border-[#FF6B00]"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6B00] focus:border-[#FF6B00]"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="px-8 py-3 bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script> 