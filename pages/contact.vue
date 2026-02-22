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
      <ContactUs />
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