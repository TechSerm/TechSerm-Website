<template>
  <section>
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">

        <!-- Contact Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div v-for="(item, index) in contactInfo" :key="index"
            class="group bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-500"
              :class="index % 2 === 0 ? 'bg-[#07A0E1]/10' : 'bg-[#04405D]/10'">
              <svg class="w-6 h-6" :class="index % 2 === 0 ? 'techserm-text-blue' : 'techserm-text-black'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.iconPath" />
              </svg>
            </div>
            <h3 class="text-lg font-bold techserm-text-black mb-2">{{ item.title }}</h3>
            <p class="text-gray-400 text-sm">{{ item.value }}</p>
          </div>
        </div>

        <!-- Form Section -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">

          <!-- Left: Info -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl md:text-4xl font-extrabold techserm-text-black mb-4 leading-tight">
              Let's Start a <span class="techserm-text-blue">Conversation</span>
            </h2>
            <p class="text-gray-400 leading-relaxed mb-8">
              Fill out the form and our team will get back to you within 24 hours. We're here to help bring your ideas to life.
            </p>

            <!-- Why Contact Us -->
            <div class="space-y-5">
              <div v-for="(reason, index) in reasons" :key="index" class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#07A0E1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 techserm-text-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold techserm-text-black text-sm">{{ reason.title }}</h4>
                  <p class="text-gray-400 text-sm">{{ reason.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10">
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label for="name" class="block text-sm font-semibold techserm-text-black mb-2">Name</label>
                    <input type="text" id="name" v-model="form.name" placeholder="Your full name"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#07A0E1] focus:border-[#07A0E1] transition-colors duration-200 outline-none text-sm"
                      required />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-semibold techserm-text-black mb-2">Email</label>
                    <input type="email" id="email" v-model="form.email" placeholder="your@email.com"
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#07A0E1] focus:border-[#07A0E1] transition-colors duration-200 outline-none text-sm"
                      required />
                  </div>
                </div>
                <div>
                  <label for="subject" class="block text-sm font-semibold techserm-text-black mb-2">Subject</label>
                  <input type="text" id="subject" v-model="form.subject" placeholder="What's this about?"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#07A0E1] focus:border-[#07A0E1] transition-colors duration-200 outline-none text-sm"
                    required />
                </div>
                <div>
                  <label for="message" class="block text-sm font-semibold techserm-text-black mb-2">Message</label>
                  <textarea id="message" v-model="form.message" rows="5" placeholder="Tell us about your project..."
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#07A0E1] focus:border-[#07A0E1] transition-colors duration-200 outline-none resize-none text-sm"
                    required></textarea>
                </div>
                <button type="submit"
                  class="w-full inline-flex items-center justify-center gap-2 techserm-bg-blue hover:brightness-110 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                  Send Message
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contactInfo = [
  {
    title: 'Phone',
    value: '(+088) 01777564786',
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  },
  {
    title: 'Email',
    value: 'info@techserm.com',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Location',
    value: 'Dhaka, Bangladesh',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z'
  }
]

const reasons = [
  { title: 'Quick Response', description: 'We respond within 24 hours to all inquiries' },
  { title: 'Free Consultation', description: 'Get expert advice at no cost before starting' },
  { title: 'Custom Solutions', description: 'Every project is tailored to your needs' }
]

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>
