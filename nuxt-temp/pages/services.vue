<script setup>
const { data } = await useFetch('/api/services')
</script>

<template>
  <div>
    <div class="mb-16 bg-gray-100 text-black font-extrabold text-6xl" style="background-position: center center; background-repeat: no-repeat; background-size: cover; background: url('~/assets/img/services-banner.png')">
      <div class="container h-[300px] flex items-center justify-center text-white">
        Our Services
      </div>
    </div>
    <section class="container py-16">
      <ServicesSection :data="data.services" />
    </section>
    <section class="bg-gray-100 py-16">
      <div class="container">
        <WhySection :data="data.why" />
      </div>
    </section>
  </div>
</template> 