<template>
    <section class="bg-white py-16 pb-22">
      <div class="container">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-[#003D5A] mb-4">Technologies We Used</h1>
          <div class="w-24 h-1.5 techserm-bg-blue mx-auto mt-4 rounded-full"></div>
        </div>
  
        <!-- Technologies Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div
            v-for="(tech, index) in resolvedTechnologies"
            :key="index"
            class="flex flex-col items-center p-5 bg-white border border-gray-100 rounded-xl shadow-sm"
          >
            <img :src="tech.logo" :alt="tech.name" class="h-16 w-16 object-contain mb-4" />
            <span class="techserm-text-black font-bold text-lg text-center">{{ tech.name }}</span>
          </div>
        </div>
      </div>
      
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    technologies: [Array, String] // Accept array or comma-separated string
  });
  
  // Mapping of technology names to logo URLs
  const logoMap = {
    react: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    "node.js": "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    node: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    mongodb: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    arcgis: "https://cdn.worldvectorlogo.com/logos/arcgis-1.svg",
    aws: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    docker: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    postgresql: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    python: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    leaflet: "https://cdn.worldvectorlogo.com/logos/leaflet.svg",
    redis: "https://cdn.worldvectorlogo.com/logos/redis.svg",
    terraform: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg",
    kubernetes: "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
    vue: "https://cdn.worldvectorlogo.com/logos/vue-js-1.svg",
    laravel: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    php: "https://cdn.worldvectorlogo.com/logos/php-1.svg"
  };
  
  // Convert input to array and map to logos
  const resolvedTechnologies = computed(() => {
    const list = Array.isArray(props.technologies)
      ? props.technologies
      : props.technologies.split(',').map(t => t.trim());
  
    return list.map(name => {
      const key = name.toLowerCase();
      return {
        name,
        logo: logoMap[key] || "https://via.placeholder.com/64?text=?" // fallback if logo not found
      };
    });
  });
  </script>
  