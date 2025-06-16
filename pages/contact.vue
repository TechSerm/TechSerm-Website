<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-[#003D5A] to-[#009EE0] text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p class="text-xl opacity-90">Let's discuss how we can help transform your business with our technology solutions</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-[#003D5A] mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE0] focus:border-transparent"
                    required
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE0] focus:border-transparent"
                    required
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE0] focus:border-transparent"
                  required
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE0] focus:border-transparent"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE0] focus:border-transparent"
                  required
                >
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009EE0] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-[#003D5A] hover:bg-[#009EE0] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Office Locations -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-[#003D5A] mb-6">Our Offices</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center">
                      <i class="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">Head Office</h3>
                    <p class="text-gray-600">123 Tech Street, Silicon Valley</p>
                    <p class="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center">
                      <i class="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">Development Center</h3>
                    <p class="text-gray-600">456 Innovation Drive</p>
                    <p class="text-gray-600">Austin, TX 78701</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Methods -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-[#003D5A] mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center">
                      <i class="fas fa-phone text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">Phone</h3>
                    <p class="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center">
                      <i class="fas fa-envelope text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                    <p class="text-gray-600">info@techserm.com</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center">
                      <i class="fas fa-clock text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">Business Hours</h3>
                    <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p class="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-[#003D5A] mb-6">Follow Us</h2>
              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center hover:bg-[#003D5A] transition-colors duration-300">
                  <i class="fab fa-linkedin-in text-white text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center hover:bg-[#003D5A] transition-colors duration-300">
                  <i class="fab fa-twitter text-white text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center hover:bg-[#003D5A] transition-colors duration-300">
                  <i class="fab fa-facebook-f text-white text-xl"></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#009EE0] rounded-lg flex items-center justify-center hover:bg-[#003D5A] transition-colors duration-300">
                  <i class="fab fa-instagram text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  // Handle form submission
  try {
    // Add your form submission logic here
    console.log('Form submitted:', form.value)
    // Reset form after successful submission
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script> 