<template>
  <section>
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Contact Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <!-- Phone -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8 text-center">
            <div
              class="w-14 h-14 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#FF6B00]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[#003D5A] mb-2">Phone</h3>
            <p class="text-gray-600">(+088) 01777564786</p>
          </div>

          <!-- Email -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8 text-center">
            <div
              class="w-14 h-14 bg-[#003D5A]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#003D5A]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[#003D5A] mb-2">Email</h3>
            <p class="text-gray-600">info@techserm.com</p>
          </div>

          <!-- Location -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8 text-center">
            <div
              class="w-14 h-14 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#FF6B00]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[#003D5A] mb-2">Location</h3>
            <p class="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div class="text-center mb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-[#003D5A] mb-3">Send Us a Message</h2>
            <p class="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-[#003D5A] mb-2">Name</label>
                <input type="text" id="name" v-model="form.name" placeholder="Your full name"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-colors duration-200 outline-none"
                  required />
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-[#003D5A] mb-2">Email</label>
                <input type="email" id="email" v-model="form.email" placeholder="your@email.com"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-colors duration-200 outline-none"
                  required />
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-semibold text-[#003D5A] mb-2">Subject</label>
              <input type="text" id="subject" v-model="form.subject" placeholder="What's this about?"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-colors duration-200 outline-none"
                required />
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-[#003D5A] mb-2">Message</label>
              <textarea id="message" v-model="form.message" rows="5" placeholder="Tell us about your project..."
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition-colors duration-200 outline-none resize-none"
                required></textarea>
            </div>
            <div class="text-center pt-2">
              <button type="submit"
                class="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-4 px-10 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                Send Message
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
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
  console.log('Form submitted:', form.value)
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
