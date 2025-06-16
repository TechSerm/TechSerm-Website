<script setup>
const { data } = await useFetch('/api/contact')
</script>

<template>
  <div>
    <div class="mb-16 bg-gray-100 text-black font-extrabold text-6xl" style="background-position: center center; background-repeat: no-repeat; background-size: cover; background: url('~/assets/img/contact-banner.png')">
      <div class="container h-[300px] flex items-center justify-center text-white">
        Contact Us
      </div>
    </div>
    <section class="container py-16">
      <ContactSection :data="data" />
    </section>
  </div>
</template> 