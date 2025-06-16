<script setup>
const { data } = await useFetch('/api/about')
</script>

<template>
  <div class="container mt-16 mb-16">
    <AboutSection :data="data.about" />
    <WhySection class="mt-20 mb-20" :data="data.why" />
  </div>
</template> 