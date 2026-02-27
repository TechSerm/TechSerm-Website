<template>
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35" />
          </svg>
          Tech Stack
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
          Technologies <span class="text-[#07A0E1]">Used</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        <div v-for="(tech, index) in resolvedTechnologies" :key="index"
          class="group bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
          <img :src="tech.logo" :alt="tech.name"
            class="h-14 w-14 object-contain mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
          <span
            class="text-[#04405D] font-bold text-sm group-hover:text-[#07A0E1] transition-colors duration-300">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  technologies: [Array, String]
})

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
}

const resolvedTechnologies = computed(() => {
  const list = Array.isArray(props.technologies)
    ? props.technologies
    : props.technologies.split(',').map(t => t.trim())

  return list.map(name => {
    const key = name.toLowerCase()
    return {
      name,
      logo: logoMap[key] || "https://via.placeholder.com/64?text=?"
    }
  })
})
</script>
